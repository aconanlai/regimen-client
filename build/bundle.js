!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/assets/",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var n=r(6),o=e(n),i={msgs:[]},s=function(){return t("https://regimen-server-zeaktioidb.now.sh/").then(function(t){return t.json()}).then(function(t){return t})},u=function(t){var e=i.msgs;return t.filter(function(t){return e.indexOf(t)===-1})},a=function(t){var e=document.createElement("div");e.className+="msg";var r=document.createTextNode(t);e.appendChild(r);var n=document.getElementById("msgs"),o=n.firstChild;n.insertBefore(e,o),e.className+=" fade"},c=function(){return s().then(function(t){var e=t.map(function(t){return t.text}),r=u(e);r.map(function(t){return a(t)}),i.msgs=i.msgs.concat(r)})};c(),setInterval(function(){c()},1e3);var f=function(e){e.preventDefault(),t("https://regimen-server-zeaktioidb.now.sh/",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:(0,o.default)({text:document.getElementById("userinput").value})}).then(function(t){return t.json()}).then(function(t){return document.getElementById("userinput").value="",!1})},h=document.getElementById("userform");h.addEventListener("submit",function(t){return f(t)},!1)}).call(e,r(2))},function(t,e,r){(function(e,r){(function(){!function(t){"use strict";function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){return t.bodyUsed?e.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function u(t){return new e(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=u(e);return e.readAsArrayBuffer(t),r}function c(t){var e=new FileReader,r=u(e);return e.readAsText(t),r}function f(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&w(t))this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=h(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(f(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return T.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t){var e=new i;return t.split("\r\n").forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function v(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var _=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&_.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,e){t=r(t),e=n(e);var o=this.map[t];this.map[t]=o?o+","+e:e},i.prototype.delete=function(t){delete this.map[r(t)]},i.prototype.get=function(t){return t=r(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},i.prototype.set=function(t,e){this.map[r(t)]=n(e)},i.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},l.call(p.prototype),l.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];v.redirect=function(t,e){if(A.indexOf(e)===-1)throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=p,t.Response=v,t.fetch=function(t,r){return new e(function(e,n){var o=new p(t,r),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;e(new v(r,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),t.exports=r.fetch}).call(r)}).call(e,r(3),function(){return this}())},function(t,e,r){(function(e,n,o){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */
!function(e,r){t.exports=r()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function i(t){X=t}function s(t){W=t}function u(){return function(){return e.nextTick(l)}}function a(){return"undefined"!=typeof V?function(){V(l)}:h()}function c(){var t=0,e=new Z(l),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function f(){var t=new MessageChannel;return t.port1.onmessage=l,function(){return t.port2.postMessage(0)}}function h(){var t=setTimeout;return function(){return t(l,1)}}function l(){for(var t=0;t<K;t+=2){var e=rt[t],r=rt[t+1];e(r),rt[t]=void 0,rt[t+1]=void 0}K=0}function d(){try{var t=r(5);return V=t.runOnLoop||t.runOnContext,a()}catch(t){return h()}}function p(t,e){var r=arguments,n=this,o=new this.constructor(m);void 0===o[ot]&&C(o);var i=n._state;return i?!function(){var t=r[i-1];W(function(){return I(i,o,t,n._result)})}():S(n,o,t,e),o}function y(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(m);return E(r,t),r}function m(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(t){return at.error=t,at}}function w(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function g(t,e,r){W(function(t){var n=!1,o=w(r,e,function(r){n||(n=!0,e!==r?E(t,r):B(t,r))},function(e){n||(n=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,O(t,o))},t)}function T(t,e){e._state===st?B(t,e._result):e._state===ut?O(t,e._result):S(e,void 0,function(e){return E(t,e)},function(e){return O(t,e)})}function A(t,e,r){e.constructor===t.constructor&&r===p&&e.constructor.resolve===y?T(t,e):r===at?O(t,at.error):void 0===r?B(t,e):n(r)?g(t,e,r):B(t,e)}function E(e,r){e===r?O(e,v()):t(r)?A(e,r,_(r)):B(e,r)}function x(t){t._onerror&&t._onerror(t._result),j(t)}function B(t,e){t._state===it&&(t._result=e,t._state=st,0!==t._subscribers.length&&W(j,t))}function O(t,e){t._state===it&&(t._state=ut,t._result=e,W(x,t))}function S(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+st]=r,o[i+ut]=n,0===i&&t._state&&W(j,t)}function j(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?I(r,n,o,i):o(i);t._subscribers.length=0}}function P(){this.error=null}function U(t,e){try{return t(e)}catch(t){return ct.error=t,ct}}function I(t,e,r,o){var i=n(r),s=void 0,u=void 0,a=void 0,c=void 0;if(i){if(s=U(r,o),s===ct?(c=!0,u=s.error,s=null):a=!0,e===s)return void O(e,b())}else s=o,a=!0;e._state!==it||(i&&a?E(e,s):c?O(e,u):t===st?B(e,s):t===ut&&O(e,s))}function D(t,e){try{e(function(e){E(t,e)},function(e){O(t,e)})}catch(e){O(t,e)}}function R(){return ft++}function C(t){t[ot]=ft++,t._state=void 0,t._result=void 0,t._subscribers=[]}function F(t,e){this._instanceConstructor=t,this.promise=new t(m),this.promise[ot]||C(this.promise),Y(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):O(this.promise,L())}function L(){return new Error("Array Methods must be provided an Array")}function N(t){return new F(this,t).promise}function k(t){var e=this;return new e(Y(t)?function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function M(t){var e=this,r=new e(m);return O(r,t),r}function H(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function G(t){this[ot]=R(),this._result=this._state=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&H(),this instanceof G?D(this,t):q())}function J(){var t=void 0;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=G}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Y=z,K=0,V=void 0,X=void 0,W=function(t,e){rt[K]=t,rt[K+1]=e,K+=2,2===K&&(X?X(l):nt())},$="undefined"!=typeof window?window:void 0,Q=$||{},Z=Q.MutationObserver||Q.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3),nt=void 0;nt=tt?u():Z?c():et?f():void 0===$?d():h();var ot=Math.random().toString(36).substring(16),it=void 0,st=1,ut=2,at=new P,ct=new P,ft=0;return F.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===it&&r<t;r++)this._eachEntry(e[r],r)},F.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===y){var o=_(t);if(o===p&&t._state!==it)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===G){var i=new r(m);A(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},F.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===it&&(this._remaining--,t===ut?O(n,r):this._result[e]=r),0===this._remaining&&B(n,this._result)},F.prototype._willSettleAt=function(t,e){var r=this;S(t,void 0,function(t){return r._settledAt(st,e,t)},function(t){return r._settledAt(ut,e,t)})},G.all=N,G.race=k,G.resolve=y,G.reject=M,G._setScheduler=i,G._setAsap=s,G._asap=W,G.prototype={constructor:G,then:p,catch:function(t){return this.then(null,t)}},G.polyfill=J,G.Promise=G,G})}).call(e,r(4),r(3),function(){return this}())},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===n||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&d&&(y=!1,d.length?p=d.concat(p):m=-1,p.length&&u())}function u(){if(!y){var t=o(s);y=!0;for(var e=p.length;e;){for(d=p,p=[];++m<e;)d&&d[m].run();m=-1,e=p.length}d=null,y=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var f,h,l=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{h="function"==typeof clearTimeout?clearTimeout:n}catch(t){h=n}}();var d,p=[],y=!1,m=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];p.push(new a(t,e)),1!==p.length||y||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=c,l.addListener=c,l.once=c,l.off=c,l.removeListener=c,l.removeAllListeners=c,l.emit=c,l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(t,e){},function(t,e,r){t.exports={default:r(7),__esModule:!0}},function(t,e,r){var n=r(8),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)}]);