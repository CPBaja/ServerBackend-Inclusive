/*
* Essentially a nice wrapper around the websocket to make my life easier.
* Basically, extracts the message "channel" from every message and fires events registered on it.
* Realistically only saves me one if statement in each handler and like 2 globals but its worth it.
*/
const log = require(logger)("WSS");
const EventEmitter = require("events");
const webSocket = require("ws");
const DataDispatcher = require("./Data/DataDispatcher");


class WebSocketServer extends EventEmitter{
    constructor(WssOptions){
        super();
        log.info("Starting WSS");
        this.wss = new webSocket.Server( WssOptions);
        this.wss.on("connection", (ws) => this.connection(this.wss, ws));
    }

    connection(wss, ws){
        log.http(`Accepted connection from ${ws._socket.remoteAddress}`);

        /*Add our custom crap to the socket*/
        ws["sendNotification"] = function(type, header, message){
          this.send(JSON.stringify({
              channel: "notification",
              type: type, //Error, success, normal...
              header: header,
              message: message
          }));
        };

        ws["sendObject"] = function (channel, object) {
          object.channel = channel; //Set the channel on the object
          this.send(JSON.stringify(object));
        };

        ws["sendError"] = function (msg) {
            this.sendObject("error", {msg: msg});
        };

        ws["dispatcher"] = new DataDispatcher(ws);
       // console.log(JSON.stringify({channel: "dataRequest"}));





        this.emit("connection", wss, ws);
        ws.on("message", (data) => this.message(wss, ws, data));
        ws.on("error", (data) => this.error(wss, ws, data));
        ws.on("close", (data) => this.close(wss, ws, data));
    }

    message(wss, ws, data){
        log.http(`Received message from ${ws._socket.remoteAddress}: "${data}"`);
        this.emit("message", wss, ws, data);
        try{
            let parsedMessage = JSON.parse(data);
            if(parsedMessage.channel){
                this.emit(parsedMessage.channel, wss, ws, parsedMessage);
            } else {
                log.warn(`Key "channel" missing from JSON received from ${ws._socket.remoteAddress}`);
                this.emit("noChannel", wss, ws, data);
            }
        }catch (e) {
            log.warn(`A websocket errored: ${ws._socket.remoteAddress}: "${data}"`);
            log.warn(e);
            this.emit("parseError", wss, ws, data);
        }
    }

    close(wss, ws, closeEvent){
        log.http(`Connection with ${ws._socket.remoteAddress} was closed by client - ${closeEvent}`);
    }

    error(wss, ws, errorEvent){
        log.error(`WS connection with ${ws._socket.remoteAddress} errored - ${errorEvent}`);
    }
}

module.exports = WebSocketServer;

