(function(t){function e(e){for(var r,a,c=e[0],i=e[1],u=e[2],f=0,l=[];f<c.length;f++)a=c[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function c(t){return i.p+"assets/js/"+({}[t]||t)+"."+{"chunk-2d0c4883":"ed75feaf","chunk-32c87da2":"4c35acf4","chunk-726b5d81":"6fcc21a2"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-726b5d81":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="assets/css/"+({}[t]||t)+"."+{"chunk-2d0c4883":"31d6cfe0","chunk-32c87da2":"31d6cfe0","chunk-726b5d81":"42da7ac0"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===o))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],f=u.getAttribute("data-href");if(f===r||f===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],p.parentNode.removeChild(p),n(s)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=s);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=f;s.push([0,"vendors~app"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2c8b":function(t,e){(function(t,e){var n=document.documentElement||document.body,r="orientationchange"in window?"orientationchange":"resize",a=function(){var t=n.clientWidth;n.style.fontSize=t>=750?"100px":t/750*100+"px"};a(),t.addEventListener(r,a,!1)})(window)},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("7c55"),n("2877")),c={},i=Object(s["a"])(c,a,o,!1,null,null,null),u=i.exports,f=n("75fc"),l=n("8c4f"),p=[{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-32c87da2"),n.e("chunk-726b5d81")]).then(n.bind(null,"78c1"))}}],d=p,m=[{path:"/mine",name:"mine",component:function(){return n.e("chunk-2d0c4883").then(n.bind(null,"3adc"))}}],h=m;r["a"].use(l["a"]);var g,b=new l["a"]({mode:"history",linkActiveClass:"active",routes:[{path:"/",redirect:"/test"}].concat(Object(f["a"])(d),Object(f["a"])(h))}),v=n("2f62"),y=(n("96cf"),n("3b8d")),O=n("bd86"),T="SET_LIST",j="SET_TEMP_LIST",w="SET_TOKEN",S=n("bc3a"),k=n.n(S),E={list:[],tempList:[]},P=(g={},Object(O["a"])(g,T,function(t,e){console.log(e),t.list=e}),Object(O["a"])(g,j,function(t,e){t.tempList=e}),g),_={getListAndSet:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.state,r=e.commit,t.next=3,k.a.get("api/test/test1",{params:n}).then(function(t){return t.data.data});case 3:a=t.sent,r(T,a),r(j,a),localStorage.setItem("_list",a);case 7:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},L={list:function(t){return t.list},tempList:function(t){return t.tempList},whiteUser:function(t){return t.list.filter(function(t){return/白/g.test(t.nickname)})}},x={state:E,actions:_,getters:L,mutations:P},A=n("d225"),D=n("335a"),N=function t(){Object(A["a"])(this,t),Object(O["a"])(this,"save",function(t,e){return D["a"].set(t,e)}),Object(O["a"])(this,"get",function(t){return D["a"].get(t,"")}),Object(O["a"])(this,"has",function(t){return D["a"].has(t)}),Object(O["a"])(this,"remove",function(t){return D["a"].remove(t)})},I=new N,R="token",C={token:I.get(R)||""},M=Object(O["a"])({},w,function(t,e){t.token=e}),U={setToken:function(t,e){t.state;var n=t.commit;e&&(I.save(R,e),n(w,e))}},B={token:function(t){return t.token}},q={state:C,actions:U,getters:B,mutations:M},G=n("b054"),K=n.n(G);r["a"].use(v["a"]);var $=!1,z=new v["a"].Store({modules:{test:x,global:q},strict:$,plugins:$?[K()()]:[]}),F=z,J=(n("66b9"),n("b650"));r["a"].use(J["a"]);n("2c8b");var H,V={DEVT_BASE_URL:"http://localhost:5000/",TEST_BASE_URL:"http://localhost:3005/"},W=V.TEST_BASE_URL,Q={getTest:W+"test/test1",postTest:W+"test/test2"},X=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("e7e5"),n("d399")),Y=n("4328"),Z=n.n(Y),tt="SET_LIST",et="SET_TEMP_LIST",nt="SET_TOKEN",rt={TestDefault:"vuex -- > TestModules",list:[],tempList:[]},at=(H={},Object(O["a"])(H,tt,function(t,e){t.list=e}),Object(O["a"])(H,et,function(t,e){t.tempList=e}),H),ot={getListAndSet:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.state,r=e.commit,t.next=3,k.a.get("api/test/test1",{params:n}).then(function(t){return t.data.data});case 3:a=t.sent,r(tt,a),r(et,a),localStorage.setItem("_list",a);case 7:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},st={list:function(t){return t.list},tempList:function(t){return t.tempList},whiteUser:function(t){return t.list.filter(function(t){return/白/g.test(t.nickname)})},TestDefault:function(t){return t.TestDefault}},ct={state:rt,actions:ot,getters:st,mutations:at},it={listNameSpace:[]},ut=Object(O["a"])({},"SET_LIST",function(t,e){t.listNameSpace=e}),ft={getListAndSetNamespace:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,o,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,a=e.commit,o=e.rootState,s=e.rootGetters,t.next=3,k.a.get("api/test/test1",{params:n}).then(function(t){return t.data.data});case 3:c=t.sent,a("SET_LIST",c),a("SET_LIST",c,{root:!0}),r("getListAndSet",c,{root:!0}),console.log("rootState: ",o),console.log("rootGetters: ",s);case 9:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},lt={ListNameSpaceGetters:function(t,e,n,r){return r.tempList}},pt={namespaced:!0,state:it,actions:ft,getters:lt,mutations:ut},dt=new N,mt="token",ht={token:dt.get(mt)||""},gt=Object(O["a"])({},nt,function(t,e){t.token=e}),bt={setToken:function(t,e){t.state;var n=t.commit;e&&(dt.save(mt,e),n(nt,e))}},vt={token:function(t){return t.token}},yt={state:ht,actions:bt,getters:vt,mutations:gt};r["a"].use(v["a"]);var Ot=!1;new v["a"].Store({modules:{test:ct,test_namespace:pt,global:yt},strict:Ot,plugins:Ot?[K()()]:[]});function Tt(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Tt(n,!0).forEach(function(e){Object(O["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var wt=function(t){Object(X["a"])({message:t,duration:1e3,forbidClick:!1})},St=function(){b.replace({path:"/login",query:{redirect:b.currentRoute.fullPath}})},kt=function(t,e){switch(t){case 401:St();break;case 403:wt("登录过期，请重新登录"),setTimeout(function(){St()},300);break;case 404:wt("请求资源不存在");break;default:wt(e)}},Et=k.a.create({timeout:2e4});Et.defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",Et.interceptors.request.use(function(t){if("post"===t.method){var e=Z.a.parse(t.data);t.data=Z.a.stringify(jt({},e))}else if("get"===t.method){var n=Z.a.parse(t.params);t.params=Z.a.stringify(jt({},n))}return t},function(t){return Promise.reject(t)}),Et.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t):Promise.reject(t)},function(t){var e=t.response;if(e)return kt(e.status,e.data.message),Promise.reject(e);console.log("请求超时或断网.....")});var Pt=Et,_t={getTestData:function(){return Pt({url:Q.getTest}).then(function(t){return 200==t.status?Promise.resolve(t.data):Promise.reject("err")}).catch(function(t){return Promise.reject("err")})},postMassage:function(){return Pt({method:"post",url:Q.postTest}).then(function(t){return 200==t.status?Promise.resolve(t.data):Promise.reject("err")}).catch(function(t){return Promise.reject("err")})}},Lt={testModel:_t};r["a"].prototype.$api=Lt,r["a"].config.productionTip=!1,new r["a"]({router:b,store:F,render:function(t){return t(u)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),a=n.n(r);a.a}});
//# sourceMappingURL=app.847bc513.js.map