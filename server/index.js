require("dotenv").config(); //Load ENV variables first thing first

/*LOGGER SETUP+STARTUP*/
require("./Logger");

/*DB SETUP+START*/
require("./Database.js");

/*HTTP SERVER SETUP + START*/
require("./Server");

console.log("INDEX.js");
console.log(JSON.stringify({channel: "topkek"}));
