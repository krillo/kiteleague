(this.webpackJsonpkiteleague=this.webpackJsonpkiteleague||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),i=a(7),s=a(6),c=a(0),o=a(1),l=a.n(o),d=a(32),u=a.n(d),h=(a(41),a(18)),p=a(15);a(42);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=o.createElement("path",{d:"m216.210938 0c-122.664063 0-222.460938 99.796875-222.460938 222.460938 0 154.175781 222.679688 417.539062 222.679688 417.539062s222.242187-270.945312 222.242187-417.539062c0-122.664063-99.792969-222.460938-222.460937-222.460938zm67.121093 287.597656c-18.507812 18.503906-42.8125 27.757813-67.121093 27.757813-24.304688 0-48.617188-9.253907-67.117188-27.757813-37.011719-37.007812-37.011719-97.226562 0-134.238281 17.921875-17.929687 41.761719-27.804687 67.117188-27.804687 25.355468 0 49.191406 9.878906 67.121093 27.804687 37.011719 37.011719 37.011719 97.230469 0 134.238281zm0 0"});function g(e,t){var a=e.title,n=e.titleId,r=m(e,["title","titleId"]);return o.createElement("svg",j({height:"682pt",viewBox:"-119 -21 682 682.66669",width:"682pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?o.createElement("title",{id:n},a):null,b)}var x=o.forwardRef(g),v=(a.p,[{id:"showOnlyDaylight",text:"Show only daylight hours",type:"checkbox",value:!0},{id:"showKitesurf",text:"Show kite surfing spots",type:"checkbox",value:!0},{id:"showSnowkite",text:"Show snow kite spots",type:"checkbox",value:!1},{id:"showSpecial",text:"Show only special spots",type:"checkbox",value:!1}]),f="/",O="/summary",y="/settings",w="/detail",M="/debug",k="/kiteleague/img/icon/",S="/kiteleague/img/weathericon/svg/",N=function(e,t){var a=new Date(e),n=new Date,r=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][a.getMonth()],i=a.getDate()+" "+r,s=C(a.getUTCHours()),c=s+":"+C(a.getUTCMinutes()),o=e.substring(5,10)+"-"+s,l=e.substring(0,10),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a.getDay()],h=!1;a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()&&(h=!0);var p=e.substring(0,10)+"-"+s;switch(t){case"date":return i;case"time":return c;case"hour":return s;case"key":return o;case"weekday":return d;case"weekday-short":return u;case"iso-just-date":return l;case"is-today":return h;case"iso-date-hour":return p;default:return i}};function C(e){var t=e+"";return t.length<2?"0"+t:t}var D=function(){var e=new Date,t=JSON.stringify(e);return t=t.substring(1,14)+":00:00Z"},I=function(e){var t=S+e+".svg";return Object(c.jsx)("img",{className:"icon",src:t})},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=k+e+"."+t;return Object(c.jsx)("img",{className:"icon ".concat(a),src:n})};function E(e){return"09"<=e&&e<="15"}var L=function(){var e,t=window.location.pathname.split("/");return"detail"===t[2]?(e=t[3],parseInt(e)):NaN};function _(){var e="";v.map((function(t){R(e=t.id)||T(e,t)}))}function R(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var a=JSON.parse(localStorage.getItem(e));return t?a.value:a}catch(n){return console.log("Error getting value from localStorage, key: "+e),!1}}function T(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(a){return console.log("Error setting value in localStorage, key: "+e+" value: "+t),!1}}var F=a(13),B=a.n(F),K=a(35),H=a(17),J=a(33),W=a.n(J),z=[{id:0,name:"Doggen",alias:"Dogshit bay, Halmstad sm\xe5b\xe5tshamn",lat:56.66,lon:12.847,dirMin:180,dirMax:240,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:1,name:"Laga Oset",alias:"Lagans mynning, Halland",lat:56.54,lon:12.94,dirMin:225,dirMax:315,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:2,name:"Sibirien",alias:"Sibirien stranden i \xc4ngelholm",lat:56.23,lon:12.81,dirMin:280,dirMax:330,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:3,name:"Jonstorp",alias:"Revet, Jonstorp havsbad",lat:56.23,lon:12.69,dirMin:337,dirMax:60,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:4,name:"Finjagatan 6",alias:"Hemma",lat:56.04,lon:12.73,dirMin:0,dirMax:360,supMin:225,supMax:315,type:["special"]},{id:5,name:"R\xe5\xe5",alias:"Hundbadet R\xe5\xe5 hamn",lat:56,lon:12.72,dirMin:180,dirMax:290,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:6,name:"Fortuna",alias:"Fortuna strand surfklubb",lat:55.95,lon:12.75,dirMin:190,dirMax:300,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:7,name:"LA",alias:"Lund\xe5krahamnen i Landskrona",lat:55.85,lon:12.86,dirMin:50,dirMax:225,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:8,name:"JP",alias:"JP-h\xe5la, Saxtorp",lat:55.81,lon:12.91,dirMin:180,dirMax:290,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:9,name:"BBC",alias:"Barseb\xe4ckstrand Camping och stugby",lat:55.77,lon:12.92,dirMin:260,dirMax:350,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:10,name:"Habo",alias:"Habo ljung havsbad",lat:55.69,lon:13.04,dirMin:225,dirMax:290,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:11,name:"Parkv\xe4gen",alias:"Ljunghusen havsbad",lat:55.38,lon:12.93,dirMin:110,dirMax:200,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:12,name:"Falsterbo",alias:"Falsterbo strandbad",lat:55.39,lon:12.85,dirMin:110,dirMax:230,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:13,name:"Skan\xf6r s\xf6dra",alias:"Skan\xf6rs havsbad",lat:55.41,lon:12.82,dirMin:180,dirMax:320,supMin:225,supMax:315,type:["kitesurf","sup"]},{id:14,name:"Idre",alias:"Idre fj\xe4ll",lat:61.95,lon:12.83,dirMin:0,dirMax:360,type:["snowkite"]},{id:15,name:"St\xe4djan",alias:"St\xe4djan Nipfj\xe4llets naturreservat",lat:61.89,lon:12.85,dirMin:0,dirMax:360,type:["snowkite"]},{id:16,name:"Vantal\xe4ngan",alias:"Vantal\xe4ngan Br\xf6sarp, windshelter",lat:55.72,lon:14.06,dirMin:0,dirMax:360,type:["special"]}],A=function(){var e=Object(H.a)(B.a.mark((function e(){var t,a,n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("primeWeatherData -- 1"),!X()){e.next=26;break}console.log("primeWeatherData -- Needs cache update"),Q(),t=Object(K.a)(z),e.prev=5,t.s();case 7:if((a=t.n()).done){e.next=15;break}return n=a.value,e.next=11,U(n);case 11:r=e.sent,console.log(r);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),t.e(e.t0);case 20:return e.prev=20,t.f(),e.finish(20);case 23:return e.abrupt("return",!0);case 26:return console.log("primeWeatherData -- cache is up to date"),e.abrupt("return",!0);case 28:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(H.a)(B.a.mark((function e(){var t,a,n,r=arguments;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=r.length>0&&void 0!==r[0]?r[0]:null)){e.next=6;break}if(a=$(t),!(n=Z(a))){e.next=6;break}return e.abrupt("return",n);case 6:return e.abrupt("return",U(a));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Z(e){var t=q(e),a=JSON.parse(sessionStorage.getItem(t));return a||null}var U=function(){var e=Object(H.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.met.no/weatherapi/locationforecast/2.0/complete?lat="+t.lat+"&lon="+t.lon,e.next=3,W.a.get(a).then((function(e){sessionStorage.setItem(q(t)+"-RAW",JSON.stringify(e));var a=Y(t,e);return V(e),a})).catch((function(e){return console.log(e),null}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function V(e){var t=e.data.properties.timeseries[0].time;sessionStorage.setItem("latestDataTimestamp",JSON.stringify(t))}function Y(e,t){q(e);var a=t.data.properties.timeseries,n={};return a.forEach((function(e){var t={timestamp:e.time,temp:e.data.instant.details.air_temperature.toFixed(0),dir:e.data.instant.details.wind_from_direction,hour:N(e.time,"hour"),key:N(e.time,"key"),isDaylight:E(N(e.time,"hour"))};"wind_speed_of_gust"in e.data.instant.details?(t.wind=e.data.instant.details.wind_speed,t.gust=parseInt(e.data.instant.details.wind_speed_of_gust.toFixed(0))):(t.wind=parseInt(e.data.instant.details.wind_speed.toFixed(0)),t.gust=0),"next_1_hours"in e.data?t.icon=e.data.next_1_hours.summary.symbol_code:"next_6_hours"in e.data?t.icon=e.data.next_6_hours.summary.symbol_code:t.icon=null;var a=e.time;n[a]=t})),e.hourly=n,sessionStorage.setItem(q(e),JSON.stringify(e)),e}var X=function(){var e=JSON.parse(sessionStorage.getItem("latestDataTimestamp"));return null===e||D()>e};function q(e){return"spot-"+e.id}var Q=function(){sessionStorage.clear()};function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===e)return console.log("Error: no spotId"),null;e=parseInt(e);var t=z.find((function(t){return t.id===e}));return void 0===t?(console.log("Error: no spot with id "+e),null):"id"in t&&"name"in t?t:(console.log("Error: Base data missing for spot with id "+e),null)}function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ae=o.createElement("path",{d:"m159.323524.28515625 161.090538 449.99999975-161.090538-99.755793-158.9094615 99.755793z",fillRule:"evenodd",transform:"matrix(-1 0 0 -1 320.828126 450.570312)"});function ne(e,t){var a=e.title,n=e.titleId,r=te(e,["title","titleId"]);return o.createElement("svg",ee({height:450,viewBox:"0 0 320 450",width:320,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?o.createElement("title",{id:n},a):null,ae)}var re=o.forwardRef(ne);a.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ce=o.createElement("g",{id:"Artboard",stroke:"none",strokeWidth:1,fill:"",fillRule:"evenodd"},o.createElement("path",{d:"M159.323524,0.28515625 L320.414062,450.285156 L159.323524,350.529363 L0.4140625,450.285156 L159.323524,0.28515625 Z M159.548,104.76 L66.853,367.253 L159.197309,309.28379 L253.716,367.814 L159.548,104.76 Z",id:"Polygon",fill:"",fillRule:"nonzero",transform:"translate(160.414063, 225.285156) rotate(180.000000) translate(-160.414063, -225.285156) "}));function oe(e,t){var a=e.title,n=e.titleId,r=se(e,["title","titleId"]);return o.createElement("svg",ie({width:"320px",height:"450px",viewBox:"0 0 320 450",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":n},r),void 0===a?o.createElement("title",{id:n},"Artboard"):a?o.createElement("title",{id:n},a):null,ce)}var le=o.forwardRef(oe),de=(a.p,a(61),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getGoodDirection=function(){var e=!1,t=r.props.dir,a=r.props.dirMin,n=r.props.dirMax;return a>n?(t<=n||t>=a)&&(e=!0):t>=a&&t<=n&&(e=!0),e},r}return Object(r.a)(a,[{key:"render",value:function(){var e,t={transform:"rotate("+this.props.dir+"deg)"},a=this.getGoodDirection();return Object(c.jsx)("div",{className:"direction dir".concat(this.props.dir," min").concat(this.props.dirMin," max").concat(this.props.dirMax," w").concat((e=this.props.wind,e.toFixed(0))," g").concat(this.props.gust),style:t,children:a?Object(c.jsx)(re,{}):Object(c.jsx)(le,{})})}}]),a}(l.a.Component)),ue=(a(62),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"ios-switch",children:[Object(c.jsx)("div",{className:"text",children:this.props.labelText}),Object(c.jsxs)("label",{className:"form-switch",children:[Object(c.jsx)("input",{type:"checkbox",checked:this.props.checked,name:this.props.name,onChange:this.props.onChange}),Object(c.jsx)("i",{})]})]})}}]),a}(o.Component)),he=(a(63),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getPercent=function(e,t){var a=parseInt(e),n=parseInt(t);return parseInt(((n-a)/360*100).toFixed(0))},r.getConicGradientParams=function(){var e,t,a,n,i=r.props.dirMin,s=r.props.dirMax,c=function(e){switch(e=parseInt(e)){case-1:return"#444";case 0:case 1:case 3:return"#203763";case 4:case 5:case 6:return"#1a6cb2";case 7:case 8:case 9:return"#4f9e4f";case 10:case 11:case 12:return"#f09100";case 13:case 14:case 15:return"#f84400";case 16:case 17:case 18:return"#9d013d";case 19:case 20:case 21:case 22:return"#752222";default:return"#444"}}(r.props.wind),o=r.props.badColor?r.props.badColor:"#f9f9f9";return i>s?(e=r.getPercent(i,360)+r.getPercent(0,s),i>=180&&s<=180?(console.log("*** 1 min:",i,", max: ",s),a=(t=r.getPercent(180,i))+e,n="conic-gradient(".concat(o," 0 ").concat(t,"%, ").concat(c," 0 ").concat(a,"%, ").concat(o," 0 100%)")):s>=180?(console.log("*** 2 min:",i,", max: ",s),t=(a=r.getPercent(180,s))-r.getPercent(i,s),n="conic-gradient(".concat(c," 0 ").concat(a,"%, ").concat(o," 0 ").concat(t,"%, ").concat(c," 0 100%)")):(console.log("*** 3 min:",i,", max: ",s),t=(a=50+r.getPercent(0,s))+100-e,n="conic-gradient(".concat(c," 0 ").concat(a,"%, ").concat(o," 0 ").concat(t,"%, ").concat(c," 0 100%)"))):(e=r.getPercent(i,s),i>=180?(console.log("*** 4 min:",i,", max: ",s),a=(t=0+r.getPercent(180,i))+e,n="conic-gradient(".concat(o," 0 ").concat(t,"%, ").concat(c," 0 ").concat(a,"%, ").concat(o," 0 100%)")):i>=0&&s<=180?(console.log("*** 5 min:",i,", max: ",s),a=(t=50+r.getPercent(0,i))+e,n="conic-gradient(".concat(o," 0 ").concat(t,"%, ").concat(c," 0 ").concat(a,"%, ").concat(o," 0 100%)")):i>=0&&s>=180&&(console.log("*** 6 min:",i,", max: ",s),t=100-e+(a=r.getPercent(180,s)),n="conic-gradient(".concat(c," 0 ").concat(a,"%, ").concat(o," 0 ").concat(t,"%, ").concat(c," 0 100%)"))),console.log(n),n},r}return Object(r.a)(a,[{key:"render",value:function(){var e={background:this.getConicGradientParams()};return Object(c.jsxs)("div",{className:"spot-direction",children:[Object(c.jsx)("div",{className:"conic",style:e}),Object(c.jsxs)("div",{className:"spot-direction-text",children:["dirMin:",this.props.dirMin," dirMax:",this.props.dirMax]})]})}}]),a}(l.a.Component)),pe=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).noMoreDaylightText=function(e){if(N(e,"is-today")&&!E((new Date).getHours()))return"active";return""},r.getHourly=function(e){var t,a,n,i,s={currentDate:null},o="",l=!0,d=[];return Object.keys(e.hourly).forEach((function(u){n=e.hourly[u],t=N(n.timestamp,"key")+"-"+e.id,o=!0===n.isDaylight?"daylight":"nolight",i=N(n.timestamp,"iso-just-date"),a="",(r.isNewDay(n,s)||!0===l)&&(l=!1,a=Object(c.jsxs)("div",{className:"new-day newDay-".concat(t),children:[Object(c.jsxs)("div",{className:"day",children:[Object(c.jsx)("div",{className:"weekday",children:N(n.timestamp,"weekday")}),Object(c.jsx)("div",{className:"nice-date",children:N(n.timestamp,"date")})]}),Object(c.jsx)("div",{className:"no-more-daylight ".concat(r.noMoreDaylightText(n.timestamp)),children:"No more daylight today..."})]}," newDay-".concat(t))),d.push(Object(c.jsxs)("div",{className:t,children:[a,Object(c.jsx)("div",{className:"detail-hour ".concat(i," ").concat(o),children:Object(c.jsxs)("div",{className:"hourly ".concat(i," "),children:[Object(c.jsxs)("div",{className:"part part-weather",children:[Object(c.jsx)("div",{className:"hour",children:N(n.timestamp,"hour")}),I(n.icon),Object(c.jsxs)("div",{className:"temp",children:[n.temp,"\xb0"]})]}),Object(c.jsxs)("div",{className:"part part-wind",children:[Object(c.jsx)("div",{className:"dir",children:Object(c.jsx)(de,{dir:n.dir,wind:n.wind,gust:n.gust,dirMin:r.state.current.dirMin,dirMax:r.state.current.dirMax})}),Object(c.jsxs)("div",{className:"wind",children:[n.wind," "]}),Object(c.jsxs)("div",{className:"gust g".concat(n.gust," "),children:["(",n.gust,")"]}),Object(c.jsx)("div",{className:"unit",children:"m/s"})]}),r.getWindBar(n)]})})]},t))})),d},console.log("*** constructor of Detail"),r.state={spotId:L(),current:{},iterateDate:null,showOnlyDaylight:R("showOnlyDaylight",!0)},r.handleInputChange=r.handleInputChange.bind(Object(p.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;G(this.state.spotId).then((function(t){return e.setState({current:t})}))}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;if(this.setState(Object(h.a)({},n,a)),"showOnlyDaylight"===n){var r=R("showOnlyDaylight");r.value=a,T("showOnlyDaylight",r)}}},{key:"isNewDay",value:function(e,t){var a=!1,n=N(e.timestamp,"iso-just-date");return null===t.currentDate&&(t.currentDate=n),t.currentDate<n&&(t.currentDate=n,a=!0),a}},{key:"getWindBar",value:function(e){var t=e.wind.toFixed(0),a=e.gust.toFixed(0),n=5*t,r=5*(a-t);return Object(c.jsxs)("div",{className:"wind-bar",children:[Object(c.jsx)("div",{className:"wind w".concat(t),style:{width:n}}),Object(c.jsx)("div",{className:"gust g".concat(a),style:{width:r}})]})}},{key:"render",value:function(){var e,t;return void 0!==this.state.current&&0!==Object.entries(this.state.current).length&&(e=this.state.current,t=this.getHourly(e)),Object(c.jsx)("div",{className:"detail-page ".concat(this.state.showOnlyDaylight?"showOnlyDaylight":""),children:void 0!==this.state.current&&0===Object.entries(this.state.current).length?Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:"Loading..."})}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"detail-head",children:[Object(c.jsxs)("div",{className:"detail-head-name",children:[Object(c.jsxs)("div",{className:"detail-head-left",children:[Object(c.jsx)(he,{dirMin:e.dirMin,dirMax:e.dirMax,wind:9}),Object(c.jsx)("div",{className:"name",children:e.name})]}),Object(c.jsx)("div",{className:"detail-head-right"})]}),Object(c.jsx)(ue,{labelText:"Show only daylight:",name:"showOnlyDaylight",checked:this.state.showOnlyDaylight,onChange:this.handleInputChange})]}),t]})})}}]),a}(o.Component),je=(a(64),a(12)),me=(a(65),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){var e=I(this.props.icon),t=this.props.wind.toFixed(0),a=w+"/"+this.props.id;return Object(c.jsx)(je.b,{to:{pathname:a},props:this.props,children:Object(c.jsxs)("div",{className:"spot",children:[Object(c.jsxs)("div",{className:"spot-head",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)(he,{dirMin:this.props.dirMin,dirMax:this.props.dirMax,wind:t}),Object(c.jsx)("div",{className:"name",children:this.props.name})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("div",{className:"weekday",children:N(this.props.timestamp,"weekday-short")}),Object(c.jsx)("div",{className:"nice-date",children:N(this.props.timestamp,"date")}),Object(c.jsx)("div",{className:"nice-date",children:N(this.props.timestamp,"time")})]})]}),Object(c.jsxs)("div",{className:"spot-data",children:[Object(c.jsxs)("div",{className:"dir",children:[" ",Object(c.jsx)(de,{dir:this.props.dir,wind:this.props.wind,gust:this.props.gust,dirMin:this.props.dirMin,dirMax:this.props.dirMax})]}),Object(c.jsxs)("div",{className:"wind-area",children:[Object(c.jsx)("div",{className:"wind",children:this.props.wind}),Object(c.jsxs)("div",{className:"gust",children:["(",this.props.gust,")"]})]}),e,Object(c.jsxs)("div",{className:"temp",children:[this.props.temp,"\xb0"]})]})]})})}}]),a}(l.a.Component)),be=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;Object(n.a)(this,a),(r=t.call(this,e)).getSpotHead=function(e){var t=D(),a=e.hourly[t].wind,n=e.hourly[t].gust,i=e.hourly[t].dir,s=e.hourly[t].icon,o=e.hourly[t].temp,l=e.dirMin,d=e.dirMax;return Object(c.jsx)(me,{id:e.id,name:e.name,wind:a,gust:n,dir:i,temp:o,icon:s,timestamp:t,dirMin:l,dirMax:d},"summary-head-".concat(r.state.spotId))},r.spotsSummary=function(){var e,t;if(r.state.dataReady)return z.map((function(a){return e=Z(a),t=e.type.join(" "),Object(c.jsx)("div",{className:"summary-spot spot-".concat(e.id," ").concat(t),children:r.getSpotHead(e)},"spot-".concat(e.id))}))},console.log("*** constructor of Summary");var i=!X();return r.state={spotData:null,dataReady:i,spotsSummary:Object(c.jsx)("div",{children:"Loading.."}),showKitesurf:R("showKitesurf",!0),showSnowkite:R("showSnowkite",!0),showSpecial:R("showSpecial",!0)},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.dataReady?this.setState({spotsSummary:this.spotsSummary()}):A().then((function(t){e.spotsSummary();e.state.dataReady=t,e.setState({spotsSummary:e.spotsSummary()})}))}},{key:"showTypes",value:function(){var e=this.state.showKitesurf?" kitesurf ":"";return e+=this.state.showSnowkite?" snowkite ":"",e+=this.state.showSpecial?" special ":""}},{key:"render",value:function(){var e=this.showTypes();return Object(c.jsx)("div",{className:"summary-page ".concat(e),children:!1===this.state.dataReady?Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:"Loading..."})}):Object(c.jsx)("div",{children:this.state.spotsSummary})})}}]),a}(o.Component),ge=(a(71),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).clearAndPrimeCaches=function(){Q(),function(){Q();var e=[];z.forEach((function(t){e.push(t.id),G(t.id)}))}()},r.resetSettings=function(){localStorage.clear(),_(),r.setState({showKitesurf:R("showKitesurf",!0)}),r.setState({showSnowkite:R("showSnowkite",!0)}),r.setState({showSpecial:R("showSpecial",!0)}),r.setState({showOnlyDaylight:R("showOnlyDaylight",!0)})},r.state={showKitesurf:R("showKitesurf",!0),showSnowkite:R("showSnowkite",!0),showSpecial:R("showSpecial",!0),showOnlyDaylight:R("showOnlyDaylight",!0)},r.handleInputChange=r.handleInputChange.bind(Object(p.a)(r)),r}return Object(r.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;if(this.setState(Object(h.a)({},n,a)),["showSpecial","showKitesurf","showSnowkite","showSpecial","showOnlyDaylight"].includes(n)){var r=R(n);r.value=a,T(n,r)}}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"settings",children:[Object(c.jsx)("h1",{children:"Settings"}),Object(c.jsx)(ue,{labelText:"Show only daylight:",name:"showOnlyDaylight",checked:this.state.showOnlyDaylight,onChange:this.handleInputChange}),Object(c.jsx)(ue,{labelText:"Show kite surfing spots:",name:"showKitesurf",checked:this.state.showKitesurf,onChange:this.handleInputChange}),Object(c.jsx)(ue,{labelText:"Show snow-kite spots:",name:"showSnowkite",checked:this.state.showSnowkite,onChange:this.handleInputChange}),Object(c.jsx)(ue,{labelText:"Show special spots:",name:"showSpecial",checked:this.state.showSpecial,onChange:this.handleInputChange}),Object(c.jsx)("button",{className:"clear-cache",onClick:function(){return e.clearAndPrimeCaches()},children:"Clear cache"}),Object(c.jsx)("button",{className:"reset-settings",onClick:function(){return e.resetSettings()},children:"Reset settings"})]})}}]),a}(o.Component));a(72);function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var fe=o.createElement("path",{d:"m230.149 120.939-164.163 135.335c0 .191-.048.472-.144.855-.094.38-.144.656-.144.852v137.041c0 4.948 1.809 9.236 5.426 12.847 3.616 3.613 7.898 5.431 12.847 5.431h109.63v-109.636h73.097v109.64h109.629c4.948 0 9.236-1.814 12.847-5.435 3.617-3.607 5.432-7.898 5.432-12.847v-137.041c0-.76-.104-1.334-.288-1.707z"}),Oe=o.createElement("path",{d:"m457.122 225.438-62.522-51.962v-116.487c0-2.663-.856-4.853-2.574-6.567-1.704-1.712-3.894-2.568-6.563-2.568h-54.816c-2.666 0-4.855.856-6.57 2.568-1.711 1.714-2.566 3.905-2.566 6.567v55.673l-69.662-58.245c-6.084-4.949-13.318-7.423-21.694-7.423-8.375 0-15.608 2.474-21.698 7.423l-205.285 171.021c-1.903 1.52-2.946 3.566-3.14 6.136-.193 2.568.472 4.811 1.997 6.713l17.701 21.128c1.525 1.712 3.521 2.759 5.996 3.142 2.285.192 4.57-.476 6.855-1.998l197.568-164.742 197.57 164.741c1.526 1.328 3.521 1.991 5.996 1.991h.858c2.471-.376 4.463-1.43 5.996-3.138l17.703-21.125c1.522-1.906 2.189-4.145 1.991-6.716-.195-2.563-1.242-4.609-3.141-6.132z"});function ye(e,t){var a=e.title,n=e.titleId,r=ve(e,["title","titleId"]);return o.createElement("svg",xe({enableBackground:"new 0 0 460.298 460.297",height:460.297,viewBox:"0 0 460.298 460.297",width:460.298,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?o.createElement("title",{id:n},a):null,fe,Oe)}var we=o.forwardRef(ye);a.p;function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Se=o.createElement("path",{d:"m22.683 9.394-1.88-.239c-.155-.477-.346-.937-.569-1.374l1.161-1.495c.47-.605.415-1.459-.122-1.979l-1.575-1.575c-.525-.542-1.379-.596-1.985-.127l-1.493 1.161c-.437-.223-.897-.414-1.375-.569l-.239-1.877c-.09-.753-.729-1.32-1.486-1.32h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88c-.478.155-.938.345-1.375.569l-1.494-1.161c-.604-.469-1.458-.415-1.979.122l-1.575 1.574c-.542.526-.597 1.38-.127 1.986l1.161 1.494c-.224.437-.414.897-.569 1.374l-1.877.239c-.753.09-1.32.729-1.32 1.486v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495c-.47.605-.415 1.459.122 1.979l1.575 1.575c.526.541 1.379.595 1.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88c.477-.155.937-.346 1.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575c.542-.526.597-1.379.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239c.753-.09 1.32-.729 1.32-1.486v-2.24c.001-.757-.566-1.396-1.316-1.486zm-10.683 7.606c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"});function Ne(e,t){var a=e.title,n=e.titleId,r=ke(e,["title","titleId"]);return o.createElement("svg",Me({enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?o.createElement("title",{id:n},a):null,Se)}var Ce=o.forwardRef(Ne),De=(a.p,function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"nav-footer",children:[Object(c.jsx)(je.b,{to:f,className:"home",children:Object(c.jsx)(we,{})}),Object(c.jsx)(je.b,{to:O,className:"sites",children:Object(c.jsx)(x,{})}),Object(c.jsx)(je.b,{to:y,className:"settings",children:Object(c.jsx)(Ce,{})})]})}}]),a}(o.Component)),Ie=a(2),Pe=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getSiteHeading=function(){return Object(c.jsx)(je.b,{to:"/",className:"home",children:Object(c.jsxs)("h1",{className:"site-heading",children:["Kite league ",P("kitesurfing","png","kitesurfing")]})})},r.getTagLine=function(){return Object(c.jsx)("div",{className:"tagline",children:" Find the best wind of your favorite kite spots "})},r.getSignature=function(){return Object(c.jsx)("div",{className:"signature",children:"Kite league is a home grown website from the west coast of Sk\xe5ne by KaptenKrillo"})},r.getLedger=function(){var e=[{text:"0-3",value:1},{text:"4-6",value:4},{text:"7-9",value:7},{text:"10-12",value:10},{text:"13-15",value:13},{text:"16-18",value:16},{text:"19-",value:19}],t=e.map((function(e){return Object(c.jsxs)("div",{className:"wind-span",children:[Object(c.jsx)("div",{className:"dir",children:Object(c.jsx)(de,{dir:"220",wind:e.value,gust:e.value,dirMin:0,dirMax:360})}),Object(c.jsxs)("div",{className:"text",children:[e.text," m/s"]})]},"wind-span + ".concat(e.value))})),a=e.map((function(e){return Object(c.jsx)("div",{className:"wind-span",children:Object(c.jsx)("div",{className:"dir",children:Object(c.jsx)(de,{dir:"220",wind:e.value,gust:e.value,dirMin:0,dirMax:90})})},"wind-span + ".concat(e.value))}));return Object(c.jsxs)("div",{className:"ledger-container",children:[Object(c.jsx)("h2",{children:"Ledger"}),Object(c.jsx)("h3",{className:"good-text",children:"Arrows show wind direction and speed"}),Object(c.jsxs)("div",{className:"ledger",children:[" ",t," "]}),Object(c.jsx)("h3",{className:"wrong-text",children:"Empty arrows means wrong wind direction"}),Object(c.jsx)("div",{className:"wrong-direction",children:a}),Object(c.jsx)("h3",{className:"align-left",children:"Show what wind directions are good for that spot"}),Object(c.jsx)("div",{className:"align-left spot-direction-ledger",children:Object(c.jsx)(he,{dirMin:180,dirMax:290,wind:10,badColor:"#eee"})}),Object(c.jsx)("h3",{className:"align-left",children:"Wind gust speed are gray and shown in parenthesis"}),Object(c.jsx)("div",{className:"align-left text gust-text",children:"(14)"})]})},r.state={dataReady:!1},console.log("*** constructor of App"),_(),A().then((function(e){r.state.dataReady=e})),r}return Object(r.a)(a,[{key:"render",value:function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsxs)(je.a,{basename:"/kiteleague",children:[Object(c.jsxs)("div",{className:"container",children:[this.getSiteHeading(),Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)(Ie.c,{children:[Object(c.jsx)(Ie.a,{exact:!0,path:f,children:Object(c.jsxs)("div",{className:"main-index",children:[this.getTagLine(),this.getLedger(),Object(c.jsx)("div",{className:"bottom-margin"})]})}),Object(c.jsxs)(Ie.a,{path:w,children:[Object(c.jsx)(pe,{spotId:"1"}),Object(c.jsx)("div",{className:"bottom-margin"})]}),Object(c.jsxs)(Ie.a,{exact:!0,path:O,children:[Object(c.jsx)(be,{}),Object(c.jsx)("div",{className:"bottom-margin"})]}),Object(c.jsxs)(Ie.a,{exact:!0,path:y,children:[Object(c.jsx)(ge,{}),Object(c.jsx)("div",{className:"bottom-margin"})]}),Object(c.jsxs)(Ie.a,{exact:!0,path:M,children:[Object(c.jsxs)("div",{className:"debug-spot-direction",children:[Object(c.jsx)(he,{dirMin:270,dirMax:20,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:90,dirMax:45,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:200,dirMax:300,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:0,dirMax:90,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:90,dirMax:270,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:90,dirMax:300,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:0,dirMax:360,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:0,dirMax:0,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:300,dirMax:360,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:10,dirMax:45,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:300,dirMax:200,wind:10,badColor:"#e5e5e5"}),Object(c.jsx)(he,{dirMin:180,dirMax:290,wind:10,badColor:"#e5e5e5"})]}),Object(c.jsx)("div",{className:"bottom-margin"})]})]})})]}),Object(c.jsx)(De,{})]})})}}]),a}(o.Component);t.default=Pe;u.a.render(Object(c.jsx)(Pe,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.d4042608.chunk.js.map