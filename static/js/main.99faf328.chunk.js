(this.webpackJsonpprophet=this.webpackJsonpprophet||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),s=(n(12),n(1)),i=(n(13),n(2)),o=n.n(i),u=n(5),m="https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&apiKey",d="219a7dfcedc24ceeab3173b55050eaf7",f=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"=").concat(d));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"=").concat(d,"&q=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(n(15),function(){var e=Object(a.useState)(new Date),t=Object(s.a)(e,2),n=t[0];t[1];return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"DAILY PROPHET"),c.a.createElement("div",{className:"timeDet"},c.a.createElement("div",{className:"currentDate"},"".concat(n.getDate(),"/").concat(n.getMonth(),"/").concat(n.getFullYear())),c.a.createElement("div",{className:"fetchTime"},"Fetched At:",localStorage.getItem("date"))))}),E=(n(16),n(17),n(6)),g=n.n(E),h=function(e){return e.split("")[0]},b=function(e){var t=e.topnews,n=e.classType,a=e.featured;return c.a.createElement("div",{className:n},a&&c.a.createElement(g.a,{minFontSize:38},c.a.createElement("div",{className:"featuredTitle"},t.title.split(" ")[0])),c.a.createElement("div",{className:"title"},a?function(e){return e.substring(e.indexOf(" "),e.lastIndexOf("-"))}(t.title):function(e){return e.substring(0,e.lastIndexOf("-"))}(t.title)),t.urlToImage&&c.a.createElement("div",{className:"imgCon"},"                        ",c.a.createElement("div",{className:"publisher"},"- "+t.source.name),"                                                       ",c.a.createElement("img",{alt:t.title,src:t.urlToImage})),c.a.createElement("p",null,c.a.createElement("span",null,t.content?h(t.content):t.description&&h(t.description)),t.content?function(e){return e&&e.substring(1,e.lastIndexOf("["))}(t.content):t.description&&function(e){return e&&e.substring(1)}(t.description),"                                                              "),c.a.createElement("button",null,c.a.createElement("a",{href:t.url},"Read More")))},w=(n(25),function(){return c.a.createElement("div",{class:"loader"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))});var N=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(["entertainment","tech","sport","politics","education","business","crime"]),i=Object(s.a)(l,2),o=i[0],u=(i[1],Object(a.useState)(new Date)),m=Object(s.a)(u,1)[0];Object(a.useEffect)((function(){d()}),[]);var d=function(){f().then((function(e){localStorage.setItem("date","".concat(m.getHours(),":").concat(m.getMinutes(),":").concat(m.getSeconds())),localStorage.setItem("data",JSON.stringify(e)),r(e.articles)})).catch((function(e){return r(JSON.parse(localStorage.getItem("data")).articles)}))};return c.a.createElement("div",{className:"App"},n?c.a.createElement("div",{className:"container"},c.a.createElement(v,null),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"categories"},c.a.createElement("button",{onClick:d},"All"),o.map((function(e){return c.a.createElement("button",{onClick:function(){return function(e){p(e).then((function(e){localStorage.setItem("date","".concat(m.getHours(),":").concat(m.getMinutes(),":").concat(m.getSeconds())),r(e.articles)})).catch((function(e){return alert(e)}))}(e)}},e)}))),n.map((function(e,t){return c.a.createElement("div",{className:"newsItem"},t%4==0?c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"mainNews"},c.a.createElement(b,{classType:"topnews",featured:!0,topnews:e}))):c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"single_divider"}),c.a.createElement(b,{topnews:e,classType:"smallnews"})))}))):c.a.createElement(w,null),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"developer"},"Designed and Developed by ",c.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/dev_monk_4/"},c.a.createElement("span",null,"Nishchith Rao")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.99faf328.chunk.js.map