(function(e){function t(t){for(var r,o,l=t[0],s=t[1],u=t[2],i=0,d=[];i<l.length;i++)o=l[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"309432be"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"59fe35d8"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var u=c[l],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===r||i===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],i=u.getAttribute("data-href");if(i===r||i===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=l(e);var d=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0baf":function(e,t,n){"use strict";n("1c73")},"1c73":function(e,t,n){},"24a2":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("260b"),o=n("e71f"),a={apiKey:"AIzaSyB5jl6FVxd55n7yUK04RRhpuazDt7Q9-6o",authDomain:"fg-employee-mgt.firebaseapp.com",projectId:"fg-employee-mgt",storageBucket:"fg-employee-mgt.appspot.com",messagingSenderId:"632664980029",appId:"1:632664980029:web:6fb55ded2db86700a10854",measurementId:"G-27D3G9QEFG"},c=Object(r["a"])(a),l=Object(o["d"])(c)},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"w-screen h-screen flex bg-gray-800"},a={class:"bar w-20 h-full flex flex-col justify-between items-center border-r border-gray-700 py-4 z-50"},c={class:"flex flex-col space-y-8"},l={class:"mx-3"};function s(e,t,n,s,u,i){var d=Object(r["A"])("HomeIcon"),b=Object(r["A"])("router-link"),f=Object(r["A"])("GroupIcon"),p=Object(r["A"])("DatabaseIcon"),h=Object(r["A"])("ReportIcon"),j=Object(r["A"])("SettingsIcon"),v=Object(r["A"])("Modal"),m=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["g"])("div",o,[Object(r["h"])("div",a,[Object(r["h"])("div",c,[Object(r["j"])(b,{to:"/"},{default:Object(r["H"])((function(){return[Object(r["j"])(d)]})),_:1}),Object(r["j"])(b,{to:"/employee-list"},{default:Object(r["H"])((function(){return[Object(r["j"])(f)]})),_:1}),Object(r["j"])(b,{to:"/database"},{default:Object(r["H"])((function(){return[Object(r["j"])(p)]})),_:1}),Object(r["j"])(b,{to:"/report"},{default:Object(r["H"])((function(){return[Object(r["j"])(h)]})),_:1})]),Object(r["h"])("div",null,[Object(r["j"])(b,{to:"/settings"},{default:Object(r["H"])((function(){return[Object(r["j"])(j)]})),_:1})])]),e.modalActive?(Object(r["t"])(),Object(r["e"])(v,{key:0})):Object(r["f"])("",!0),Object(r["h"])("div",l,[Object(r["j"])(m)])])}var u=n("5530"),i=n("5502"),d={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-500 font-bold hover:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},b=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),f=[b];function p(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",d,f)}var h={},j=n("6b0d"),v=n.n(j);const m=v()(h,[["render",p]]);var O=m,g={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-500 font-bold hover:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},w=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1),y=[w];function x(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",g,y)}var k={};const E=v()(k,[["render",x]]);var M=E,A={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-500 font-bold hover:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},I=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"},null,-1),C=[I];function _(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",A,C)}var D={};const L=v()(D,[["render",_]]);var S=L,B={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-500 font-bold hover:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},H=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1),P=[H];function T(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",B,P)}var z={};const V=v()(z,[["render",T]]);var R=V,G={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-500 font-bold hover:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),N=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),U=[Y,N];function F(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",G,U)}var K={};const q=v()(K,[["render",F]]);var J=q,Q={class:"flex justify-center items-center h-screen w-full z-50 fixed"},W=Object(r["i"])('<div class="h-64 w-96 flex flex-col justify-center items-center rounded-md py-12 px-8 min-w-min text-gray-300 bg-gray-700 shadow-lg"><p class="flex flex-col text-center text-xl"><span>Are you sure you want to exit?</span><span>Your changes will not be saved!</span></p><div class="flex space-x-16 mt-6"><button class="py-2 px-4 bg-purple-600 text-gray-300 rounded"> Return </button><button class="px-4 py-2 bg-red-600 text-gray-300 rounded"> Close </button></div></div>',1),X=[W];function Z(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("div",Q,X)}var $={name:"Modal"};const ee=v()($,[["render",Z]]);var te=ee,ne={name:"App",components:{HomeIcon:O,GroupIcon:M,DatabaseIcon:S,ReportIcon:R,SettingsIcon:J,Modal:te},computed:Object(u["a"])({},Object(i["c"])(["modalActive"]))};const re=v()(ne,[["render",s]]);var oe=re,ae=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),ce=function(e){return Object(r["w"])("data-v-7b39e64e"),e=e(),Object(r["u"])(),e},le={class:"h-14 w-full flex justify-between items-center"},se={class:"flex space-x-2"},ue={class:"flex space-x-3"},ie={class:"flex flex-col space-y-3"},de={class:"flex space-x-3"},be=ce((function(){return Object(r["h"])("div",{class:"h-56 border border-gray-500"},[Object(r["h"])("div",null,[Object(r["h"])("h1",null,"down")])],-1)})),fe=ce((function(){return Object(r["h"])("div",{class:"left w-72 border border-gray-500"},[Object(r["h"])("h1",null,"Left")],-1)}));function pe(e,t,n,o,a,c){var l=Object(r["A"])("CollectionIcon"),s=Object(r["A"])("ChartIcon"),u=Object(r["A"])("DownloadIcon"),i=Object(r["A"])("CalendarIcon"),d=Object(r["A"])("UserIcon"),b=Object(r["A"])("LargeCard");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["h"])("div",le,[Object(r["h"])("div",se,[Object(r["j"])(l),Object(r["j"])(s),Object(r["j"])(u),Object(r["j"])(i)]),Object(r["h"])("div",null,[Object(r["j"])(d)])]),Object(r["h"])("div",ue,[Object(r["h"])("div",ie,[Object(r["h"])("div",de,[Object(r["j"])(b),Object(r["j"])(b),Object(r["j"])(b)]),be]),fe])])}var he={class:"w-80 h-80 border border-gray-600 rounded"},je=Object(r["h"])("h1",null,"Card",-1),ve=[je];function me(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("div",he,ve)}var Oe={};const ge=v()(Oe,[["render",me]]);var we=ge,ye={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},xe=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},null,-1),ke=[xe];function Ee(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",ye,ke)}var Me={};const Ae=v()(Me,[["render",Ee]]);var Ie=Ae,Ce={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},_e=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},null,-1),De=[_e];function Le(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",Ce,De)}var Se={};const Be=v()(Se,[["render",Le]]);var He=Be,Pe={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Te=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1),ze=[Te];function Ve(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",Pe,ze)}var Re={};const Ge=v()(Re,[["render",Ve]]);var Ye=Ge,Ne={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ue=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"},null,-1),Fe=[Ue];function Ke(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",Ne,Fe)}var qe={};const Je=v()(qe,[["render",Ke]]);var Qe=Je,We={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Xe=Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ze=[Xe];function $e(e,t,n,o,a,c){return Object(r["t"])(),Object(r["g"])("svg",We,Ze)}var et={};const tt=v()(et,[["render",$e]]);var nt=tt,rt={name:"Home",components:{LargeCard:we,CalendarIcon:Ie,ChartIcon:He,CollectionIcon:Ye,DownloadIcon:Qe,UserIcon:nt}};n("0baf");const ot=v()(rt,[["render",pe],["__scopeId","data-v-7b39e64e"]]);var at=ot,ct=[{path:"/",name:"Home",component:at},{path:"/employee-list",name:"EmployeeList",component:function(){return n.e("about").then(n.bind(null,"399d"))}},{path:"/employee/:empId",name:"employee",component:function(){return n.e("about").then(n.bind(null,"a5cd"))}},{path:"/database",name:"Database",component:function(){return n.e("about").then(n.bind(null,"076a"))}},{path:"/report",name:"Report",component:function(){return n.e("about").then(n.bind(null,"762c"))}},{path:"/settings",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))}}],lt=Object(ae["a"])({history:Object(ae["b"])("/"),routes:ct}),st=lt,ut=n("1da1"),it=(n("96cf"),n("4de4"),n("159b"),n("24a2")),dt=n("e71f"),bt=Object(i["a"])({state:{formModal:null,modalActive:!1,employeeData:[],currentEmployeeArray:null,employeesLoaded:null},mutations:{TOGGLE_FORM:function(e){e.formModal=!e.formModal},TOGGLE_MODAL:function(e){e.modalActive=!e.modalActive},SET_EMPLOYEE_DATA:function(e,t){e.employeeData.push(t),console.log(e.employeeData)},SET_CURRENT_EMPLOYEE:function(e,t){e.currentEmployeeArray=e.employeeData.filter((function(e){return e.empId===t}))},EMPLOYEES_LOADED:function(e){e.employeesLoaded=!0}},actions:{GET_EMPLOYEES:function(e){return Object(ut["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,o=Object(dt["b"])(it["a"],"Employees"),t.next=4,Object(dt["c"])(o);case 4:a=t.sent,a.forEach((function(e){if(!r.employeeData.some((function(t){return t.docId===e.id}))){var t={docId:e.id,empId:e.data().empId,firstname:e.data().firstname,lastname:e.data().lastname,address:e.data().address,dateOfBirth:e.data().dateOfBirth,contact:e.data().contact};n("SET_EMPLOYEE_DATA",t)}})),n("EMPLOYEES_LOADED");case 7:case"end":return t.stop()}}),t)})))()}},modules:{}});n("ba8c");Object(r["d"])(oe).use(bt).use(st).mount("#app")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.ba634bbb.js.map