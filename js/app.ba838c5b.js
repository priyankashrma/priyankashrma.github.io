(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={2:0},a={2:0},u=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{1:"19a1006c",3:"394d5fdb",4:"79720c31",5:"5e066196",6:"4719bf28"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"ca83a539",4:"da6f0328",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;u.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getUser",(function(){return y})),n.d(r,"isUserAuth",(function(){return w})),n.d(r,"getError",(function(){return P}));var o={};n.r(o),n.d(o,"setUser",(function(){return E})),n.d(o,"setError",(function(){return A}));var a={};n.r(a),n.d(a,"authAction",(function(){return S})),n.d(a,"signInAction",(function(){return j})),n.d(a,"signUpAction",(function(){return _})),n.d(a,"signOutAction",(function(){return U}));n("7d6e"),n("e54f"),n("985d"),n("0047");var u=n("2b0e"),i=n("1f91"),s=n("42d2"),c=n("b05d");u["a"].use(c["a"],{config:{},lang:i["a"],iconSet:s["a"]});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],d={name:"App"},p=d,h=n("2877"),m=Object(h["a"])(p,l,f,!1,null,null,null),g=m.exports,b=n("2f62"),v=function(){return{user:null,error:null}};function y(e){return e.user}function w(e){return!!e.user}function P(e){return e.error}function E(e,t){e.user=t.user,this.$router.push({path:"/"})}function A(e,t){e.error=t}var O=n("260b");function S({commit:e}){O["a"].auth().onAuthStateChanged((t=>{e("setUser",t||null)}))}function j({commit:e},t){O["a"].auth().signInWithEmailAndPassword(t.email,t.password).then((t=>{t&&(e("setUser",t),this.$router.push({path:"/"}))})).catch((t=>{e("setError",t.message)}))}function _({commit:e},t){O["a"].auth().createUserWithEmailAndPassword(t.email,t.password).then((n=>{n&&n.user.updateProfile({payload:t}).then((t=>{console.log("here in commit"),e("setUser",t)}))})).catch((t=>{e("setError",t.message)}))}function U({commit:e}){O["a"].auth().signOut().then((()=>{this.$router.push({path:"login"}),e("setUser",null)})).catch((t=>{e("setError",t.message)}))}var x={namespaced:!0,getters:r,mutations:o,actions:a,state:v};u["a"].use(b["a"]);var k=function(){const e=new b["a"].Store({modules:{user:x},strict:!1});return e},C=n("8c4f");n("ddb0");const T=[{path:"/signup",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"89a8"))}]},{path:"/login",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"013f"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"ec95"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"e51e"))}];var q=T,I=n("2591"),B=(n("ea7b"),n("8524"));const L=I["a"].initializeApp(B),N=L.auth();u["a"].use(C["a"]);const $=new C["a"]({mode:"hash",base:"",scrollBehavior:()=>({y:0}),routes:q});$.beforeEach(((e,t,n)=>{const r=N.currentUser,o=e.matched.some((e=>e.meta.requiresAuth));o&&!r?n("/login"):!o&&r?n("/"):n()}));var J=$,M=async function(){const e="function"===typeof k?await k({Vue:u["a"]}):k,t="function"===typeof J?await J({Vue:u["a"],store:e}):J;e.$router=t;const n={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:n,store:e,router:t}};async function V(){const{app:e,store:t,router:n}=await M();new u["a"](e)}V()},8524:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyBLtesrs_qV1jdX4yTSVvqmv_f65JPzolE","authDomain":"vue-firebase-47bdd.firebaseapp.com","projectId":"vue-firebase-47bdd","storageBucket":"vue-firebase-47bdd.appspot.com","messagingSenderId":"718079016686","appId":"1:718079016686:web:34a51619085dcc24873dff"}')}});