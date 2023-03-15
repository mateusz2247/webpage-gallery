(function(){"use strict";var e={7394:function(e,t,n){var r=n(9963),o=n(6252),i=n(7506),a=n(8278),u=n(1660),l=n(3890),c={__name:"SideBar",emits:["selectOption"],setup(e,{emit:t}){const n=e=>{t("selectOption",e)};return(e,t)=>((0,o.wg)(),(0,o.j4)(l.V,{"expand-on-hover":"",rail:""},{default:(0,o.w5)((()=>[(0,o.Wm)(a.i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u.l,{"prepend-avatar":"https://randomuser.me/api/portraits/women/85.jpg",title:"Sandra Adams",subtitle:"sandra_a88@gmailcom"})])),_:1}),(0,o.Wm)(i.J),(0,o.Wm)(a.i,{density:"compact",nav:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u.l,{"prepend-icon":"mdi-image",title:"Color Gallery",value:"color",onClick:t[0]||(t[0]=e=>n(!0))}),(0,o.Wm)(u.l,{"prepend-icon":"mdi-dialpad",title:"Grey scale Gallery",value:"black white",onClick:t[1]||(t[1]=e=>n(!1))})])),_:1})])),_:1}))}};const f=c;var s=f,p=n(9635),d=n(9003),m=n(3379),g=n(2527),v=n(3732),h={__name:"ImageGallery",props:["isWithColor"],setup(e){const t=e,n=async e=>{await navigator.clipboard.writeText(e)};return(e,r)=>((0,o.wg)(),(0,o.j4)(p._,{class:"mx-5 my-2 pa-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(d.o,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(200,(e=>(0,o.Wm)(m.D,{key:e,sm:"3",md:"2",lg:"1"},{default:(0,o.w5)((()=>[(0,o.Wm)(p._,{onClick:r=>n(`https://picsum.photos/500/300?image=${5*e+10}${t.isWithColor?"":"&grayscale"}`)},{default:(0,o.w5)((()=>[(0,o.Wm)(g.f,{src:`https://picsum.photos/500/300?image=${5*e+10}${t.isWithColor?"":"&grayscale"}`,"lazy-src":`https://picsum.photos/10/6?image=${5*e+10}${t.isWithColor?"":"&grayscale"}`,"aspect-ratio":"1",cover:""},{placeholder:(0,o.w5)((()=>[(0,o.Wm)(d.o,{class:"fill-height ma-0",align:"center",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v.L,{indeterminate:"",color:"grey-lighten-5"})])),_:1})])),_:2},1032,["src","lazy-src"])])),_:2},1032,["onClick"])])),_:2},1024))),64))])),_:1})])),_:1}))}};const y=h;var b=y,w=n(2262),_=n(1457),O=n(9289),j={__name:"App",setup(e){const t=(0,w.iH)(!0),n=e=>{t.value=e};return(e,r)=>((0,o.wg)(),(0,o.j4)(_.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{onSelectOption:n}),(0,o.Wm)(O.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{isWithColor:t.value},null,8,["isWithColor"])])),_:1})])),_:1}))}};const W=j;var k=W,C=(n(9773),n(1291)),P=(0,C.Rd)();async function x(){const e=await n.e(461).then(n.t.bind(n,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}x(),(0,r.ri)(k).use(P).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.f10ffd69.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="webpage-gallery:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var s=c[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){u=s;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/webpage-gallery/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var f=l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkwebpage_gallery"]=self["webpackChunkwebpage_gallery"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7394)}));r=n.O(r)})();
//# sourceMappingURL=app.5d10d0dd.js.map