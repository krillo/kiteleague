(this.webpackJsonpkiteleague=this.webpackJsonpkiteleague||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(4),i=n(5),a=n(7),c=n(6),s=n(0),l=n(1),o=n.n(l),d=n(30),u=n.n(d);n(39),n(40);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createElement("path",{d:"m216.210938 0c-122.664063 0-222.460938 99.796875-222.460938 222.460938 0 154.175781 222.679688 417.539062 222.679688 417.539062s222.242187-270.945312 222.242187-417.539062c0-122.664063-99.792969-222.460938-222.460937-222.460938zm67.121093 287.597656c-18.507812 18.503906-42.8125 27.757813-67.121093 27.757813-24.304688 0-48.617188-9.253907-67.117188-27.757813-37.011719-37.007812-37.011719-97.226562 0-134.238281 17.921875-17.929687 41.761719-27.804687 67.117188-27.804687 25.355468 0 49.191406 9.878906 67.121093 27.804687 37.011719 37.011719 37.011719 97.230469 0 134.238281zm0 0"});function m(e,t){var n=e.title,r=e.titleId,i=j(e,["title","titleId"]);return l.createElement("svg",h({height:"682pt",viewBox:"-119 -21 682 682.66669",width:"682pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,p)}var v=l.forwardRef(m),b=(n.p,[{id:"isDaylight",text:"Show only daylight hours",type:"checkbox",value:"checked"},{id:"clearCache",text:"Clear cache",type:"button",value:"not cleared"}]),f="/kiteleague",g="/kiteleague/summary",O="/kiteleague/settings",x="/kiteleague/detail",y="/kiteleague/img/icon/",w="/kiteleague/img/weathericon/svg/",N=function(e,t){var n=new Date(e),r=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][n.getMonth()],i=n.getDate()+" "+r,a=k(n.getHours()),c=a+":"+k(n.getMinutes()),s=e.substring(5,10)+"-"+a,l=e.substring(0,10),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],d=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][n.getDay()];switch(t){case"date":return i;case"time":return c;case"hour":return a;case"key":return s;case"weekday":return o;case"weekday-short":return d;case"iso-just-date":return l;default:return i}};function k(e){var t=e+"";return t.length<2?"0"+t:t}var M=function(){var e=new Date,t=JSON.stringify(e);return t=t.substring(1,14)+":00:00Z"},S=function(e){var t=w+e+".svg";return Object(s.jsx)("img",{className:"icon",src:t})},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=y+e+"."+t;return Object(s.jsx)("img",{className:"icon ".concat(n),src:r})};var E=n(15),P=n.n(E),_=n(18),D=n(31),C=n.n(D),L=[{id:1,name:"Laga Oset",lat:56.54,lon:12.94,dirMin:225,dirMax:315},{id:2,name:"Sibirien",lat:56.23,lon:12.81,dirMin:280,dirMax:330},{id:3,name:"Jonstorp",lat:56.23,lon:12.69,dirMin:337,dirMax:60},{id:4,name:"R\xe5\xe5",lat:56,lon:12.72,dirMin:180,dirMax:290},{id:5,name:"Fortuna",lat:55.95,lon:12.75,dirMin:190,dirMax:300},{id:6,name:"LA",lat:55.85,lon:12.86,dirMin:50,dirMax:225},{id:7,name:"JP",lat:55.81,lon:12.91,dirMin:180,dirMax:290},{id:8,name:"BBC",lat:55.77,lon:12.92,dirMin:260,dirMax:350},{id:9,name:"Habo",lat:55.69,lon:13.04,dirMin:225,dirMax:290},{id:10,name:"Parkv\xe4gen",lat:55.38,lon:12.93,dirMin:110,dirMax:200},{id:11,name:"Falsterbo",lat:55.39,lon:12.85,dirMin:110,dirMax:230},{id:12,name:"Skan\xf6r s\xf6dra",lat:55.41,lon:12.82,dirMin:180,dirMax:320}],B=function(){var e=Object(_.a)(P.a.mark((function e(){var t,n,r,i=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:null,n=A(t),!(r=F(n))){e.next=5;break}return e.abrupt("return",r);case 5:return e.abrupt("return",R(n));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function F(e){var t=z(e),n=JSON.parse(localStorage.getItem(t));return n||null}var R=function(){var e=Object(_.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(t),n="https://api.met.no/weatherapi/locationforecast/2.0/complete?lat="+t.lat+"&lon="+t.lon,e.next=4,C.a.get(n).then((function(e){return localStorage.setItem(z(t)+"-RAW",JSON.stringify(e)),H(t,e)})).catch((function(e){return console.log(e),null}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function H(e,t){z(e);var n=t.data.properties.timeseries,r={};return n.forEach((function(e){var t,n={timestamp:e.time,temp:e.data.instant.details.air_temperature.toFixed(0),dir:e.data.instant.details.wind_from_direction,hour:N(e.time,"hour"),key:N(e.time,"key"),isDaylight:(t=N(e.time,"hour"),"09"<=t&&t<="15")};"wind_speed_of_gust"in e.data.instant.details?(n.wind=e.data.instant.details.wind_speed,n.gust=parseInt(e.data.instant.details.wind_speed_of_gust.toFixed(0))):(n.wind=parseInt(e.data.instant.details.wind_speed.toFixed(0)),n.gust=0),"next_1_hours"in e.data?n.icon=e.data.next_1_hours.summary.symbol_code:"next_6_hours"in e.data?n.icon=e.data.next_6_hours.summary.symbol_code:n.icon=null;var i=e.time;r[i]=n})),e.hourly=r,localStorage.setItem(z(e),JSON.stringify(e)),e}function z(e){return"spot-"+e.id}var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?localStorage.removeItem(e):localStorage.clear(),!0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&J();var t=[];return L.forEach((function(e){t.push(e.id),B(e.id)})),t};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===e)return console.log("Error: no spotId"),null;e=parseInt(e);var t=L.find((function(t){return t.id===e}));return void 0===t?(console.log("Error: no spot with id "+e),null):"id"in t&&"name"in t?t:(console.log("Error: Base data missing for spot with id "+e),null)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Z=l.createElement("path",{d:"m159.323524.28515625 161.090538 449.99999975-161.090538-99.755793-158.9094615 99.755793z",fillRule:"evenodd",transform:"matrix(-1 0 0 -1 320.828126 450.570312)"});function G(e,t){var n=e.title,r=e.titleId,i=K(e,["title","titleId"]);return l.createElement("svg",T({height:450,viewBox:"0 0 320 450",width:320,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,Z)}var U=l.forwardRef(G);n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Q=l.createElement("g",{id:"Artboard",stroke:"none",strokeWidth:1,fill:"",fillRule:"evenodd"},l.createElement("path",{d:"M159.323524,0.28515625 L320.414062,450.285156 L159.323524,350.529363 L0.4140625,450.285156 L159.323524,0.28515625 Z M159.548,104.76 L66.853,367.253 L159.197309,309.28379 L253.716,367.814 L159.548,104.76 Z",id:"Polygon",fill:"",fillRule:"nonzero",transform:"translate(160.414063, 225.285156) rotate(180.000000) translate(-160.414063, -225.285156) "}));function V(e,t){var n=e.title,r=e.titleId,i=q(e,["title","titleId"]);return l.createElement("svg",X({width:"320px",height:"450px",viewBox:"0 0 320 450",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},i),void 0===n?l.createElement("title",{id:r},"Artboard"):n?l.createElement("title",{id:r},n):null,Q)}var Y=l.forwardRef(V),$=(n.p,n(59),function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).getGoodDirection=function(){var e=!1,t=i.props.dir,n=i.props.dirMin,r=i.props.dirMax;return n>r?(t<=r||t>=n)&&(e=!0):t>=n&&t<=r&&(e=!0),e},i}return Object(i.a)(n,[{key:"render",value:function(){var e,t={transform:"rotate("+this.props.dir+"deg)"},n=this.getGoodDirection();return Object(s.jsx)("div",{className:"direction dir".concat(this.props.dir," min").concat(this.props.dirMin," max").concat(this.props.dirMax," w").concat((e=this.props.wind,e.toFixed(0))," g").concat(this.props.gust),style:t,children:n?Object(s.jsx)(U,{}):Object(s.jsx)(Y,{})})}}]),n}(o.a.Component)),ee=n(12),te=(n(60),function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),i=t.call(this,e),console.log("Spot1"),console.log(e),i}return Object(i.a)(n,[{key:"render",value:function(){var e=S(this.props.icon),t="?spotid="+this.props.id,n=this.props.wind.toFixed(0);return Object(s.jsx)(ee.b,{to:{pathname:x,search:t},props:this.props,children:Object(s.jsxs)("div",{className:"spot",children:[Object(s.jsxs)("div",{className:"spot-head",children:[Object(s.jsxs)("div",{className:"left",children:[Object(s.jsx)("div",{className:"symbol w".concat(n),children:n}),Object(s.jsx)("div",{className:"name",children:this.props.name})]}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)("div",{className:"weekday",children:N(this.props.timestamp,"weekday-short")}),Object(s.jsx)("div",{className:"nice-date",children:N(this.props.timestamp,"date")}),Object(s.jsx)("div",{className:"nice-date",children:N(this.props.timestamp,"time")})]})]}),Object(s.jsxs)("div",{className:"spot-data",children:[Object(s.jsxs)("div",{className:"dir",children:[" ",Object(s.jsx)($,{dir:this.props.dir,wind:this.props.wind,gust:this.props.gust,dirMin:this.props.dirMin,dirMax:this.props.dirMax})]}),Object(s.jsxs)("div",{className:"wind-area",children:[Object(s.jsx)("div",{className:"wind",children:this.props.wind}),Object(s.jsxs)("div",{className:"gust",children:["(",this.props.gust,")"]})]}),e,Object(s.jsxs)("div",{className:"temp",children:[this.props.temp,"\xb0"]})]})]})})}}]),n}(o.a.Component)),ne=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).getSpotHead=function(e){var t=M(),n=e.hourly[t].wind,r=e.hourly[t].gust,a=e.hourly[t].dir,c=e.hourly[t].icon,l=e.hourly[t].temp,o=e.dirMin,d=e.dirMax;return Object(s.jsx)(te,{id:e.id,name:e.name,wind:n,gust:r,dir:a,temp:l,icon:c,timestamp:t,dirMin:o,dirMax:d},"detail-head-".concat(i.state.spotId))},i.getHourly=function(e){var t,n,r,a,c={currentDate:null},l="",o=[];return Object.keys(e.hourly).forEach((function(d){r=e.hourly[d],t=N(r.timestamp,"key")+"-"+e.id,l=!0===r.isDaylight?"daylight":"",a=N(r.timestamp,"iso-just-date"),n="",i.isNewDay(r,c)&&(n=Object(s.jsxs)("div",{className:"day",children:[Object(s.jsx)("div",{className:"weekday",children:N(r.timestamp,"weekday")}),Object(s.jsx)("div",{className:"nice-date",children:N(r.timestamp,"date")})]})),o.push(Object(s.jsxs)("div",{className:"".concat(a," detail-hour"),children:[n,Object(s.jsxs)("div",{className:"hourly ".concat(t," ").concat(l),children:[Object(s.jsx)("div",{className:"hour",children:N(r.timestamp,"hour")}),S(r.icon),Object(s.jsxs)("div",{className:"temp",children:[r.temp,"\xb0"]}),Object(s.jsxs)("div",{className:"dir",children:[" ",Object(s.jsx)($,{dir:r.dir,wind:r.wind,gust:r.gust,dirMin:i.state.current.dirMin,dirMax:i.state.current.dirMax})]}),Object(s.jsxs)("div",{className:"wind-area",children:[Object(s.jsxs)("div",{className:"wind",children:[r.wind," ",Object(s.jsx)("span",{children:"m/s"})]}),Object(s.jsxs)("div",{className:"gust",children:["(",r.gust,")"]})]}),i.getWindBar(r)]})]},t))})),o};var a=function(){var e=window.location.search,t=new URLSearchParams(e).get("spotid");return void 0===t&&(t=1),parseInt(t)}();return console.log("spotId"),console.log(a),i.state={spotId:a,current:{},iterateDate:null},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;B(this.state.spotId).then((function(t){return e.setState({current:t})}))}},{key:"isNewDay",value:function(e,t){var n=!1,r=N(e.timestamp,"iso-just-date");return null===t.currentDate&&(t.currentDate=r),t.currentDate<r&&(t.currentDate=r,n=!0),n}},{key:"getWindBar",value:function(e){var t=e.wind.toFixed(0),n=e.gust.toFixed(0),r=5*t,i=5*(n-t);return Object(s.jsxs)("div",{className:"wind-bar",children:[Object(s.jsx)("div",{className:"wind w".concat(t),style:{width:r}}),Object(s.jsx)("div",{className:"gust g".concat(n),style:{width:i}})]})}},{key:"render",value:function(){var e,t,n;return console.log("render"),console.log(this.state.current),console.log("render2"),void 0!==this.state.current&&0!==Object.entries(this.state.current).length&&(e=this.state.current,t=this.getSpotHead(e),n=this.getHourly(e)),Object(s.jsx)("div",{className:"detail-page",children:void 0!==this.state.current&&0===Object.entries(this.state.current).length?Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:"Loading..."})}):Object(s.jsxs)("div",{children:[t,n]})})}}]),n}(l.Component),re=(n(66),function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).getSpotHead=function(e){var t=M(),n=e.hourly[t].wind,r=e.hourly[t].gust,a=e.hourly[t].dir,c=e.hourly[t].icon,l=e.hourly[t].temp,o=e.dirMin,d=e.dirMax;return Object(s.jsx)(te,{id:e.id,name:e.name,wind:n,gust:r,dir:a,temp:l,icon:c,timestamp:t,dirMin:o,dirMax:d},"summary-head-".concat(i.state.spotId))},i.spotsSummary=function(){var e;return console.log(M()),i.state.spotIds.map((function(t){return e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){var t=F(A(e));if(t)return t}return null}(t),Object(s.jsx)("div",{className:"summary-".concat(e.id),children:i.getSpotHead(e)},"summary-".concat(e.id))}))};var a=W(!1);return i.state={spotIds:a},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"summary-page",children:this.spotsSummary()})}}]),n}(l.Component)),ie=n(33),ae=(n(67),n(68),function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={},i}return Object(i.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"ios-switch",children:[Object(s.jsx)("div",{className:"text",children:this.props.text}),Object(s.jsxs)("label",{className:"form-switch",children:[Object(s.jsx)("input",{type:"checkbox",checked:this.props.checked,name:this.props.name}),Object(s.jsx)("i",{})]})]})}}]),n}(l.Component)),ce=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).getSettings=function(){return b.map((function(e){switch(console.log(e.type),"setting-"+e.id,e.type){case"button":return Object(s.jsx)("div",{className:e.id},e.id);case"checkbox":return Object(s.jsx)("div",{className:e.id,children:Object(s.jsx)(ae,{text:e.text,checked:i.state[e.id],name:e.id,onChange:i.handleInputChange})},e.id);default:return Object(s.jsx)("div",{children:"Error"})}}))},i.apa=function(){alert("button click")},i.clearAndPrimeCaches=function(){J(),W()},i.state={},b.map((function(e){switch(e.type){case"button":i.state[e.id]=e.value;case"checkbox":i.state[e.id]=e.value}}));return i}return Object(i.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;this.setState(Object(ie.a)({},r,n))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"settings",children:[Object(s.jsx)("h1",{children:"Settings"}),Object(s.jsx)("ul",{children:Object(s.jsx)("li",{className:"setting",children:this.getSettings()})}),Object(s.jsx)("button",{className:"clear-cache",onClick:function(){return e.clearAndPrimeCaches()},children:"Clear cache"})]})}}]),n}(l.Component);n(69);function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var oe=l.createElement("path",{d:"m230.149 120.939-164.163 135.335c0 .191-.048.472-.144.855-.094.38-.144.656-.144.852v137.041c0 4.948 1.809 9.236 5.426 12.847 3.616 3.613 7.898 5.431 12.847 5.431h109.63v-109.636h73.097v109.64h109.629c4.948 0 9.236-1.814 12.847-5.435 3.617-3.607 5.432-7.898 5.432-12.847v-137.041c0-.76-.104-1.334-.288-1.707z"}),de=l.createElement("path",{d:"m457.122 225.438-62.522-51.962v-116.487c0-2.663-.856-4.853-2.574-6.567-1.704-1.712-3.894-2.568-6.563-2.568h-54.816c-2.666 0-4.855.856-6.57 2.568-1.711 1.714-2.566 3.905-2.566 6.567v55.673l-69.662-58.245c-6.084-4.949-13.318-7.423-21.694-7.423-8.375 0-15.608 2.474-21.698 7.423l-205.285 171.021c-1.903 1.52-2.946 3.566-3.14 6.136-.193 2.568.472 4.811 1.997 6.713l17.701 21.128c1.525 1.712 3.521 2.759 5.996 3.142 2.285.192 4.57-.476 6.855-1.998l197.568-164.742 197.57 164.741c1.526 1.328 3.521 1.991 5.996 1.991h.858c2.471-.376 4.463-1.43 5.996-3.138l17.703-21.125c1.522-1.906 2.189-4.145 1.991-6.716-.195-2.563-1.242-4.609-3.141-6.132z"});function ue(e,t){var n=e.title,r=e.titleId,i=le(e,["title","titleId"]);return l.createElement("svg",se({enableBackground:"new 0 0 460.298 460.297",height:460.297,viewBox:"0 0 460.298 460.297",width:460.298,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,oe,de)}var he=l.forwardRef(ue);n.p;function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var me=l.createElement("path",{d:"m22.683 9.394-1.88-.239c-.155-.477-.346-.937-.569-1.374l1.161-1.495c.47-.605.415-1.459-.122-1.979l-1.575-1.575c-.525-.542-1.379-.596-1.985-.127l-1.493 1.161c-.437-.223-.897-.414-1.375-.569l-.239-1.877c-.09-.753-.729-1.32-1.486-1.32h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88c-.478.155-.938.345-1.375.569l-1.494-1.161c-.604-.469-1.458-.415-1.979.122l-1.575 1.574c-.542.526-.597 1.38-.127 1.986l1.161 1.494c-.224.437-.414.897-.569 1.374l-1.877.239c-.753.09-1.32.729-1.32 1.486v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495c-.47.605-.415 1.459.122 1.979l1.575 1.575c.526.541 1.379.595 1.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88c.477-.155.937-.346 1.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575c.542-.526.597-1.379.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239c.753-.09 1.32-.729 1.32-1.486v-2.24c.001-.757-.566-1.396-1.316-1.486zm-10.683 7.606c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"});function ve(e,t){var n=e.title,r=e.titleId,i=pe(e,["title","titleId"]);return l.createElement("svg",je({enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,me)}var be=l.forwardRef(ve),fe=(n.p,function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).openNav=function(){document.getElementById("mySidenav").style.width="100%"},i.closeNav=function(){document.getElementById("mySidenav").style.width="0"},i.state={},i}return Object(i.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"nav-footer",children:[Object(s.jsx)(ee.b,{to:f,className:"home",children:Object(s.jsx)(he,{})}),Object(s.jsx)(ee.b,{to:g,className:"sites",children:Object(s.jsx)(v,{})}),Object(s.jsx)(ee.b,{to:O,className:"settings",children:Object(s.jsx)(be,{})})]})}}]),n}(l.Component)),ge=n(2),Oe=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).getSiteHeading=function(){return Object(s.jsx)(ee.b,{to:"/",className:"home",children:Object(s.jsxs)("h1",{className:"site-heading",children:["Kite league ",I("kitesurfing","png","kitesurfing")]})})},i.getTagLine=function(){return Object(s.jsx)("div",{className:"tagline",children:" Find the best wind of your favorite kite spots "})},i.getSignature=function(){return Object(s.jsx)("div",{className:"signature",children:"Kite league is a home grown website from the west coast of Sk\xe5ne by KaptenKrillo"})},i.getLedger=function(){var e=[{text:"0-3",value:1},{text:"4-6",value:4},{text:"7-9",value:7},{text:"10-12",value:10},{text:"13-15",value:13},{text:"16-18",value:16},{text:"19-",value:19}],t=e.map((function(e){return Object(s.jsxs)("div",{className:"wind-span",children:[Object(s.jsx)("div",{className:"dir",children:Object(s.jsx)($,{dir:"220",wind:e.value,gust:e.value,dirMin:0,dirMax:360})}),Object(s.jsxs)("div",{className:"text",children:[e.text," m/s"]})]},"wind-span + ".concat(e.value))})),n=e.map((function(e){return Object(s.jsx)("div",{className:"wind-span",children:Object(s.jsx)("div",{className:"dir",children:Object(s.jsx)($,{dir:"220",wind:e.value,gust:e.value,dirMin:0,dirMax:90})})},"wind-span + ".concat(e.value))}));return Object(s.jsxs)("div",{className:"ledger-container",children:[Object(s.jsx)("h2",{children:"Ledger"}),Object(s.jsxs)("div",{className:"ledger",children:[" ",t," "]}),Object(s.jsx)("div",{className:"wrong-direction",children:n}),Object(s.jsx)("div",{className:"text wrong-text",children:"Wrong wind direction"})]})},i}return Object(i.a)(n,[{key:"render",value:function(){return Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsxs)(ee.a,{children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"main",children:[this.getSiteHeading(),Object(s.jsxs)(ge.c,{children:[Object(s.jsx)(ge.a,{exact:!0,path:f,children:Object(s.jsxs)("div",{className:"main-index",children:[this.getTagLine(),this.getLedger()]})}),Object(s.jsx)(ge.a,{path:x,children:Object(s.jsx)(ne,{spotId:"1"})}),Object(s.jsx)(ge.a,{path:g,children:Object(s.jsx)(re,{})}),Object(s.jsx)(ge.a,{path:O,children:Object(s.jsx)(ce,{})})]})]})}),Object(s.jsx)(fe,{})]})})}}]),n}(l.Component);t.default=Oe;u.a.render(Object(s.jsx)(Oe,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.d7b7dd0b.chunk.js.map