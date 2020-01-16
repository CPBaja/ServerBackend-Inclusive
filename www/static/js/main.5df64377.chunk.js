(this.webpackJsonpcpbajaserverfrontend=this.webpackJsonpcpbajaserverfrontend||[]).push([[0],{341:function(e,t,a){e.exports=a(516)},346:function(e,t,a){},347:function(e,t,a){},516:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(92),r=a.n(s),o=(a(346),a(37)),l=a(38),h=a(39),c=a(40),u=a(41),d=(a(347),a(328)),m=a(104),p=a(541),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={sideMenuVisible:"true"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.currentPage;return n.a.createElement(p.a,null,n.a.createElement(p.a.Item,{name:"home",active:"home"===e,onClick:this.props.setPage,href:"/sensors"}),n.a.createElement(p.a.Item,{name:"sensorPage",active:"sensorPage"===e,onClick:this.props.setPage,href:"/status"}))}}]),t}(i.Component);var f=a(296),g=a(172),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).onTimeframeUpdate=Object(g.throttle)(e.onTimeframeUpdate,1e3/60),a.center=0,a.radius=0,a.timeMin=0,a.timeMax=0,a.lastX=0,a.minorDivisions=.1,a.majorDivisions=.21,a.divisionPlace=0,a.MAJOR_TICK_WIDTH=3,a.MAJOR_TICK_HEIGHT=40,a.MINOR_TICK_WIDTH=1,a.MINOR_TICK_HEIGHT=30,a.MAJOR_TICK_COLOR="rgb(250, 250, 250)",a.MINOR_TICK_COLOR="rgb(210, 210, 210)",a.zoomMotionMultiplier=1,a.zoomWheelMultiplier=.001,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.canvas=r.a.findDOMNode(this),this.ctx=this.canvas.getContext("2d"),this.cwidth=this.canvas.scrollWidth,this.cheight=this.canvas.scrollHeight,this.imp=new f({source:this.canvas,update:function(t){return e.update(t)},friction:.75}),window.addEventListener("resize",(function(){e.redraw()})),this.canvas.addEventListener("touchstart",(function(t){return e.touchStarted(t)})),this.canvas.addEventListener("touchend",(function(t){return e.touchEnded(t)})),this.canvas.addEventListener("touchcancel",(function(t){return e.touchEnded(t)})),this.canvas.addEventListener("wheel",(function(t){return e.wheelScrolled(t)})),this.setRad(1),this.update(0)}},{key:"update",value:function(e){var t=e-this.lastX;this.center+=-t*this.radius*2/this.cwidth,this.lastX=e,this.calcTimeBounds(),this.redraw()}},{key:"redraw",value:function(){this.onTimeframeUpdate?this.onTimeframeUpdate([this.timeMin,this.timeMax]):console.log("Timeframe updated, but no listener!"),this.cwidth=this.canvas.scrollWidth,this.cheight=this.canvas.scrollHeight,this.canvas.height=this.cheight,this.canvas.width=this.cwidth,this.ctx.fillStyle="rgb(120,120,120)",this.ctx.fillRect(0,0,this.cwidth,this.cheight),this.drawTicks(this.minorDivisions,this.majorDivisions),this.drawDisabledBackground(0,-1),this.drawPositionLine()}},{key:"drawPositionLine",value:function(){var e=this.cwidth/2;this.ctx.fillStyle="rgba(255,0,0,.6)",this.ctx.fillRect(e-this.MAJOR_TICK_WIDTH/2,0,this.MAJOR_TICK_WIDTH,this.cheight),this.ctx.fillStyle="rgb(240,240,240)",this.ctx.textAlign="left",this.ctx.fillText(this.center,e+2,this.cheight-2)}},{key:"drawDisabledBackground",value:function(e,t){t<0?(this.ctx.fillStyle="rgba(0,0,0,.3)",this.ctx.fillRect(0,0,this.timeToPx(e),this.cheight)):t>0&&(this.ctx.fillStyle="rgba(0,0,0,.3)",this.ctx.fillRect(this.timeToPx(e),0,this.cwidth,this.cheight))}},{key:"drawTicks",value:function(e,t){this.ctx.font="12px Arial",this.ctx.fillStyle="rgb(230, 230, 230)";for(var a=Math.floor(this.timeMin/e)*e,i=Math.ceil(this.timeMax/e)*e,n=a;n<=i;n+=e)this.drawTick(n,!1);for(var s=Math.floor(this.timeMin/t)*t,r=Math.ceil(this.timeMax/t)*t,o=s;o<=r;o+=t)this.drawTick(o,!0)}},{key:"drawTick",value:function(e,t){this.ctx.textAlign="center";var a,i,n,s=this.timeToPx(e);t?(this.ctx.fillStyle=this.MAJOR_TICK_COLOR,this.ctx.fillRect(s-this.MAJOR_TICK_WIDTH/2,0,this.MAJOR_TICK_WIDTH,this.MAJOR_TICK_HEIGHT),this.ctx.fillText(e.toFixed((a=-this.divisionPlace,n=100,a<=(i=0)?i:a>=n?n:a)),s,this.MAJOR_TICK_HEIGHT+14)):(this.ctx.fillStyle=this.MINOR_TICK_COLOR,this.ctx.fillRect(s-this.MINOR_TICK_WIDTH/2,0,this.MINOR_TICK_WIDTH,this.MINOR_TICK_HEIGHT))}},{key:"timeToPx",value:function(e){return this.map(e,this.timeMin,this.timeMax,0,this.cwidth)}},{key:"map",value:function(e,t,a,i,n){return(e-t)*(n-i)/(a-t)+i}},{key:"calcTimeBounds",value:function(){this.timeMin=this.center-this.radius,this.timeMax=this.center+this.radius}},{key:"setRad",value:function(e){this.radius=Math.abs(e),this.updateDivisions(),this.calcTimeBounds(),this.redraw()}},{key:"updateDivisions",value:function(){var e=Math.floor(Math.log10(this.radius)),t=Math.pow(10,e),a=Math.pow(10,e-1);this.divisionPlace=e,this.majorDivisions=t,this.minorDivisions=a}},{key:"touchStarted",value:function(e){var t=this;2===e.touches.length&&(this.imp.pause(),this.tmListener=function(e){return t.touchMove(e)},this.canvas.addEventListener("touchmove",this.tmListener),this.originalRad=this.radius,this.originalDs=e.touches[0].pageX-e.touches[1].pageX)}},{key:"touchEnded",value:function(e){2!==e.touches.length&&(this.imp.resume(),this.canvas.removeEventListener("touchmove",this.tmListener))}},{key:"touchMove",value:function(e){if(e.touches[0]&&e.touches[1]){var t=e.touches[0].pageX-e.touches[1].pageX,a=this.originalRad*(this.originalDs/t)*this.zoomMotionMultiplier;this.setRad(a),e.preventDefault()}else this.touchEnded(e)}},{key:"wheelScrolled",value:function(e){this.setRad(this.radius+e.deltaY*this.zoomWheelMultiplier*this.radius)}},{key:"render",value:function(){return i.createElement("canvas",{style:this.props.style})}}]),t}(i.Component);for(var O=a(297),w=a.n(O),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).updateDomain=Object(g.throttle)((function(e){a.setState({options:{xaxis:{min:e[0],max:e[1]}}})}),1/30),a.state={options:{chart:{animations:{enabled:!1,easing:"easeout"},height:"100px",zoom:{enabled:!1},title:a.props.graphTitle},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:a.props.sensorName,align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{type:"numeric",min:a.props.timeRange[0],max:a.props.timeRange[1]}},series:[{name:a.props.sensorName,data:a.props.sensorData}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){e.timeRange!==this.props.timeRange&&this.updateDomain(this.props.timeRange)}},{key:"render",value:function(){return n.a.createElement("div",{style:this.props.style},n.a.createElement(w.a,{height:"100%",options:this.state.options,series:this.state.series}))}}]),t}(n.a.Component),T=a(536),C=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(T.a,{placeholder:"Add sensor",fluid:!0,search:!0,selection:!0,options:this.props.avaliableSensors,onChange:this.props.dropdownChange,value:this.props.selectionValue})}}]),t}(n.a.Component),E=a(214),x=a.n(E),y=a(307),R=a.n(y),k=(n.a.Component,a(538)),j=a(543),I=a(539),D=[],S=0;S<1;S++)D.push({x:S/1,y:10*Math.random()});n.a.Component;for(var _=a(331),H=[],P=0;P<100;P++)H.push([P/100,10*Math.random()]);n.a.Component;for(var A={width:"100%",height:"200px",backgroundColor:"white"},K={position:"fixed",left:0,bottom:0,width:"100%",height:"100px"},L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={timeRange:[0,1]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.timeRange;for(var e=[],t=0;t<this.props.sensorData.length;t++)e.push(n.a.createElement(M,{key:t,timeRange:this.props.timeRange,style:A,graphTitle:"yeee",sensorData:this.props.sensorData[t].data,sensorName:this.props.sensorData[t].name}));return n.a.createElement("div",{class:"content"},n.a.createElement(C,{avaliableSensors:this.props.avaliableSensors,dropdownChange:this.props.dropdownChange,dropdownValue:this.props.dropdownValue}),n.a.createElement("div",{class:"charts"},e),n.a.createElement(b,{style:K,onTimeframeUpdate:this.props.onTimeframeUpdate,lastime:this.props.lastime,realtime:this.props.realtime}))}}]),t}(n.a.Component),W=a(540),N=a(223),J=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=this.props.avaliableSensors;console.log(t.length);for(var a=0;a<t.length;a++){var i;console.log("yes"),i=1==t[a].connected?n.a.createElement(W.a.Cell,null,n.a.createElement(N.a,{name:"checkmark"})):n.a.createElement(W.a.Cell,null,n.a.createElement(N.a,{name:"close"})),e.push(n.a.createElement(W.a.Row,{key:"sensorData[i].name"},n.a.createElement(W.a.Cell,null,t[a].text),n.a.createElement(W.a.Cell,null,t[a].detail),i))}return console.log(e),n.a.createElement("div",{class:"tableContent"},n.a.createElement("h1",null,"Current Sensor Statuses"),n.a.createElement(W.a,null,n.a.createElement(W.a.Header,null,n.a.createElement(W.a.Row,null,n.a.createElement(W.a.HeaderCell,null,"Sensor Name"),n.a.createElement(W.a.HeaderCell,null,"Notes"),n.a.createElement(W.a.HeaderCell,null,"Status"))),n.a.createElement(W.a.Body,null,e,n.a.createElement(W.a.Row,null))))}}]),t}(n.a.Component),V=[],U=[],B=0;B<2e3;B++)V.push([B/100,10*Math.random()]),U.push([B/100,10*Math.random()]);var G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).setPage=function(e,t){var i=t.name;a.setState({currentPage:i}),console.log(i)},a.handleHamburgerClick=function(){var e=a.state.sideMenuVisible;console.log(!e),a.setState({sideMenuVisible:!e})},a.onTimeframeUpdate=function(e){a.setState({timeRange:e})},a.dropdownChange=function(e,t){var i=t.value;a.state.currentSensors.push(i),a.setState({dropdownValue:""}),"Accelerometer"==i?a.state.sensorData.push({name:i,data:V}):a.state.sensorData.push({name:i,data:U})},a.state={currentPage:"home",sidebarEnabled:!1,sideMenuVisible:!0,currentProfile:"General",avaliableSensors:[{key:"Speed",text:"Speed",connected:!0,detail:"Measures Current Speed (GPS)"},{key:"Accelerometer",text:"Accelerometer (Y)",detail:"Acclerometer Data in Y direction",connected:!1}],timeRange:[0,1],dropdownValue:"",realtime:!1,lastime:20,density:1e3,currentSensors:[],sensorData:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(v,{setPage:this.setPage,currentPage:this.state.currentPage,handleHamburgerClick:this.handleHamburgerClick}),n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/sensors"},n.a.createElement(L,{timeRange:this.state.timeRange,onTimeframeUpdate:this.onTimeframeUpdate,realtime:this.state.realtime,lastime:this.state.lastime,avaliableSensors:this.state.avaliableSensors,dropdownChange:this.dropdownChange,dropdownValue:this.state.dropdownValue,sensorData:this.state.sensorData})),n.a.createElement(m.a,{path:"/status"},n.a.createElement(J,{avaliableSensors:this.state.avaliableSensors}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[341,1,2]]]);
//# sourceMappingURL=main.5df64377.chunk.js.map