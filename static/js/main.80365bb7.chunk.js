(this.webpackJsonpprophet=this.webpackJsonpprophet||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=(n(12),n(1)),s=(n(13),n(2)),l=n.n(s),u=n(5),d="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key",m="rjE0qi1GODyIrC67hXzanAHJ0zQ8KJqO",f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"=").concat(m));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"=").concat(m,"&q=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=(n(15),function(){var e=Object(a.useState)(new Date),t=Object(i.a)(e,2),n=t[0];t[1];return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"DAILY PROPHET"),r.a.createElement("div",{className:"timeDet"},r.a.createElement("div",{className:"currentDate"},"".concat(n.getDate(),"/").concat(n.getMonth(),"/").concat(n.getFullYear())),r.a.createElement("div",{className:"fetchTime"},"Fetched At:",localStorage.getItem("date"))))}),v=(n(16),n(17),n(6)),g=n.n(v),E=function(e){return e.substring(e.indexOf("-")+1).trim()},w=function(e){var t=e.topnews,n=e.classType,a=e.featured;return r.a.createElement("div",{className:n},a&&r.a.createElement(g.a,{minFontSize:38},r.a.createElement("div",{className:"featuredTitle"},t.headline.main.split(" ")[0])),r.a.createElement("div",{className:"title"},a?function(e){return e.substring(e.indexOf(" "))}(t.headline.main):t.headline.main),0!==t.multimedia.length&&r.a.createElement("div",{className:"imgCon"},"                        ",r.a.createElement("div",{className:"publisher"},"- "+t.source),"                                                       ",r.a.createElement("img",{alt:t.headline.main,src:"http://www.nytimes.com/"+t.multimedia[0].url})),r.a.createElement("p",null,r.a.createElement("span",null,t.lead_paragraph&&function(e){return(e=e.indexOf(")")>0?E(e):e).split("")[0]}(t.lead_paragraph)),t.lead_paragraph&&function(e){return(e=e.indexOf(")")>0?E(e):e).substring(1)}(t.lead_paragraph),"                                                              "),r.a.createElement("button",null,r.a.createElement("a",{href:t.web_url},"Read More")))},b=(n(25),function(){return r.a.createElement("div",{class:"loader"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))});var N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(["India","entertainment","tech","sport","politics","education","business","crime"]),s=Object(i.a)(o,2),l=s[0],u=(s[1],Object(a.useState)(0)),d=Object(i.a)(u,2),m=d[0],v=d[1],g=Object(a.useState)(!1),E=Object(i.a)(g,2),N=(E[0],E[1],Object(a.useState)(new Date)),O=Object(i.a)(N,2),y=O[0];O[1],Object(a.useEffect)((function(){j()}),[]);var j=function(){c(""),f().then((function(e){localStorage.setItem("date","".concat(y.getHours(),":").concat(y.getMinutes(),":").concat(y.getSeconds())),localStorage.setItem("data",JSON.stringify(e)),c(e.response.docs)})).catch((function(e){return c(JSON.parse(localStorage.getItem("data")).response.docs)}))},k=function(e){v(m===e?0:e)},S=function(e){return m===e?"#fff":"#654321"},x=function(e){return m===e?"#654321":"#fff"};return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("div",{className:"divider"}),"                   ",r.a.createElement("div",{className:"categories"},r.a.createElement("button",{style:{backgroundColor:S(0),color:x(0)},onClick:function(){k(0),j()}},"Worldwide"),"                              ",l.map((function(e,t){return r.a.createElement("button",{style:{backgroundColor:S(t+1),color:x(t+1)},onClick:function(){!function(e){c(""),p(e).then((function(e){localStorage.setItem("date","".concat(y.getHours(),":").concat(y.getMinutes(),":").concat(y.getSeconds())),c(e.response.docs)})).catch((function(e){return alert(e)}))}(e),k(t+1)}},e)})),"                                                         "),n?r.a.createElement("div",{className:"container"},n.map((function(e,t){return r.a.createElement("div",{className:"newsItem"},t%4==0?r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"mainNews"},r.a.createElement(w,{classType:"topnews",featured:!0,topnews:e}))):r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"single_divider"}),r.a.createElement(w,{topnews:e,classType:"smallnews"})))}))):r.a.createElement(b,null),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"developer"},"Designed and Developed by ",r.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/dev_monk_4/"},r.a.createElement("span",null,"Nishchith Rao")))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){alert("Error during service worker registration:"),console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TheDailyProphet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TheDailyProphet","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){alert("offline"),console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.80365bb7.chunk.js.map