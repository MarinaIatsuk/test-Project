(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const zl=document.querySelector(".exit__img");document.querySelector(".exit__text");document.querySelector(".account__btn");const Hl=window.localStorage.getItem("client"),Gl=document.querySelector(".account__enter"),fi=document.querySelector("#btnOpenBurger"),mi=document.querySelector("#personalAccount"),Kl=document.querySelector(".account__personal"),Wl=document.querySelector(".account__exit"),Ql=document.querySelector(".account__avatar"),Xl=document.querySelector(".search__input"),xn=document.querySelector(".search__list"),Qn=document.querySelector(".burger-menu__exit");Zl(".burger-menu");Hl===null?(fi.style.display="flex",mi.style.display="none",Qn.style.display="none"):(mi.style.display="flex",fi.style.display="none",Qn.style.display="flex");Xl.addEventListener("input",e=>{const t=e.target.value.toLowerCase();fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(t)}&page=1`,{method:"GET",headers:{"X-API-KEY":"6e01b98a-32ba-41c9-b64f-a2a9582aafa5","Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{xn.innerHTML="",n.films.forEach(r=>{if(r.filmId!==void 0&&r.filmId!==null){let i;i=r.nameRu,r.nameRu===void 0&&r.nameEn!==void 0&&(i=r.nameEn);const s=document.createElement("li"),o=`<a href="page-movie.html?id=${r.filmId}" class="list__link">${i}</a>`;s.classList.add("list__item"),s.innerHTML=o,xn.appendChild(s)}xn.style.display=n.films.length>0?"block":"none",document.addEventListener("click",i=>{!i.target.closest(".search__input")&&!i.target.closest(".search__list")&&(xn.style.display="none")})})}).catch(n=>console.log(n))});const Yl=window.localStorage.getItem("client");JSON.parse(Yl);zl.addEventListener("click",ua);Qn.addEventListener("click",ua);function ua(){window.localStorage.removeItem("client"),Gl.style.display="flex",fi.style.display="flex",Qn.style.display="none",mi.style.display="none",Kl.style.display="none",Wl.style.display="none",window.location.href.includes("personalaccount.html")&&window.open(window.location.protocol+"//"+window.location.host+"/","_self")}Ql.addEventListener("click",Jl);function Jl(){const e="personalaccount.html";window.location.href=e}function Zl(e){let t=document.querySelector(e),n=t.querySelector(".burger-menu__button",".burger-menu__lines"),r=t.querySelectorAll(".burger-menu__link"),i=t.querySelector(".burger-menu__overlay");n.addEventListener("click",o=>{o.preventDefault(),s()}),r.forEach(o=>{o.addEventListener("click",()=>s())}),i.addEventListener("click",()=>s());function s(){t.classList.toggle("burger-menu__active"),t.classList.contains("burger-menu__active")?(document.body.classList.add("toggle-hidden"),document.body.classList.remove("toggle-visible")):(document.body.classList.add("toggle-visible"),document.body.classList.remove("toggle-hidden"))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},tc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,l=u?e[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(la(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new ec;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ec extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nc=function(e){const t=la(e);return ca.encodeByteArray(t,!0)},Xn=function(e){return nc(e).replace(/\./g,"")},rc=function(e){try{return ca.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=()=>ic().__FIREBASE_DEFAULTS__,oc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ac=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&rc(e[1]);return t&&JSON.parse(t)},ha=()=>{try{return sc()||oc()||ac()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},uc=e=>{var t,n;return(n=(t=ha())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},lc=e=>{const t=uc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},da=()=>{var e;return(e=ha())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Xn(JSON.stringify(n)),Xn(JSON.stringify(o)),a].join(".")}function dc(){try{return typeof indexedDB=="object"}catch{return!1}}function fc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="FirebaseError";class we extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=mc,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?pc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new we(i,a,r)}}function pc(e,t){return e.replace(gc,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const gc=/\{\$([^}]+)}/g;function pi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ys(s)&&Ys(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ys(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return e&&e._delegate?e._delegate:e}class je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new cc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ec(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yc(e){return e===Kt?void 0:e}function Ec(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new _c(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));const Tc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Ic=q.INFO,wc={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Ac=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=wc[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ma{constructor(t){this.name=t,this._logLevel=Ic,this._logHandler=Ac,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Tc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const Rc=(e,t)=>t.some(n=>e instanceof n);let Js,Zs;function Sc(){return Js||(Js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pc(){return Zs||(Zs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pa=new WeakMap,gi=new WeakMap,ga=new WeakMap,Xr=new WeakMap,Gi=new WeakMap;function Cc(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Lt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&pa.set(n,e)}).catch(()=>{}),Gi.set(t,e),t}function Vc(e){if(gi.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});gi.set(e,t)}let _i={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return gi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ga.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Dc(e){_i=e(_i)}function bc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Yr(this),t,...n);return ga.set(r,t.sort?t.sort():[t]),Lt(r)}:Pc().includes(e)?function(...t){return e.apply(Yr(this),t),Lt(pa.get(this))}:function(...t){return Lt(e.apply(Yr(this),t))}}function kc(e){return typeof e=="function"?bc(e):(e instanceof IDBTransaction&&Vc(e),Rc(e,Sc())?new Proxy(e,_i):e)}function Lt(e){if(e instanceof IDBRequest)return Cc(e);if(Xr.has(e))return Xr.get(e);const t=kc(e);return t!==e&&(Xr.set(e,t),Gi.set(t,e)),t}const Yr=e=>Gi.get(e);function Nc(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Lt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Lt(o.result),u.oldVersion,u.newVersion,Lt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const xc=["get","getKey","getAll","getAllKeys","count"],Oc=["put","add","delete","clear"],Jr=new Map;function to(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Jr.get(t))return Jr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Oc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xc.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Jr.set(t,s),s}Dc(e=>({...e,get:(t,n,r)=>to(t,n)||e.get(t,n,r),has:(t,n)=>!!to(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const yi="@firebase/app",eo="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new ma("@firebase/app"),Fc="@firebase/app-compat",qc="@firebase/analytics-compat",Bc="@firebase/analytics",Uc="@firebase/app-check-compat",$c="@firebase/app-check",jc="@firebase/auth",zc="@firebase/auth-compat",Hc="@firebase/database",Gc="@firebase/database-compat",Kc="@firebase/functions",Wc="@firebase/functions-compat",Qc="@firebase/installations",Xc="@firebase/installations-compat",Yc="@firebase/messaging",Jc="@firebase/messaging-compat",Zc="@firebase/performance",th="@firebase/performance-compat",eh="@firebase/remote-config",nh="@firebase/remote-config-compat",rh="@firebase/storage",ih="@firebase/storage-compat",sh="@firebase/firestore",oh="@firebase/firestore-compat",ah="firebase",uh="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]",lh={[yi]:"fire-core",[Fc]:"fire-core-compat",[Bc]:"fire-analytics",[qc]:"fire-analytics-compat",[$c]:"fire-app-check",[Uc]:"fire-app-check-compat",[jc]:"fire-auth",[zc]:"fire-auth-compat",[Hc]:"fire-rtdb",[Gc]:"fire-rtdb-compat",[Kc]:"fire-fn",[Wc]:"fire-fn-compat",[Qc]:"fire-iid",[Xc]:"fire-iid-compat",[Yc]:"fire-fcm",[Jc]:"fire-fcm-compat",[Zc]:"fire-perf",[th]:"fire-perf-compat",[eh]:"fire-rc",[nh]:"fire-rc-compat",[rh]:"fire-gcs",[ih]:"fire-gcs-compat",[sh]:"fire-fst",[oh]:"fire-fst-compat","fire-js":"fire-js",[ah]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map,vi=new Map;function ch(e,t){try{e.container.addComponent(t)}catch(n){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jn(e){const t=e.name;if(vi.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;vi.set(t,e);for(const n of Yn.values())ch(n,e);return!0}function hh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new fa("app","Firebase",dh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=uh;function _a(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ei,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=da()),!n)throw Ft.create("no-options");const s=Yn.get(i);if(s){if(pi(n,s.options)&&pi(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const o=new vc(i);for(const u of vi.values())o.addComponent(u);const a=new fh(n,r,o);return Yn.set(i,a),a}function ph(e=Ei){const t=Yn.get(e);if(!t&&e===Ei&&da())return _a();if(!t)throw Ft.create("no-app",{appName:e});return t}function he(e,t,n){var r;let i=(r=lh[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}Jn(new je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="firebase-heartbeat-database",_h=1,ze="firebase-heartbeat-store";let Zr=null;function ya(){return Zr||(Zr=Nc(gh,_h,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ze)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Zr}async function yh(e){try{return await(await ya()).transaction(ze).objectStore(ze).get(Ea(e))}catch(t){if(t instanceof we)Jt.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(n.message)}}}async function no(e,t){try{const r=(await ya()).transaction(ze,"readwrite");await r.objectStore(ze).put(t,Ea(e)),await r.done}catch(n){if(n instanceof we)Jt.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(r.message)}}}function Ea(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=1024,vh=30*24*60*60*1e3;class Th{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ro();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=vh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ro(),{heartbeatsToSend:r,unsentEntries:i}=Ih(this._heartbeatsCache.heartbeats),s=Xn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ro(){return new Date().toISOString().substring(0,10)}function Ih(e,t=Eh){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),io(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),io(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dc()?fc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return no(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return no(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function io(e){return Xn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(e){Jn(new je("platform-logger",t=>new Mc(t),"PRIVATE")),Jn(new je("heartbeat",t=>new Th(t),"PRIVATE")),he(yi,eo,e),he(yi,eo,"esm2017"),he("fire-js","")}Ah("");var Rh="firebase",Sh="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */he(Rh,Sh,"app");var Ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Ki=Ki||{},k=Ph||self;function gr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function cn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ch(e){return Object.prototype.hasOwnProperty.call(e,ti)&&e[ti]||(e[ti]=++Vh)}var ti="closure_uid_"+(1e9*Math.random()>>>0),Vh=0;function Dh(e,t,n){return e.call.apply(e.bind,arguments)}function bh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ct(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=Dh:ct=bh,ct.apply(null,arguments)}function On(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function tt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function zt(){this.s=this.s,this.o=this.o}var kh=0;zt.prototype.s=!1;zt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kh!=0)&&Ch(this)};zt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const va=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Wi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function so(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ht(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Nh=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{k.addEventListener("test",()=>{},t),k.removeEventListener("test",()=>{},t)}catch{}return e}();function He(e){return/^[\s\xa0]*$/.test(e)}function _r(){var e=k.navigator;return e&&(e=e.userAgent)?e:""}function wt(e){return _r().indexOf(e)!=-1}function Qi(e){return Qi[" "](e),e}Qi[" "]=function(){};function xh(e,t){var n=Sd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Oh=wt("Opera"),pe=wt("Trident")||wt("MSIE"),Ta=wt("Edge"),Ti=Ta||pe,Ia=wt("Gecko")&&!(_r().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge"))&&!(wt("Trident")||wt("MSIE"))&&!wt("Edge"),Mh=_r().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge");function wa(){var e=k.document;return e?e.documentMode:void 0}var Ii;t:{var ei="",ni=function(){var e=_r();if(Ia)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ta)return/Edge\/([\d\.]+)/.exec(e);if(pe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Mh)return/WebKit\/(\S+)/.exec(e);if(Oh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ni&&(ei=ni?ni[1]:""),pe){var ri=wa();if(ri!=null&&ri>parseFloat(ei)){Ii=String(ri);break t}}Ii=ei}var wi;if(k.document&&pe){var oo=wa();wi=oo||parseInt(Ii,10)||void 0}else wi=void 0;var Lh=wi;function Ge(e,t){if(ht.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ia){t:{try{Qi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Fh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ge.$.h.call(this)}}tt(Ge,ht);var Fh={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),qh=0;function Bh(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++qh,this.fa=this.ia=!1}function yr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Xi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Uh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Aa(e){const t={};for(const n in e)t[n]=e[n];return t}const ao="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<ao.length;s++)n=ao[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Er(e){this.src=e,this.g={},this.h=0}Er.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ri(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Bh(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Ai(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=va(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ri(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Yi="closure_lm_"+(1e6*Math.random()|0),ii={};function Sa(e,t,n,r,i){if(r&&r.once)return Ca(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Sa(e,t[s],n,r,i);return null}return n=ts(n),e&&e[hn]?e.O(t,n,cn(r)?!!r.capture:!!r,i):Pa(e,t,n,!1,r,i)}function Pa(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=cn(i)?!!i.capture:!!i,a=Zi(e);if(a||(e[Yi]=a=new Er(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=$h(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Nh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Da(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $h(){function e(n){return t.call(e.src,e.listener,n)}const t=jh;return e}function Ca(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ca(e,t[s],n,r,i);return null}return n=ts(n),e&&e[hn]?e.P(t,n,cn(r)?!!r.capture:!!r,i):Pa(e,t,n,!0,r,i)}function Va(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Va(e,t[s],n,r,i);else r=cn(r)?!!r.capture:!!r,n=ts(n),e&&e[hn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ri(s,n,r,i),-1<n&&(yr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ri(t,n,r,i)),(n=-1<e?t[e]:null)&&Ji(n))}function Ji(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[hn])Ai(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Da(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Zi(t))?(Ai(n,e),n.h==0&&(n.src=null,t[Yi]=null)):yr(e)}}}function Da(e){return e in ii?ii[e]:ii[e]="on"+e}function jh(e,t){if(e.fa)e=!0;else{t=new Ge(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ji(e),e=n.call(r,t)}return e}function Zi(e){return e=e[Yi],e instanceof Er?e:null}var si="__closure_events_fn_"+(1e9*Math.random()>>>0);function ts(e){return typeof e=="function"?e:(e[si]||(e[si]=function(t){return e.handleEvent(t)}),e[si])}function Z(){zt.call(this),this.i=new Er(this),this.S=this,this.J=null}tt(Z,zt);Z.prototype[hn]=!0;Z.prototype.removeEventListener=function(e,t,n,r){Va(this,e,t,n,r)};function st(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ht(t,e);else if(t instanceof ht)t.target=t.target||e;else{var i=t;t=new ht(r,e),Ra(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Mn(o,r,!0,t)&&i}if(o=t.g=e,i=Mn(o,r,!0,t)&&i,i=Mn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Mn(o,r,!1,t)&&i}Z.prototype.N=function(){if(Z.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)yr(n[r]);delete e.g[t],e.h--}}this.J=null};Z.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Z.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Mn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Ai(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var es=k.JSON.stringify;class zh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Hh(){var e=ns;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Gh{constructor(){this.h=this.g=null}add(t,n){const r=ba.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ba=new zh(()=>new Kh,e=>e.reset());class Kh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Qh(e){k.setTimeout(()=>{throw e},0)}let Ke,We=!1,ns=new Gh,ka=()=>{const e=k.Promise.resolve(void 0);Ke=()=>{e.then(Xh)}};var Xh=()=>{for(var e;e=Hh();){try{e.h.call(e.g)}catch(n){Qh(n)}var t=ba;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}We=!1};function vr(e,t){Z.call(this),this.h=e||1,this.g=t||k,this.j=ct(this.qb,this),this.l=Date.now()}tt(vr,Z);A=vr.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),st(this,"tick"),this.ga&&(rs(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}A.N=function(){vr.$.N.call(this),rs(this),delete this.g};function is(e,t,n){if(typeof e=="function")n&&(e=ct(e,n));else if(e&&typeof e.handleEvent=="function")e=ct(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:k.setTimeout(e,t||0)}function Na(e){e.g=is(()=>{e.g=null,e.i&&(e.i=!1,Na(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Yh extends zt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Na(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(e){zt.call(this),this.h=e,this.g={}}tt(Qe,zt);var uo=[];function xa(e,t,n,r){Array.isArray(n)||(n&&(uo[0]=n.toString()),n=uo);for(var i=0;i<n.length;i++){var s=Sa(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Oa(e){Xi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ji(t)},e),e.g={}}Qe.prototype.N=function(){Qe.$.N.call(this),Oa(this)};Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tr(){this.g=!0}Tr.prototype.Ea=function(){this.g=!1};function Jh(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Zh(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ce(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ed(e,n)+(r?" "+r:"")})}function td(e,t){e.info(function(){return"TIMEOUT: "+t})}Tr.prototype.info=function(){};function ed(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return es(n)}catch{return t}}var ne={},lo=null;function Ir(){return lo=lo||new Z}ne.Ta="serverreachability";function Ma(e){ht.call(this,ne.Ta,e)}tt(Ma,ht);function Xe(e){const t=Ir();st(t,new Ma(t))}ne.STAT_EVENT="statevent";function La(e,t){ht.call(this,ne.STAT_EVENT,e),this.stat=t}tt(La,ht);function ft(e){const t=Ir();st(t,new La(t,e))}ne.Ua="timingevent";function Fa(e,t){ht.call(this,ne.Ua,e),this.size=t}tt(Fa,ht);function dn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){e()},t)}var wr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qa={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ss(){}ss.prototype.h=null;function co(e){return e.h||(e.h=e.i())}function Ba(){}var fn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function os(){ht.call(this,"d")}tt(os,ht);function as(){ht.call(this,"c")}tt(as,ht);var Si;function Ar(){}tt(Ar,ss);Ar.prototype.g=function(){return new XMLHttpRequest};Ar.prototype.i=function(){return{}};Si=new Ar;function mn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Qe(this),this.P=nd,e=Ti?125:void 0,this.V=new vr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ua}function Ua(){this.i=null,this.g="",this.h=!1}var nd=45e3,Pi={},Zn={};A=mn.prototype;A.setTimeout=function(e){this.P=e};function Ci(e,t,n){e.L=1,e.v=Sr(kt(t)),e.s=n,e.S=!0,$a(e,null)}function $a(e,t){e.G=Date.now(),pn(e),e.A=kt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Xa(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ua,e.g=_u(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Yh(ct(e.Pa,e,e.g),e.O)),xa(e.U,e.g,"readystatechange",e.nb),t=e.I?Aa(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Xe(),Jh(e.j,e.u,e.A,e.m,e.W,e.s)}A.nb=function(e){e=e.target;const t=this.M;t&&At(e)==3?t.l():this.Pa(e)};A.Pa=function(e){try{if(e==this.g)t:{const c=At(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Ti||this.g&&(this.h.h||this.g.ja()||po(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?Xe(3):Xe(2)),Rr(this);var n=this.g.da();this.ca=n;e:if(ja(this)){var r=po(this.g);e="";var i=r.length,s=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),Fe(this);var o="";break e}this.h.i=new k.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Zh(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!He(a)){var l=a;break e}}l=null}if(n=l)ce(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vi(this,n);else{this.i=!1,this.o=3,ft(12),Wt(this),Fe(this);break t}}this.S?(za(this,c,o),Ti&&this.i&&c==3&&(xa(this.U,this.V,"tick",this.mb),this.V.start())):(ce(this.j,this.m,o,null),Vi(this,o)),c==4&&Wt(this),this.i&&!this.J&&(c==4?fu(this.l,this):(this.i=!1,pn(this)))}else wd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),Wt(this),Fe(this)}}}catch{}finally{}};function ja(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function za(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=rd(e,n),i==Zn){t==4&&(e.o=4,ft(14),r=!1),ce(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Pi){e.o=4,ft(15),ce(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ce(e.j,e.m,i,null),Vi(e,i);ja(e)&&i!=Zn&&i!=Pi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ft(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),fs(t),t.M=!0,ft(11))):(ce(e.j,e.m,n,"[Invalid Chunked Response]"),Wt(e),Fe(e))}A.mb=function(){if(this.g){var e=At(this.g),t=this.g.ja();this.C<t.length&&(Rr(this),za(this,e,t),this.i&&e!=4&&pn(this))}};function rd(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Zn:(n=Number(t.substring(n,r)),isNaN(n)?Pi:(r+=1,r+n>t.length?Zn:(t=t.slice(r,r+n),e.C=r+n,t)))}A.cancel=function(){this.J=!0,Wt(this)};function pn(e){e.Y=Date.now()+e.P,Ha(e,e.P)}function Ha(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=dn(ct(e.lb,e),t)}function Rr(e){e.B&&(k.clearTimeout(e.B),e.B=null)}A.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(td(this.j,this.A),this.L!=2&&(Xe(),ft(17)),Wt(this),this.o=2,Fe(this)):Ha(this,this.Y-e)};function Fe(e){e.l.H==0||e.J||fu(e.l,e)}function Wt(e){Rr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,rs(e.V),Oa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Vi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Di(n.i,e))){if(!e.K&&Di(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)nr(n),Vr(n);else break t;ds(n),ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=dn(ct(n.ib,n),6e3));if(1>=Za(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qt(n,11)}else if((e.K||n.g==e)&&nr(n),!He(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const S=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var s=r.i;s.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(us(s,s.h),s.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,j(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=gu(r,r.J?r.pa:null,r.Y),o.K){tu(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Rr(a),pn(a)),r.g=o}else hu(r);0<n.j.length&&Dr(n)}else l[0]!="stop"&&l[0]!="close"||Qt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qt(n,7):hs(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Xe(4)}catch{}}function id(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(gr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function sd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(gr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ga(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(gr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sd(e),r=id(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Ka=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Yt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Yt){this.h=e.h,tr(this,e.j),this.s=e.s,this.g=e.g,er(this,e.m),this.l=e.l;var t=e.i,n=new Ye;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ho(this,n),this.o=e.o}else e&&(t=String(e).match(Ka))?(this.h=!1,tr(this,t[1]||"",!0),this.s=Ne(t[2]||""),this.g=Ne(t[3]||"",!0),er(this,t[4]),this.l=Ne(t[5]||"",!0),ho(this,t[6]||"",!0),this.o=Ne(t[7]||"")):(this.h=!1,this.i=new Ye(null,this.h))}Yt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(xe(t,fo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(xe(t,fo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(xe(n,n.charAt(0)=="/"?ld:ud,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",xe(n,hd)),e.join("")};function kt(e){return new Yt(e)}function tr(e,t,n){e.j=n?Ne(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function er(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ho(e,t,n){t instanceof Ye?(e.i=t,dd(e.i,e.h)):(n||(t=xe(t,cd)),e.i=new Ye(t,e.h))}function j(e,t,n){e.i.set(t,n)}function Sr(e){return j(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ne(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function xe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ad),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ad(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var fo=/[#\/\?@]/g,ud=/[#\?:]/g,ld=/[#\?]/g,cd=/[#\?@]/g,hd=/#/g;function Ye(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ht(e){e.g||(e.g=new Map,e.h=0,e.i&&od(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}A=Ye.prototype;A.add=function(e,t){Ht(this),this.i=null,e=Ae(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Wa(e,t){Ht(e),t=Ae(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qa(e,t){return Ht(e),t=Ae(e,t),e.g.has(t)}A.forEach=function(e,t){Ht(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};A.ta=function(){Ht(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};A.Z=function(e){Ht(this);let t=[];if(typeof e=="string")Qa(this,e)&&(t=t.concat(this.g.get(Ae(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};A.set=function(e,t){return Ht(this),this.i=null,e=Ae(this,e),Qa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};A.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Xa(e,t,n){Wa(e,t),0<n.length&&(e.i=null,e.g.set(Ae(e,t),Wi(n)),e.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ae(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function dd(e,t){t&&!e.j&&(Ht(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Wa(this,r),Xa(this,i,n))},e)),e.j=t}var fd=class{constructor(e,t){this.g=e,this.map=t}};function Ya(e){this.l=e||md,k.PerformanceNavigationTiming?(e=k.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var md=10;function Ja(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Za(e){return e.h?1:e.g?e.g.size:0}function Di(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function us(e,t){e.g?e.g.add(t):e.h=t}function tu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ya.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function eu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Wi(e.i)}var pd=class{stringify(e){return k.JSON.stringify(e,void 0)}parse(e){return k.JSON.parse(e,void 0)}};function gd(){this.g=new pd}function _d(e,t,n){const r=n||"";try{Ga(e,function(i,s){let o=i;cn(i)&&(o=es(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function yd(e,t){const n=new Tr;if(k.Image){const r=new Image;r.onload=On(Ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=On(Ln,n,r,"TestLoadImage: error",!1,t),r.onabort=On(Ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=On(Ln,n,r,"TestLoadImage: timeout",!1,t),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ln(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function gn(e){this.l=e.ec||null,this.j=e.ob||!1}tt(gn,ss);gn.prototype.g=function(){return new Pr(this.l,this.j)};gn.prototype.i=function(e){return function(){return e}}({});function Pr(e,t){Z.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ls,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Pr,Z);var ls=0;A=Pr.prototype;A.open=function(e,t){if(this.readyState!=ls)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Je(this)};A.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||k).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_n(this)),this.readyState=ls};A.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Je(this)),this.g&&(this.readyState=3,Je(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function nu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}A.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?_n(this):Je(this),this.readyState==3&&nu(this)}};A.Za=function(e){this.g&&(this.response=this.responseText=e,_n(this))};A.Ya=function(e){this.g&&(this.response=e,_n(this))};A.ka=function(){this.g&&_n(this)};function _n(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Je(e)}A.setRequestHeader=function(e,t){this.v.append(e,t)};A.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Je(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ed=k.JSON.parse;function K(e){Z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ru,this.L=this.M=!1}tt(K,Z);var ru="",vd=/^https?$/i,Td=["POST","PUT"];A=K.prototype;A.Oa=function(e){this.M=e};A.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Si.g(),this.C=this.u?co(this.u):co(Si),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){mo(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&e instanceof k.FormData,!(0<=va(Td,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ou(this),0<this.B&&((this.L=Id(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=is(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){mo(this,s)}};function Id(e){return pe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}A.ua=function(){typeof Ki<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function mo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,iu(e),Cr(e)}function iu(e){e.F||(e.F=!0,st(e,"complete"),st(e,"error"))}A.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,st(this,"complete"),st(this,"abort"),Cr(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cr(this,!0)),K.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?su(this):this.kb())};A.kb=function(){su(this)};function su(e){if(e.h&&typeof Ki<"u"&&(!e.C[1]||At(e)!=4||e.da()!=2)){if(e.v&&At(e)==4)is(e.La,0,e);else if(st(e,"readystatechange"),At(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Ka)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!vd.test(i?i.toLowerCase():"")}n=r}if(n)st(e,"complete"),st(e,"success");else{e.m=6;try{var s=2<At(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",iu(e)}}finally{Cr(e)}}}}function Cr(e,t){if(e.g){ou(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||st(e,"ready");try{n.onreadystatechange=r}catch{}}}function ou(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(k.clearTimeout(e.A),e.A=null)}A.isActive=function(){return!!this.g};function At(e){return e.g?e.g.readyState:0}A.da=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ed(t)}};function po(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ru:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function wd(e){const t={};e=(e.g&&2<=At(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(He(e[r]))continue;var n=Wh(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Uh(t,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function au(e){let t="";return Xi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function cs(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=au(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):j(e,t,n))}function De(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function uu(e){this.Ga=0,this.j=[],this.l=new Tr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=De("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=De("baseRetryDelayMs",5e3,e),this.hb=De("retryDelaySeedMs",1e4,e),this.eb=De("forwardChannelMaxRetries",2,e),this.xa=De("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ya(e&&e.concurrentRequestLimit),this.Ja=new gd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=uu.prototype;A.ra=8;A.H=1;function hs(e){if(lu(e),e.H==3){var t=e.W++,n=kt(e.I);if(j(n,"SID",e.K),j(n,"RID",t),j(n,"TYPE","terminate"),yn(e,n),t=new mn(e,e.l,t),t.L=2,t.v=Sr(kt(n)),n=!1,k.navigator&&k.navigator.sendBeacon)try{n=k.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&k.Image&&(new Image().src=t.v,n=!0),n||(t.g=_u(t.l,null),t.g.ha(t.v)),t.G=Date.now(),pn(t)}pu(e)}function Vr(e){e.g&&(fs(e),e.g.cancel(),e.g=null)}function lu(e){Vr(e),e.u&&(k.clearTimeout(e.u),e.u=null),nr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&k.clearTimeout(e.m),e.m=null)}function Dr(e){if(!Ja(e.i)&&!e.m){e.m=!0;var t=e.Na;Ke||ka(),We||(Ke(),We=!0),ns.add(t,e),e.C=0}}function Ad(e,t){return Za(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=dn(ct(e.Na,e,t),mu(e,e.C)),e.C++,!0)}A.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new mn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Aa(s),Ra(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=cu(this,i,t),n=kt(this.I),j(n,"RID",e),j(n,"CVER",22),this.F&&j(n,"X-HTTP-Session-Id",this.F),yn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(au(s)))+"&"+t:this.o&&cs(n,this.o,s)),us(this.i,i),this.bb&&j(n,"TYPE","init"),this.P?(j(n,"$req",t),j(n,"SID","null"),i.aa=!0,Ci(i,n,null)):Ci(i,n,t),this.H=2}}else this.H==3&&(e?go(this,e):this.j.length==0||Ja(this.i)||go(this))};function go(e,t){var n;t?n=t.m:n=e.W++;const r=kt(e.I);j(r,"SID",e.K),j(r,"RID",n),j(r,"AID",e.V),yn(e,r),e.o&&e.s&&cs(r,e.o,e.s),n=new mn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=cu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),us(e.i,n),Ci(n,r,t)}function yn(e,t){e.na&&Xi(e.na,function(n,r){j(t,r,n)}),e.h&&Ga({},function(n,r){j(t,r,n)})}function cu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ct(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{_d(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function hu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ke||ka(),We||(Ke(),We=!0),ns.add(t,e),e.A=0}}function ds(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=dn(ct(e.Ma,e),mu(e,e.A)),e.A++,!0)}A.Ma=function(){if(this.u=null,du(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=dn(ct(this.jb,this),e)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ft(10),Vr(this),du(this))};function fs(e){e.B!=null&&(k.clearTimeout(e.B),e.B=null)}function du(e){e.g=new mn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=kt(e.wa);j(t,"RID","rpc"),j(t,"SID",e.K),j(t,"AID",e.V),j(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&j(t,"TO",e.qa),j(t,"TYPE","xmlhttp"),yn(e,t),e.o&&e.s&&cs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Sr(kt(t)),n.s=null,n.S=!0,$a(n,e)}A.ib=function(){this.v!=null&&(this.v=null,Vr(this),ds(this),ft(19))};function nr(e){e.v!=null&&(k.clearTimeout(e.v),e.v=null)}function fu(e,t){var n=null;if(e.g==t){nr(e),fs(e),e.g=null;var r=2}else if(Di(e.i,t))n=t.F,tu(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Ir(),st(r,new Fa(r,n)),Dr(e)}else hu(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Ad(e,t)||r==2&&ds(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Qt(e,5);break;case 4:Qt(e,10);break;case 3:Qt(e,6);break;default:Qt(e,2)}}}function mu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Qt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ct(e.pb,e);n||(n=new Yt("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||tr(n,"https"),Sr(n)),yd(n.toString(),r)}else ft(2);e.H=0,e.h&&e.h.za(t),pu(e),lu(e)}A.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ft(2)):(this.l.info("Failed to ping google.com"),ft(1))};function pu(e){if(e.H=0,e.ma=[],e.h){const t=eu(e.i);(t.length!=0||e.j.length!=0)&&(so(e.ma,t),so(e.ma,e.j),e.i.i.length=0,Wi(e.j),e.j.length=0),e.h.ya()}}function gu(e,t,n){var r=n instanceof Yt?kt(n):new Yt(n);if(r.g!="")t&&(r.g=t+"."+r.g),er(r,r.m);else{var i=k.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Yt(null);r&&tr(s,r),t&&(s.g=t),i&&er(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&j(r,n,t),j(r,"VER",e.ra),yn(e,r),r}function _u(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new K(new gn({ob:!0})):new K(e.va),t.Oa(e.J),t}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function yu(){}A=yu.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function rr(){if(pe&&!(10<=Number(Lh)))throw Error("Environmental error: no available transport.")}rr.prototype.g=function(e,t){return new _t(e,t)};function _t(e,t){Z.call(this),this.g=new uu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!He(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!He(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Re(this)}tt(_t,Z);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ft(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=gu(e,null,e.Y),Dr(e)};_t.prototype.close=function(){hs(this.g)};_t.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=es(e),e=n);t.j.push(new fd(t.fb++,e)),t.H==3&&Dr(t)};_t.prototype.N=function(){this.g.h=null,delete this.j,hs(this.g),delete this.g,_t.$.N.call(this)};function Eu(e){os.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}tt(Eu,os);function vu(){as.call(this),this.status=1}tt(vu,as);function Re(e){this.g=e}tt(Re,yu);Re.prototype.Ba=function(){st(this.g,"a")};Re.prototype.Aa=function(e){st(this.g,new Eu(e))};Re.prototype.za=function(e){st(this.g,new vu)};Re.prototype.ya=function(){st(this.g,"b")};function Rd(){this.blockSize=-1}function Tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(Tt,Rd);Tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function oi(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Tt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)oi(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){oi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){oi(this,r),i=0;break}}this.h=i,this.i+=t};Tt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function U(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Sd={};function ms(e){return-128<=e&&128>e?xh(e,function(t){return new U([t|0],0>t?-1:0)}):new U([e|0],0>e?-1:0)}function Rt(e){if(isNaN(e)||!isFinite(e))return de;if(0>e)return rt(Rt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=bi;return new U(t,0)}function Tu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return rt(Tu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rt(Math.pow(t,8)),r=de,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Rt(Math.pow(t,s)),r=r.R(s).add(Rt(o))):(r=r.R(n),r=r.add(Rt(o)))}return r}var bi=4294967296,de=ms(0),ki=ms(1),_o=ms(16777216);A=U.prototype;A.ea=function(){if(Et(this))return-rt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:bi+r)*t,t*=bi}return e};A.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Vt(this))return"0";if(Et(this))return"-"+rt(this).toString(e);for(var t=Rt(Math.pow(e,6)),n=this,r="";;){var i=sr(n,t).g;n=ir(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Vt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Vt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Et(e){return e.h==-1}A.X=function(e){return e=ir(this,e),Et(e)?-1:Vt(e)?0:1};function rt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new U(n,~e.h).add(ki)}A.abs=function(){return Et(this)?rt(this):this};A.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new U(n,n[n.length-1]&-2147483648?-1:0)};function ir(e,t){return e.add(rt(t))}A.R=function(e){if(Vt(this)||Vt(e))return de;if(Et(this))return Et(e)?rt(this).R(rt(e)):rt(rt(this).R(e));if(Et(e))return rt(this.R(rt(e)));if(0>this.X(_o)&&0>e.X(_o))return Rt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Fn(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Fn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new U(n,0)};function Fn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function be(e,t){this.g=e,this.h=t}function sr(e,t){if(Vt(t))throw Error("division by zero");if(Vt(e))return new be(de,de);if(Et(e))return t=sr(rt(e),t),new be(rt(t.g),rt(t.h));if(Et(t))return t=sr(e,rt(t)),new be(rt(t.g),t.h);if(30<e.g.length){if(Et(e)||Et(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ki,r=t;0>=r.X(e);)n=yo(n),r=yo(r);var i=oe(n,1),s=oe(r,1);for(r=oe(r,2),n=oe(n,2);!Vt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=oe(r,1),n=oe(n,1)}return t=ir(e,i.R(t)),new be(i,t)}for(i=de;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rt(n),o=s.R(t);Et(o)||0<o.X(e);)n-=r,s=Rt(n),o=s.R(t);Vt(s)&&(s=ki),i=i.add(s),e=ir(e,o)}return new be(i,e)}A.gb=function(e){return sr(this,e).h};A.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new U(n,this.h&e.h)};A.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new U(n,this.h|e.h)};A.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new U(n,this.h^e.h)};function yo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new U(n,e.h)}function oe(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new U(i,e.h)}rr.prototype.createWebChannel=rr.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;wr.NO_ERROR=0;wr.TIMEOUT=8;wr.HTTP_ERROR=6;qa.COMPLETE="complete";Ba.EventType=fn;fn.OPEN="a";fn.CLOSE="b";fn.ERROR="c";fn.MESSAGE="d";Z.prototype.listen=Z.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;Tt.prototype.digest=Tt.prototype.l;Tt.prototype.reset=Tt.prototype.reset;Tt.prototype.update=Tt.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Rt;U.fromString=Tu;var Pd=function(){return new rr},Cd=function(){return Ir()},ai=wr,Vd=qa,Dd=ne,Eo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bd=gn,qn=Ba,kd=K,Nd=Tt,fe=U;const vo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new ma("@firebase/firestore");function ke(){return Zt.logLevel}function P(e,...t){if(Zt.logLevel<=q.DEBUG){const n=t.map(ps);Zt.debug(`Firestore (${Se}): ${e}`,...n)}}function Nt(e,...t){if(Zt.logLevel<=q.ERROR){const n=t.map(ps);Zt.error(`Firestore (${Se}): ${e}`,...n)}}function ge(e,...t){if(Zt.logLevel<=q.WARN){const n=t.map(ps);Zt.warn(`Firestore (${Se}): ${e}`,...n)}}function ps(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e="Unexpected state"){const t=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: `+e;throw Nt(t),new Error(t)}function H(e,t){e||b()}function O(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends we{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Od{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Md{constructor(t){this.t=t,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new Iu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string"),new ut(t)}}class Ld{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fd{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ld(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(H(typeof n.token=="string"),this.R=n.token,new qd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Ud(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function B(e,t){return e<t?-1:e>t?1:0}function _e(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new C(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new C(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Y(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new Y(0,0))}static max(){return new N(new Y(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,n,r){n===void 0?n=0:n>t.length&&b(),r===void 0?r=t.length-n:r>t.length-n&&b(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ze.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ze?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class z extends Ze{construct(t,n,r){return new z(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new C(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new z(n)}static emptyPath(){return new z([])}}const $d=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ze{construct(t,n,r){return new it(t,n,r)}static isValidIdentifier(t){return $d.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new C(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.path=t}static fromPath(t){return new V(z.fromString(t))}static fromName(t){return new V(z.fromString(t).popFirst(5))}static empty(){return new V(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return z.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new V(new z(t.slice()))}}function jd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=N.fromTimestamp(r===1e9?new Y(n+1,0):new Y(n,r));return new Ut(i,V.empty(),t)}function zd(e){return new Ut(e.readTime,e.key,-1)}class Ut{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ut(N.min(),V.empty(),-1)}static max(){return new Ut(N.max(),V.empty(),-1)}}function Hd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=V.comparator(e.documentKey,t.documentKey),n!==0?n:B(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Gd)throw e;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(i=>i?g.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(t[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new g((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function vn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}gs._e=-1;function br(e){return e==null}function or(e){return e===0&&1/e==-1/0}function Wd(e){return typeof e=="number"&&Number.isInteger(e)&&!or(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function re(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Au(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){this.comparator=t,this.root=n||nt.EMPTY}insert(t,n){return new G(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new G(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new nt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,n,r,i,s){return this}insert(t,n,r){return new nt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new G(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Io(this.data.getIterator())}getIteratorFrom(t){return new Io(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ot(this.comparator);return n.data=t,n}}class Io{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new vt([])}unionWith(t){let n=new ot(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new vt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ru("Invalid base64 string: "+s):s}}(t);return new dt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new dt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Qd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(e){if(H(!!e),typeof e=="string"){let t=0;const n=Qd.exec(e);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Q(e.seconds),nanos:Q(e.nanos)}}function Q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function te(e){return typeof e=="string"?dt.fromBase64String(e):dt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ys(e){const t=e.mapValue.fields.__previous_value__;return _s(t)?ys(t):t}function tn(e){const t=$t(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n,r,i,s,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class en{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new en("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof en&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ee(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?_s(e)?4:Yd(e)?9007199254740991:10:b()}function Ct(e,t){if(e===t)return!0;const n=ee(e);if(n!==ee(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tn(e).isEqual(tn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=$t(i.timestampValue),a=$t(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return te(i.bytesValue).isEqual(te(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Q(i.geoPointValue.latitude)===Q(s.geoPointValue.latitude)&&Q(i.geoPointValue.longitude)===Q(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Q(i.integerValue)===Q(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Q(i.doubleValue),a=Q(s.doubleValue);return o===a?or(o)===or(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return _e(e.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(To(o)!==To(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Ct(o[u],a[u])))return!1;return!0}(e,t);default:return b()}}function nn(e,t){return(e.values||[]).find(n=>Ct(n,t))!==void 0}function ye(e,t){if(e===t)return 0;const n=ee(e),r=ee(t);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Q(s.integerValue||s.doubleValue),u=Q(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return wo(e.timestampValue,t.timestampValue);case 4:return wo(tn(e),tn(t));case 5:return B(e.stringValue,t.stringValue);case 6:return function(s,o){const a=te(s),u=te(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=B(a[l],u[l]);if(c!==0)return c}return B(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=B(Q(s.latitude),Q(o.latitude));return a!==0?a:B(Q(s.longitude),Q(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=ye(a[l],u[l]);if(c)return c}return B(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Un.mapValue&&o===Un.mapValue)return 0;if(s===Un.mapValue)return 1;if(o===Un.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){const d=B(u[h],c[h]);if(d!==0)return d;const f=ye(a[u[h]],l[c[h]]);if(f!==0)return f}return B(u.length,c.length)}(e.mapValue,t.mapValue);default:throw b()}}function wo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return B(e,t);const n=$t(e),r=$t(t),i=B(n.seconds,r.seconds);return i!==0?i:B(n.nanos,r.nanos)}function Ee(e){return Ni(e)}function Ni(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=$t(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return te(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return V.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ni(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ni(n.fields[o])}`;return i+"}"}(e.mapValue):b()}function Ao(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function xi(e){return!!e&&"integerValue"in e}function Es(e){return!!e&&"arrayValue"in e}function Ro(e){return!!e&&"nullValue"in e}function So(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zn(e){return!!e&&"mapValue"in e}function qe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return re(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=qe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!zn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=qe(n)}setAll(t){let n=it.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qe(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());zn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];zn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){re(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new pt(qe(this.value))}}function Su(e){const t=[];return re(e.fields,(n,r)=>{const i=new it([n]);if(zn(r)){const s=Su(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new lt(t,0,N.min(),N.min(),N.min(),pt.empty(),0)}static newFoundDocument(t,n,r,i){return new lt(t,1,n,N.min(),r,i,0)}static newNoDocument(t,n){return new lt(t,2,n,N.min(),N.min(),pt.empty(),0)}static newUnknownDocument(t,n){return new lt(t,3,n,N.min(),N.min(),pt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof lt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,n){this.position=t,this.inclusive=n}}function Po(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=ye(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Co(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ct(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,n="asc"){this.field=t,this.dir=n}}function Jd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{}class X extends Pu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new tf(t,n,r):n==="array-contains"?new rf(t,r):n==="in"?new sf(t,r):n==="not-in"?new of(t,r):n==="array-contains-any"?new af(t,r):new X(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new ef(t,r):new nf(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ye(n,this.value)):n!==null&&ee(this.value)===ee(n)&&this.matchesComparison(ye(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends Pu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new It(t,n)}matches(t){return Cu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Cu(e){return e.op==="and"}function Vu(e){return Zd(e)&&Cu(e)}function Zd(e){for(const t of e.filters)if(t instanceof It)return!1;return!0}function Oi(e){if(e instanceof X)return e.field.canonicalString()+e.op.toString()+Ee(e.value);if(Vu(e))return e.filters.map(t=>Oi(t)).join(",");{const t=e.filters.map(n=>Oi(n)).join(",");return`${e.op}(${t})`}}function Du(e,t){return e instanceof X?function(r,i){return i instanceof X&&r.op===i.op&&r.field.isEqual(i.field)&&Ct(r.value,i.value)}(e,t):e instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Du(o,i.filters[a]),!0):!1}(e,t):void b()}function bu(e){return e instanceof X?function(n){return`${n.field.canonicalString()} ${n.op} ${Ee(n.value)}`}(e):e instanceof It?function(n){return n.op.toString()+" {"+n.getFilters().map(bu).join(" ,")+"}"}(e):"Filter"}class tf extends X{constructor(t,n,r){super(t,n,r),this.key=V.fromName(r.referenceValue)}matches(t){const n=V.comparator(t.key,this.key);return this.matchesComparison(n)}}class ef extends X{constructor(t,n){super(t,"in",n),this.keys=ku("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class nf extends X{constructor(t,n){super(t,"not-in",n),this.keys=ku("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ku(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class rf extends X{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Es(n)&&nn(n.arrayValue,this.value)}}class sf extends X{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&nn(this.value.arrayValue,n)}}class of extends X{constructor(t,n){super(t,"not-in",n)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!nn(this.value.arrayValue,n)}}class af extends X{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Es(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Vo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new uf(e,t,n,r,i,s,o)}function vs(e){const t=O(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Oi(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),br(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Ee(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Ee(r)).join(",")),t.ce=n}return t.ce}function Ts(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Jd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Du(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Co(e.startAt,t.startAt)&&Co(e.endAt,t.endAt)}function Mi(e){return V.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function lf(e,t,n,r,i,s,o,a){return new Tn(e,t,n,r,i,s,o,a)}function Nu(e){return new Tn(e)}function Do(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function xu(e){return e.collectionGroup!==null}function Be(e){const t=O(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new ur(s,r))}),n.has(it.keyField().canonicalString())||t.le.push(new ur(it.keyField(),r))}return t.le}function St(e){const t=O(e);return t.he||(t.he=cf(t,Be(e))),t.he}function cf(e,t){if(e.limitType==="F")return Vo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ur(i.field,s)});const n=e.endAt?new ar(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ar(e.startAt.position,e.startAt.inclusive):null;return Vo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Li(e,t){const n=e.filters.concat([t]);return new Tn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Fi(e,t,n){return new Tn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kr(e,t){return Ts(St(e),St(t))&&e.limitType===t.limitType}function Ou(e){return`${vs(St(e))}|lt:${e.limitType}`}function ae(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bu(i)).join(", ")}]`),br(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ee(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ee(i)).join(",")),`Target(${r})`}(St(e))}; limitType=${e.limitType})`}function Nr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Be(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=Po(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,Be(r),i)||r.endAt&&!function(o,a,u){const l=Po(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,Be(r),i))}(e,t)}function hf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Mu(e){return(t,n)=>{let r=!1;for(const i of Be(e)){const s=df(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function df(e,t,n){const r=e.field.isKeyField()?V.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?ye(u,l):b()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){re(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Au(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new G(V.comparator);function xt(){return ff}const Lu=new G(V.comparator);function Oe(...e){let t=Lu;for(const n of e)t=t.insert(n.key,n);return t}function Fu(e){let t=Lu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Xt(){return Ue()}function qu(){return Ue()}function Ue(){return new Pe(e=>e.toString(),(e,t)=>e.isEqual(t))}const mf=new G(V.comparator),pf=new ot(V.comparator);function L(...e){let t=pf;for(const n of e)t=t.add(n);return t}const gf=new ot(B);function _f(){return gf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:or(t)?"-0":t}}function Uu(e){return{integerValue:""+e}}function yf(e,t){return Wd(t)?Uu(t):Bu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this._=void 0}}function Ef(e,t,n){return e instanceof lr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_s(s)&&(s=ys(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof rn?ju(e,t):e instanceof sn?zu(e,t):function(i,s){const o=$u(i,s),a=bo(o)+bo(i.Ie);return xi(o)&&xi(i.Ie)?Uu(a):Bu(i.serializer,a)}(e,t)}function vf(e,t,n){return e instanceof rn?ju(e,t):e instanceof sn?zu(e,t):n}function $u(e,t){return e instanceof cr?function(r){return xi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class lr extends xr{}class rn extends xr{constructor(t){super(),this.elements=t}}function ju(e,t){const n=Hu(t);for(const r of e.elements)n.some(i=>Ct(i,r))||n.push(r);return{arrayValue:{values:n}}}class sn extends xr{constructor(t){super(),this.elements=t}}function zu(e,t){let n=Hu(t);for(const r of e.elements)n=n.filter(i=>!Ct(i,r));return{arrayValue:{values:n}}}class cr extends xr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function bo(e){return Q(e.integerValue||e.doubleValue)}function Hu(e){return Es(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Tf(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof rn&&i instanceof rn||r instanceof sn&&i instanceof sn?_e(r.elements,i.elements,Ct):r instanceof cr&&i instanceof cr?Ct(r.Ie,i.Ie):r instanceof lr&&i instanceof lr}(e.transform,t.transform)}class If{constructor(t,n){this.version=t,this.transformResults=n}}class Dt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Or{}function Gu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Wu(e.key,Dt.none()):new Mr(e.key,e.data,Dt.none());{const n=e.data,r=pt.empty();let i=new ot(it.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ie(e.key,r,new vt(i.toArray()),Dt.none())}}function wf(e,t,n){e instanceof Mr?function(i,s,o){const a=i.value.clone(),u=No(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ie?function(i,s,o){if(!Hn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=No(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ku(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function $e(e,t,n,r){return e instanceof Mr?function(s,o,a,u){if(!Hn(s.precondition,o))return a;const l=s.value.clone(),c=xo(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof ie?function(s,o,a,u){if(!Hn(s.precondition,o))return a;const l=xo(s.fieldTransforms,u,o),c=o.data;return c.setAll(Ku(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Hn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Af(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=$u(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function ko(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_e(r,i,(s,o)=>Tf(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mr extends Or{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ie extends Or{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ku(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function No(e,t,n){const r=new Map;H(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,vf(o,a,n[i]))}return r}function xo(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ef(s,o,t))}return r}class Wu extends Or{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rf extends Or{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&wf(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=$e(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=$e(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=qu();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Gu(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(N.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),L())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,(n,r)=>ko(n,r))&&_e(this.baseMutations,t.baseMutations,(n,r)=>ko(n,r))}}class Is{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){H(t.mutations.length===r.length);let i=function(){return mf}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Is(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,F;function Vf(e){switch(e){default:return b();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Qu(e){if(e===void 0)return Nt("GRPC error has no .code"),p.UNKNOWN;switch(e){case W.OK:return p.OK;case W.CANCELLED:return p.CANCELLED;case W.UNKNOWN:return p.UNKNOWN;case W.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case W.INTERNAL:return p.INTERNAL;case W.UNAVAILABLE:return p.UNAVAILABLE;case W.UNAUTHENTICATED:return p.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case W.NOT_FOUND:return p.NOT_FOUND;case W.ALREADY_EXISTS:return p.ALREADY_EXISTS;case W.PERMISSION_DENIED:return p.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case W.ABORTED:return p.ABORTED;case W.OUT_OF_RANGE:return p.OUT_OF_RANGE;case W.UNIMPLEMENTED:return p.UNIMPLEMENTED;case W.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(F=W||(W={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new fe([4294967295,4294967295],0);function Oo(e){const t=Df().encode(e),n=new Nd;return n.update(t),new Uint8Array(n.digest())}function Mo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new fe([n,r],0),new fe([i,s],0)]}class ws{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Me(`Invalid padding: ${n}`);if(r<0)throw new Me(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Me(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Me(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=fe.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(fe.fromNumber(r)));return i.compare(bf)===1&&(i=new fe([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Oo(t),[r,i]=Mo(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ws(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Oo(t),[r,i]=Mo(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Me extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Lr(N.min(),i,new G(B),xt(),L())}}class In{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new In(r,n,L(),L(),L())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class Xu{constructor(t,n){this.targetId=t,this.fe=n}}class Yu{constructor(t,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Lo{constructor(){this.ge=0,this.pe=qo(),this.ye=dt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=L(),n=L(),r=L();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new In(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=qo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class kf{constructor(t){this.Le=t,this.ke=new Map,this.qe=xt(),this.Qe=Fo(),this.Ke=new G(B)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:b()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Mi(s))if(r===0){const o=new V(s.path);this.We(n,o,lt.newNoDocument(o,N.min()))}else H(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=te(r).toUint8Array()}catch(u){if(u instanceof Ru)return ge("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ws(o,i,s)}catch(u){return ge(u instanceof Me?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Mi(a.target)){const u=new V(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,lt.newNoDocument(u,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=L();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ye(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new Lr(t,n,this.Ke,this.qe,r);return this.qe=xt(),this.Qe=Fo(),this.Ke=new G(B),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Lo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new ot(B),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||P("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Lo),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Fo(){return new G(V.comparator)}function qo(){return new G(V.comparator)}const Nf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Of=(()=>({and:"AND",or:"OR"}))();class Mf{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function qi(e,t){return e.useProto3Json||br(t)?t:{value:t}}function hr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ju(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Lf(e,t){return hr(e,t.toTimestamp())}function Pt(e){return H(!!e),N.fromTimestamp(function(n){const r=$t(n);return new Y(r.seconds,r.nanos)}(e))}function As(e,t){return function(r){return new z(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Zu(e){const t=z.fromString(e);return H(rl(t)),t}function Bi(e,t){return As(e.databaseId,t.path)}function ui(e,t){const n=Zu(t);if(n.get(1)!==e.databaseId.projectId)throw new C(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new C(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new V(tl(n))}function Ui(e,t){return As(e.databaseId,t)}function Ff(e){const t=Zu(e);return t.length===4?z.emptyPath():tl(t)}function $i(e){return new z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tl(e){return H(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Bo(e,t,n){return{name:Bi(e,t),fields:n.value.mapValue.fields}}function qf(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(H(c===void 0||typeof c=="string"),dt.fromBase64String(c||"")):(H(c===void 0||c instanceof Uint8Array),dt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?p.UNKNOWN:Qu(l.code);return new C(c,l.message||"")}(o);n=new Yu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ui(e,r.document.name),s=Pt(r.document.updateTime),o=r.document.createTime?Pt(r.document.createTime):N.min(),a=new pt({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Gn(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ui(e,r.document),s=r.readTime?Pt(r.readTime):N.min(),o=lt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Gn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ui(e,r.document),s=r.removedTargetIds||[];n=new Gn([],s,i,null)}else{if(!("filter"in t))return b();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Cf(i,s),a=r.targetId;n=new Xu(a,o)}}return n}function Bf(e,t){let n;if(t instanceof Mr)n={update:Bo(e,t.key,t.value)};else if(t instanceof Wu)n={delete:Bi(e,t.key)};else if(t instanceof ie)n={update:Bo(e,t.key,t.data),updateMask:Qf(t.fieldMask)};else{if(!(t instanceof Rf))return b();n={verify:Bi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof lr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof rn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof cr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw b()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Lf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(e,t.precondition)),n}function Uf(e,t){return e&&e.length>0?(H(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Pt(i.updateTime):Pt(s);return o.isEqual(N.min())&&(o=Pt(s)),new If(o,i.transformResults||[])}(n,t))):[]}function $f(e,t){return{documents:[Ui(e,t.path)]}}function jf(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ui(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ui(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return nl(It.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:ue(h.field),direction:Gf(h.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qi(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function zf(e){let t=Ff(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=el(h);return d instanceof It&&Vu(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(S){return new ur(le(S.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,br(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(h){const d=!!h.before,f=h.values||[];return new ar(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ar(f,d)}(n.endAt)),lf(t,i,o,s,a,"F",u,l)}function Hf(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function el(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=le(n.unaryFilter.field);return X.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=le(n.unaryFilter.field);return X.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=le(n.unaryFilter.field);return X.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=le(n.unaryFilter.field);return X.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(e):e.fieldFilter!==void 0?function(n){return X.create(le(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return It.create(n.compositeFilter.filters.map(r=>el(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(e):b()}function Gf(e){return Nf[e]}function Kf(e){return xf[e]}function Wf(e){return Of[e]}function ue(e){return{fieldPath:e.canonicalString()}}function le(e){return it.fromServerFormat(e.fieldPath)}function nl(e){return e instanceof X?function(n){if(n.op==="=="){if(So(n.value))return{unaryFilter:{field:ue(n.field),op:"IS_NAN"}};if(Ro(n.value))return{unaryFilter:{field:ue(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(So(n.value))return{unaryFilter:{field:ue(n.field),op:"IS_NOT_NAN"}};if(Ro(n.value))return{unaryFilter:{field:ue(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ue(n.field),op:Kf(n.op),value:n.value}}}(e):e instanceof It?function(n){const r=n.getFilters().map(i=>nl(i));return r.length===1?r[0]:{compositeFilter:{op:Wf(n.op),filters:r}}}(e):b()}function Qf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,n,r,i,s=N.min(),o=N.min(),a=dt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Mt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t){this.ut=t}}function Yf(e){const t=zf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Fi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.on=new Zf}addToCollectionParentIndex(t,n){return this.on.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Ut.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Zf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ot(z.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot(z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new ve(0)}static Nn(){return new ve(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.changes=new Pe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,lt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&$e(r.mutation,i,vt.empty(),Y.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,L()).next(()=>r))}getLocalViewOfDocuments(t,n,r=L()){const i=Xt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Oe();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Xt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,L()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=xt();const o=Ue(),a=function(){return Ue()}();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof ie)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),$e(c.mutation,l,c.mutation.getFieldMask(),Y.now())):o.set(l.key,vt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new em(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ue();let i=new G((o,a)=>o-a),s=L();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||vt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||L()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=qu();c.forEach(d=>{if(!s.has(d)){const f=Gu(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):xu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):g.resolve(Xt());let a=-1,u=s;return o.next(l=>g.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?g.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,u,l,L())).next(c=>({batchId:a,changes:Fu(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new V(n)).next(r=>{let i=Oe();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Oe();return this.indexManager.getCollectionParents(t,s).next(a=>g.forEach(a,u=>{const l=function(h,d){return new Tn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,l)=>{const c=l.getKey();o.get(c)===null&&(o=o.insert(c,lt.newInvalidDocument(c)))});let a=Oe();return o.forEach((u,l)=>{const c=s.get(u);c!==void 0&&$e(c.mutation,l,vt.empty(),Y.now()),Nr(n,l)&&(a=a.insert(u,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return g.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pt(i.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Yf(i.bundledQuery),readTime:Pt(i.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.overlays=new G(V.comparator),this.lr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Xt();return g.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const i=Xt(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new G((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Xt(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Xt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return g.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pf(n,r));let s=this.lr.get(n);s===void 0&&(s=L(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.hr=new ot(J.Pr),this.Ir=new ot(J.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new J(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new J(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new V(new z([])),r=new J(n,t),i=new J(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new V(new z([])),r=new J(n,t),i=new J(n,t+1);let s=L();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new J(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class J{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return V.comparator(t.key,n.key)||B(t.gr,n.gr)}static Tr(t,n){return B(t.gr,n.gr)||V.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ot(J.Pr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sf(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new J(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new J(n,0),i=new J(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ot(B);return n.forEach(i=>{const s=new J(i,0),o=new J(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),g.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new J(new V(s),0);let a=new ot(B);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gr)),!0)},o),g.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){H(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return g.forEach(n.mutations,i=>{const s=new J(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new J(n,0),i=this.yr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t){this.Cr=t,this.docs=function(){return new G(V.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(t,n){let r=xt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=xt();const o=n.path,a=new V(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Hd(zd(c),r)<=0||(i.has(c.key)||Nr(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,i){b()}vr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new am(this)}getSize(t){return g.resolve(this.size)}}class am extends tm{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t){this.persistence=t,this.Fr=new Pe(n=>vs(n),Ts),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Rs,this.targetCount=0,this.Nr=ve.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),g.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new ve(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.kn(n),g.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.Br={},this.overlays={},this.Lr=new gs(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new um(this),this.indexManager=new Jf,this.remoteDocumentCache=function(i){return new om(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Xf(n),this.Kr=new rm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new im,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new sm(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){P("MemoryPersistence","Starting transaction:",t);const i=new cm(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return g.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class cm extends Kd{constructor(t){super(),this.currentSequenceNumber=t}}class Ss{constructor(t){this.persistence=t,this.Gr=new Rs,this.zr=null}static jr(t){return new Ss(t)}get Hr(){if(this.zr)return this.zr;throw b()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),g.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,r=>{const i=V.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,N.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return g.or([()=>g.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=L(),i=L();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ps(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new hm;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(ke()<=q.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",ae(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(ke()<=q.DEBUG&&P("QueryEngine","Query:",ae(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(ke()<=q.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",ae(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(n))):g.resolve())}zi(t,n){if(Do(n))return g.resolve(null);let r=St(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fi(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=L(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.Yi(n,a);return this.Zi(n,l,o,u.readTime)?this.zi(t,Fi(n,null,"F")):this.Xi(t,l,n,u)}))})))}ji(t,n,r,i){return Do(n)||i.isEqual(N.min())?g.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?g.resolve(null):(ke()<=q.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ae(n)),this.Xi(t,o,n,jd(i,-1)).next(a=>a))})}Yi(t,n){let r=new ot(Mu(t));return n.forEach((i,s)=>{Nr(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return ke()<=q.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",ae(n)),this.Gi.getDocumentsMatchingQuery(t,n,Ut.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new G(B),this.ns=new Pe(s=>vs(s),Ts),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nm(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function mm(e,t,n,r){return new fm(e,t,n,r)}async function il(e,t){const n=O(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=L();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function pm(e,t){const n=O(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const h=l.batch,d=h.keys();let f=g.resolve();return d.forEach(S=>{f=f.next(()=>c.getEntry(u,S)).next(w=>{const _=l.docVersions.get(S);H(_!==null),w.version.compareTo(_)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),c.addEntry(w)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=L();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function sl(e){const t=O(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function gm(e,t){const n=O(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(dt.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(w,_,M){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(d,f,c)&&a.push(n.qr.updateTargetData(s,f))});let u=xt(),l=L();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(_m(s,o,t.documentUpdates).next(c=>{u=c.us,l=c.cs})),!r.isEqual(N.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.ts=i,s))}function _m(e,t,n){let r=L(),i=L();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=xt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(N.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{us:o,cs:i}})}function ym(e,t){const n=O(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Em(e,t){const n=O(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Mt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function ji(e,t,n){const r=O(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vn(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Uo(e,t,n){const r=O(e);let i=N.min(),s=L();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,c){const h=O(u),d=h.ns.get(c);return d!==void 0?g.resolve(h.ts.get(d)):h.qr.getTargetData(l,c)}(r,o,St(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:N.min(),n?s:L())).next(a=>(vm(r,hf(t),a),{documents:a,ls:s})))}function vm(e,t,n){let r=e.rs.get(t)||N.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class $o{constructor(){this.activeTargetIds=_f()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tm{constructor(){this.eo=new $o,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new $o,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n=null;function li(){return $n===null?$n=function(){return 268435456+Math.round(2147483648*Math.random())}():$n++,"0x"+$n.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class Rm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=li(),u=this.So(n,r);P("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,s,o),this.Do(n,u,l,i).then(c=>(P("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ge("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Se}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=wm[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=li();return new Promise((o,a)=>{const u=new kd;u.setWithCredentials(!0),u.listenOnce(Vd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ai.NO_ERROR:const c=u.getResponseJson();P(at,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case ai.TIMEOUT:P(at,`RPC '${t}' ${s} timed out`),a(new C(p.DEADLINE_EXCEEDED,"Request time out"));break;case ai.HTTP_ERROR:const h=u.getStatus();if(P(at,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const S=function(_){const M=_.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(M)>=0?M:p.UNKNOWN}(f.status);a(new C(S,f.message))}else a(new C(p.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new C(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{P(at,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);P(at,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}vo(t,n,r){const i=li(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Pd(),a=Cd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new bd({})),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");P(at,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let d=!1,f=!1;const S=new Am({co:_=>{f?P(at,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(d||(P(at,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),P(at,`RPC '${t}' stream ${i} sending:`,_),h.send(_))},lo:()=>h.close()}),w=(_,M,m)=>{_.listen(M,I=>{try{m(I)}catch(R){setTimeout(()=>{throw R},0)}})};return w(h,qn.EventType.OPEN,()=>{f||P(at,`RPC '${t}' stream ${i} transport opened.`)}),w(h,qn.EventType.CLOSE,()=>{f||(f=!0,P(at,`RPC '${t}' stream ${i} transport closed`),S.Ro())}),w(h,qn.EventType.ERROR,_=>{f||(f=!0,ge(at,`RPC '${t}' stream ${i} transport errored:`,_),S.Ro(new C(p.UNAVAILABLE,"The operation could not be completed")))}),w(h,qn.EventType.MESSAGE,_=>{var M;if(!f){const m=_.data[0];H(!!m);const I=m,R=I.error||((M=I[0])===null||M===void 0?void 0:M.error);if(R){P(at,`RPC '${t}' stream ${i} received error:`,R);const D=R.status;let x=function(et){const yt=W[et];if(yt!==void 0)return Qu(yt)}(D),$=R.message;x===void 0&&(x=p.INTERNAL,$="Unknown error status: "+D+" with message "+R.message),f=!0,S.Ro(new C(x,$)),h.close()}else P(at,`RPC '${t}' stream ${i} received:`,m),S.Vo(m)}}),w(a,Dd.STAT_EVENT,_=>{_.stat===Eo.PROXY?P(at,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===Eo.NOPROXY&&P(at,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.Ao()},0),S}}function ci(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){return new Mf(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ol(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new C(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return P("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sm extends al{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=qf(this.serializer,t),r=function(s){if(!("targetChange"in s))return N.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?N.min():o.readTime?Pt(o.readTime):N.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=$i(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Mi(u)?{documents:$f(s,u)}:{query:jf(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ju(s,o.resumeToken);const l=qi(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(N.min())>0){a.readTime=hr(s,o.snapshotVersion.toTimestamp());const l=qi(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=Hf(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=$i(this.serializer),n.removeTarget=t,this.e_(n)}}class Pm extends al{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(H(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=Uf(t.writeResults,t.commitTime),r=Pt(t.commitTime);return this.listener.I_(r,n)}return H(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=$i(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Bf(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new C(p.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(p.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(p.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class Vm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Nt(n),this.f_=!1):P("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{se(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=O(u);l.C_.add(4),await wn(l),l.M_.set("Unknown"),l.C_.delete(4),await qr(l)}(this))})}),this.M_=new Vm(r,i)}}async function qr(e){if(se(e))for(const t of e.v_)await t(!0)}async function wn(e){for(const t of e.v_)await t(!1)}function ul(e,t){const n=O(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Ds(n)?Vs(n):Ce(n).Ho()&&Cs(n,t))}function ll(e,t){const n=O(e),r=Ce(n);n.D_.delete(t),r.Ho()&&cl(n,t),n.D_.size===0&&(r.Ho()?r.Zo():se(n)&&n.M_.set("Unknown"))}function Cs(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(N.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ce(e).u_(t)}function cl(e,t){e.x_.Oe(t),Ce(e).c_(t)}function Vs(e){e.x_=new kf({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ce(e).start(),e.M_.g_()}function Ds(e){return se(e)&&!Ce(e).jo()&&e.D_.size>0}function se(e){return O(e).C_.size===0}function hl(e){e.x_=void 0}async function bm(e){e.D_.forEach((t,n)=>{Cs(e,t)})}async function km(e,t){hl(e),Ds(e)?(e.M_.w_(t),Vs(e)):e.M_.set("Unknown")}async function Nm(e,t,n){if(e.M_.set("Online"),t instanceof Yu&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dr(e,r)}else if(t instanceof Gn?e.x_.$e(t):t instanceof Xu?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(N.min()))try{const r=await sl(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.D_.get(l);c&&s.D_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=s.D_.get(u);if(!c)return;s.D_.set(u,c.withResumeToken(dt.EMPTY_BYTE_STRING,c.snapshotVersion)),cl(s,u);const h=new Mt(c.target,u,l,c.sequenceNumber);Cs(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await dr(e,r)}}async function dr(e,t,n){if(!vn(t))throw t;e.C_.add(1),await wn(e),e.M_.set("Offline"),n||(n=()=>sl(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await qr(e)})}function dl(e,t){return t().catch(n=>dr(e,n,t))}async function Br(e){const t=O(e),n=jt(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;xm(t);)try{const i=await ym(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,Om(t,i)}catch(i){await dr(t,i)}fl(t)&&ml(t)}function xm(e){return se(e)&&e.b_.length<10}function Om(e,t){e.b_.push(t);const n=jt(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function fl(e){return se(e)&&!jt(e).jo()&&e.b_.length>0}function ml(e){jt(e).start()}async function Mm(e){jt(e).E_()}async function Lm(e){const t=jt(e);for(const n of e.b_)t.P_(n.mutations)}async function Fm(e,t,n){const r=e.b_.shift(),i=Is.from(r,t,n);await dl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Br(e)}async function qm(e,t){t&&jt(e).h_&&await async function(r,i){if(function(o){return Vf(o)&&o!==p.ABORTED}(i.code)){const s=r.b_.shift();jt(r).Yo(),await dl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Br(r)}}(e,t),fl(e)&&ml(e)}async function zo(e,t){const n=O(e);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=se(n);n.C_.add(3),await wn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await qr(n)}async function Bm(e,t){const n=O(e);t?(n.C_.delete(2),await qr(n)):t||(n.C_.add(2),await wn(n),n.M_.set("Unknown"))}function Ce(e){return e.O_||(e.O_=function(n,r,i){const s=O(n);return s.A_(),new Sm(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:bm.bind(null,e),Io:km.bind(null,e),a_:Nm.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),Ds(e)?Vs(e):e.M_.set("Unknown")):(await e.O_.stop(),hl(e))})),e.O_}function jt(e){return e.N_||(e.N_=function(n,r,i){const s=O(n);return s.A_(),new Pm(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:Mm.bind(null,e),Io:qm.bind(null,e),T_:Lm.bind(null,e),I_:Fm.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Br(e)):(await e.N_.stop(),e.b_.length>0&&(P("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new bs(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ks(e,t){if(Nt("AsyncQueue",`${t}: ${e}`),vn(e))return new C(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.comparator=t?(n,r)=>t(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Oe(),this.sortedSet=new G(this.comparator)}static emptySet(t){return new me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof me)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new me;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.B_=new G(V.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):b():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Te{constructor(t,n,r,i,s,o,a,u,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Te(t,n,me.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.k_=void 0,this.listeners=[]}}class $m{constructor(){this.queries=new Pe(t=>Ou(t),kr),this.onlineState="Unknown",this.q_=new Set}}async function jm(e,t){const n=O(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Um),i)try{s.k_=await n.onListen(r)}catch(o){const a=ks(o,`Initialization of query '${ae(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&Ns(n)}async function zm(e,t){const n=O(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Hm(e,t){const n=O(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Ns(n)}function Gm(e,t,n){const r=O(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Ns(e){e.q_.forEach(t=>{t.next()})}class Km{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Te(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=Te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.key=t}}class gl{constructor(t){this.key=t}}class Wm{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=L(),this.mutatedKeys=L(),this._a=Mu(t),this.aa=new me(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new Ho,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),f=Nr(this.query,h)?h:null,S=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?S!==w&&(r.track({type:3,doc:f}),_=!0):this.ha(d,f)||(r.track({type:2,doc:f}),_=!0,(u&&this._a(f,u)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(u||l)&&(a=!0)),_&&(f?(o=o.add(f),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((l,c)=>function(d,f){const S=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return S(d)-S(f)}(l.type,c.type)||this._a(l.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new Te(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ho,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=L(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new gl(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new pl(r))}),n}da(t){this.ia=t.ls,this.oa=L();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return Te.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Qm{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Xm{constructor(t){this.key=t,this.Ra=!1}}class Ym{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Pe(a=>Ou(a),kr),this.fa=new Map,this.ga=new Set,this.pa=new G(V.comparator),this.ya=new Map,this.wa=new Rs,this.Sa={},this.ba=new Map,this.Da=ve.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Jm(e,t){const n=up(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await Em(n.localStore,St(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Zm(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&ul(n.remoteStore,o)}return i}async function Zm(e,t,n,r,i){e.va=(h,d,f)=>async function(w,_,M,m){let I=_.view.ca(M);I.Zi&&(I=await Uo(w.localStore,_.query,!1).then(({documents:x})=>_.view.ca(x,I)));const R=m&&m.targetChanges.get(_.targetId),D=_.view.applyChanges(I,w.isPrimaryClient,R);return Ko(w,_.targetId,D.Ta),D.snapshot}(e,h,d,f);const s=await Uo(e.localStore,t,!0),o=new Wm(t,s.ls),a=o.ca(s.documents),u=In.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,u);Ko(e,n,l.Ta);const c=new Qm(t,n,o);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),l.snapshot}async function tp(e,t){const n=O(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!kr(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ji(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ll(n.remoteStore,r.targetId),zi(n,r.targetId)}).catch(En)):(zi(n,r.targetId),await ji(n.localStore,r.targetId,!0))}async function ep(e,t,n){const r=lp(e);try{const i=await function(o,a){const u=O(o),l=Y.now(),c=a.reduce((f,S)=>f.add(S.key),L());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",f=>{let S=xt(),w=L();return u.ss.getEntries(f,c).next(_=>{S=_,S.forEach((M,m)=>{m.isValidDocument()||(w=w.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(f,S)).next(_=>{h=_;const M=[];for(const m of a){const I=Af(m,h.get(m.key).overlayedDocument);I!=null&&M.push(new ie(m.key,I,Su(I.value.mapValue),Dt.exists(!0)))}return u.mutationQueue.addMutationBatch(f,l,M,a)}).next(_=>{d=_;const M=_.applyToLocalDocumentSet(h,w);return u.documentOverlayCache.saveOverlays(f,_.batchId,M)})}).then(()=>({batchId:d.batchId,changes:Fu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.Sa[o.currentUser.toKey()];l||(l=new G(B)),l=l.insert(a,u),o.Sa[o.currentUser.toKey()]=l}(r,i.batchId,n),await An(r,i.changes),await Br(r.remoteStore)}catch(i){const s=ks(i,"Failed to persist write");n.reject(s)}}async function _l(e,t){const n=O(e);try{const r=await gm(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?H(o.Ra):i.removedDocuments.size>0&&(H(o.Ra),o.Ra=!1))}),await An(n,r,t)}catch(r){await En(r)}}function Go(e,t,n){const r=O(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=O(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Ns(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function np(e,t,n){const r=O(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new G(V.comparator);o=o.insert(s,lt.newNoDocument(s,N.min()));const a=L().add(s),u=new Lr(N.min(),new Map,new G(B),o,a);await _l(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),xs(r)}else await ji(r.localStore,t,!1).then(()=>zi(r,t,n)).catch(En)}async function rp(e,t){const n=O(e),r=t.batch.batchId;try{const i=await pm(n.localStore,t);El(n,r,null),yl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await An(n,i)}catch(i){await En(i)}}async function ip(e,t,n){const r=O(e);try{const i=await function(o,a){const u=O(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(H(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,t);El(r,t,n),yl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await An(r,i)}catch(i){await En(i)}}function yl(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function El(e,t,n){const r=O(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function zi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||vl(e,r)})}function vl(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(ll(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),xs(e))}function Ko(e,t,n){for(const r of n)r instanceof pl?(e.wa.addReference(r.key,t),sp(e,r)):r instanceof gl?(P("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||vl(e,r.key)):b()}function sp(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(P("SyncEngine","New document in limbo: "+n),e.ga.add(r),xs(e))}function xs(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new V(z.fromString(t)),r=e.Da.next();e.ya.set(r,new Xm(n)),e.pa=e.pa.insert(n,r),ul(e.remoteStore,new Mt(St(Nu(n.path)),r,"TargetPurposeLimboResolution",gs._e))}}async function An(e,t,n){const r=O(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Ps.Qi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,l){const c=O(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(l,d=>g.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!vn(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),S=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(S);c.ts=c.ts.insert(d,w)}}}(r.localStore,s))}async function op(e,t){const n=O(e);if(!n.currentUser.isEqual(t)){P("SyncEngine","User change. New user:",t.toKey());const r=await il(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new C(p.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await An(n,r._s)}}function ap(e,t){const n=O(e),r=n.ya.get(t);if(r&&r.Ra)return L().add(r.key);{let i=L();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function up(e){const t=O(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=_l.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ap.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=np.bind(null,t),t.Va.a_=Hm.bind(null,t.eventManager),t.Va.Fa=Gm.bind(null,t.eventManager),t}function lp(e){const t=O(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ip.bind(null,t),t}class Wo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return mm(this.persistence,new dm,t.initialUser,this.serializer)}createPersistence(t){return new lm(Ss.jr,this.serializer)}createSharedClientState(t){return new Tm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Go(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=op.bind(null,this.syncEngine),await Bm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $m}()}createDatastore(t){const n=Fr(t.databaseInfo.databaseId),r=function(s){return new Rm(s)}(t.databaseInfo);return function(s,o,a,u){return new Cm(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Dm(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Go(this.syncEngine,n,0),function(){return jo.D()?new jo:new Im}())}createSyncEngine(t,n){return function(i,s,o,a,u,l,c){const h=new Ym(i,s,o,a,u,l);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=O(n);P("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await wn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Nt("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ks(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function hi(e,t){e.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await il(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Qo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await mp(e);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>zo(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>zo(t.remoteStore,s)),e._onlineComponents=t}function fp(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function mp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await hi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!fp(n))throw n;ge("Error using user provided cache. Falling back to memory cache: "+n),await hi(e,new Wo)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await hi(e,new Wo);return e._offlineComponents}async function Tl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Qo(e,e._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Qo(e,new cp))),e._onlineComponents}function pp(e){return Tl(e).then(t=>t.syncEngine)}async function gp(e){const t=await Tl(e),n=t.eventManager;return n.onListen=Jm.bind(null,t.syncEngine),n.onUnlisten=tp.bind(null,t.syncEngine),n}function _p(e,t,n={}){const r=new qt;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new hp({next:d=>{o.enqueueAndForget(()=>zm(s,h)),d.fromCache&&u.source==="server"?l.reject(new C(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Km(a,c,{includeMetadataChanges:!0,J_:!0});return jm(s,h)}(await gp(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e,t,n){if(!n)throw new C(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yp(e,t,n,r){if(t===!0&&r===!0)throw new C(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Yo(e){if(!V.isDocumentKey(e))throw new C(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Jo(e){if(V.isDocumentKey(e))throw new C(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ur(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function on(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ur(e);throw new C(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new C(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new C(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Il((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $r{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new C(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xd;switch(r.type){case"firstParty":return new Fd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new C(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xo.get(n);r&&(P("ComponentProvider","Removing Datastore"),Xo.delete(n),r.terminate())}(this),Promise.resolve()}}function Ep(e,t,n,r={}){var i;const s=(e=on(e,$r))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ut.MOCK_USER;else{a=hc(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new C(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(l)}e._authCredentials=new Od(new Iu(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ve(this.firestore,t,this._query)}}class gt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}}class Bt extends Ve{constructor(t,n,r){super(t,n,Nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new V(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function vp(e,t,...n){if(e=bt(e),wl("collection","path",t),e instanceof $r){const r=z.fromString(t,...n);return Jo(r),new Bt(e,null,r)}{if(!(e instanceof gt||e instanceof Bt))throw new C(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return Jo(r),new Bt(e.firestore,null,r)}}function Tp(e,t,...n){if(e=bt(e),arguments.length===1&&(t=wu.newId()),wl("doc","path",t),e instanceof $r){const r=z.fromString(t,...n);return Yo(r),new gt(e,null,new V(r))}{if(!(e instanceof gt||e instanceof Bt))throw new C(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return Yo(r),new gt(e.firestore,e instanceof Bt?e.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ol(this,"async_queue_retry"),this.iu=()=>{const n=ci();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=ci();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new qt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!vn(t))throw t;P("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=bs.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&b()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class Os extends $r{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Ip}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rl(this),this._firestoreClient.terminate()}}function wp(e,t){const n=typeof e=="object"?e:ph(),r=typeof e=="string"?e:t||"(default)",i=hh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lc("firestore");s&&Ep(i,...s)}return i}function Al(e){return e._firestoreClient||Rl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Rl(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,l,c){return new Xd(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Il(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new dp(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ie(dt.fromBase64String(t))}catch(n){throw new C(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ie(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new C(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new C(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new C(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=/^__.*__$/;class Sl{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ie(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Fs{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Fs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return fr(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Pl(this.Iu)&&Ap.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Rp{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Fr(t)}pu(t,n,r,i=!1){return new Fs({Iu:t,methodName:n,gu:r,path:it.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cl(e){const t=e._freezeSettings(),n=Fr(e._databaseId);return new Rp(e._databaseId,!!t.ignoreUndefinedProperties,n)}class zr extends Ms{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zr}}function Sp(e,t,n,r){const i=e.pu(1,t,n);Dl("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();re(r,(u,l)=>{const c=qs(t,u,n);l=bt(l);const h=i.Ru(c);if(l instanceof zr)s.push(c);else{const d=Rn(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new vt(s);return new Sl(o,a,i.fieldTransforms)}function Pp(e,t,n,r,i,s){const o=e.pu(1,t,n),a=[ta(t,r,n)],u=[i];if(s.length%2!=0)throw new C(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ta(t,s[d])),u.push(s[d+1]);const l=[],c=pt.empty();for(let d=a.length-1;d>=0;--d)if(!bp(l,a[d])){const f=a[d];let S=u[d];S=bt(S);const w=o.Ru(f);if(S instanceof zr)l.push(f);else{const _=Rn(S,w);_!=null&&(l.push(f),c.set(f,_))}}const h=new vt(l);return new Sl(c,h,o.fieldTransforms)}function Cp(e,t,n,r=!1){return Rn(n,e.pu(r?4:3,t))}function Rn(e,t){if(Vl(e=bt(e)))return Dl("Unsupported field value:",t,e),Vp(e,t);if(e instanceof Ms)return function(r,i){if(!Pl(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Rn(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Y.fromDate(r);return{timestampValue:hr(i.serializer,s)}}if(r instanceof Y){const s=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hr(i.serializer,s)}}if(r instanceof Ls)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ie)return{bytesValue:Ju(i.serializer,r._byteString)};if(r instanceof gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:As(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Ur(r)}`)}(e,t)}function Vp(e,t){const n={};return Au(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):re(e,(r,i)=>{const s=Rn(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Vl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof Ls||e instanceof Ie||e instanceof gt||e instanceof Ms)}function Dl(e,t,n){if(!Vl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ur(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function ta(e,t,n){if((t=bt(t))instanceof jr)return t._internalPath;if(typeof t=="string")return qs(e,t);throw fr("Field path arguments must be of type string or ",e,!1,void 0,n)}const Dp=new RegExp("[~\\*/\\[\\]]");function qs(e,t,n){if(t.search(Dp)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new jr(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function fr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(p.INVALID_ARGUMENT,a+e+u)}function bp(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Bs("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kp extends bl{data(){return super.data()}}function Bs(e,t){return typeof t=="string"?qs(e,t):t instanceof jr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new C(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Us{}class xp extends Us{}function Op(e,t,...n){let r=[];t instanceof Us&&r.push(t),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof $s).length,a=s.filter(u=>u instanceof Hr).length;if(o>1||o>0&&a>0)throw new C(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Hr extends xp{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Hr(t,n,r)}_apply(t){const n=this._parse(t);return kl(t._query,n),new Ve(t.firestore,t.converter,Li(t._query,n))}_parse(t){const n=Cl(t.firestore);return function(s,o,a,u,l,c,h){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new C(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){na(h,c);const f=[];for(const S of h)f.push(ea(u,s,S));d={arrayValue:{values:f}}}else d=ea(u,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||na(h,c),d=Cp(a,o,h,c==="in"||c==="not-in");return X.create(l,c,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Mp(e,t,n){const r=t,i=Bs("where",e);return Hr._create(i,r,n)}class $s extends Us{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new $s(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:It.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)kl(o,u),o=Li(o,u)}(t._query,n),new Ve(t.firestore,t.converter,Li(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ea(e,t,n){if(typeof(n=bt(n))=="string"){if(n==="")throw new C(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xu(t)&&n.indexOf("/")!==-1)throw new C(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(z.fromString(n));if(!V.isDocumentKey(r))throw new C(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ao(e,new V(r))}if(n instanceof gt)return Ao(e,n._key);throw new C(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ur(n)}.`)}function na(e,t){if(!Array.isArray(e)||e.length===0)throw new C(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function kl(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new C(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Lp{convertValue(t,n="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw b()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return re(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Ls(Q(t.latitude),Q(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ys(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tn(t));default:return null}}convertTimestamp(t){const n=$t(t);return new Y(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=z.fromString(t);H(rl(r));const i=new en(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Nt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fp extends bl{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Bs("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Kn extends Fp{data(t={}){return super.data(t)}}class qp{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new jn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Kn(this._firestore,this._userDataWriter,r.key,r,new jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Kn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Kn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Bp(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Bp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class Up extends Lp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ie(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function $p(e){e=on(e,Ve);const t=on(e.firestore,Os),n=Al(t),r=new Up(t);return Np(e._query),_p(n,e._query).then(i=>new qp(t,r,e,i))}function jp(e,t,n,...r){e=on(e,gt);const i=on(e.firestore,Os),s=Cl(i);let o;return o=typeof(t=bt(t))=="string"||t instanceof jr?Pp(s,"updateDoc",e._key,t,n,r):Sp(s,"updateDoc",e._key,t),zp(i,[o.toMutation(e._key,Dt.exists(!0))])}function zp(e,t){return function(r,i){const s=new qt;return r.asyncQueue.enqueueAndForget(async()=>ep(await pp(r),i,s)),s.promise}(Al(e),t)}(function(t,n=!0){(function(i){Se=i})(mh),Jn(new je("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Os(new Md(r.getProvider("auth-internal")),new Bd(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new C(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new en(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),he(vo,"4.3.2",t),he(vo,"4.3.2","esm2017")})();const Hp={apiKey:"AIzaSyDeePC5rr7GNBjXgIZO4vkebjrpsfjRF1A",authDomain:"moviebase-a1154.firebaseapp.com",projectId:"moviebase-a1154",storageBucket:"moviebase-a1154.appspot.com",messagingSenderId:"437248829000",appId:"1:437248829000:web:40772e66f7a234f4a2da7d"},Gp=_a(Hp),Nl=wp(Gp);async function Kp(e,t,n){await jp(Tp(Nl,e,t),n)}async function xl(e,t,n){const r=Op(vp(Nl,e),Mp(t,"==",n)),i=await $p(r);let s=[];return i.forEach(o=>{let a=o.data();a.id=o.id,s.push(a)}),s}var Le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Qp(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ol={exports:{}};function Xp(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var di={exports:{}};const Yp={},Jp=Object.freeze(Object.defineProperty({__proto__:null,default:Yp},Symbol.toStringTag,{value:"Module"})),Zp=Qp(Jp);var ra;function tg(){return ra||(ra=1,function(e,t){(function(n,r){e.exports=r()})(Le,function(){var n=n||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof Le<"u"&&Le.crypto&&(s=Le.crypto),!s&&typeof Xp=="function")try{s=Zp}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function m(){}return function(I){var R;return m.prototype=I,R=new m,m.prototype=null,R}}(),u={},l=u.lib={},c=l.Base=function(){return{extend:function(m){var I=a(this);return m&&I.mixIn(m),(!I.hasOwnProperty("init")||this.init===I.init)&&(I.init=function(){I.$super.init.apply(this,arguments)}),I.init.prototype=I,I.$super=this,I},create:function(){var m=this.extend();return m.init.apply(m,arguments),m},init:function(){},mixIn:function(m){for(var I in m)m.hasOwnProperty(I)&&(this[I]=m[I]);m.hasOwnProperty("toString")&&(this.toString=m.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=l.WordArray=c.extend({init:function(m,I){m=this.words=m||[],I!=i?this.sigBytes=I:this.sigBytes=m.length*4},toString:function(m){return(m||f).stringify(this)},concat:function(m){var I=this.words,R=m.words,D=this.sigBytes,x=m.sigBytes;if(this.clamp(),D%4)for(var $=0;$<x;$++){var mt=R[$>>>2]>>>24-$%4*8&255;I[D+$>>>2]|=mt<<24-(D+$)%4*8}else for(var et=0;et<x;et+=4)I[D+et>>>2]=R[et>>>2];return this.sigBytes+=x,this},clamp:function(){var m=this.words,I=this.sigBytes;m[I>>>2]&=4294967295<<32-I%4*8,m.length=r.ceil(I/4)},clone:function(){var m=c.clone.call(this);return m.words=this.words.slice(0),m},random:function(m){for(var I=[],R=0;R<m;R+=4)I.push(o());return new h.init(I,m)}}),d=u.enc={},f=d.Hex={stringify:function(m){for(var I=m.words,R=m.sigBytes,D=[],x=0;x<R;x++){var $=I[x>>>2]>>>24-x%4*8&255;D.push(($>>>4).toString(16)),D.push(($&15).toString(16))}return D.join("")},parse:function(m){for(var I=m.length,R=[],D=0;D<I;D+=2)R[D>>>3]|=parseInt(m.substr(D,2),16)<<24-D%8*4;return new h.init(R,I/2)}},S=d.Latin1={stringify:function(m){for(var I=m.words,R=m.sigBytes,D=[],x=0;x<R;x++){var $=I[x>>>2]>>>24-x%4*8&255;D.push(String.fromCharCode($))}return D.join("")},parse:function(m){for(var I=m.length,R=[],D=0;D<I;D++)R[D>>>2]|=(m.charCodeAt(D)&255)<<24-D%4*8;return new h.init(R,I)}},w=d.Utf8={stringify:function(m){try{return decodeURIComponent(escape(S.stringify(m)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(m){return S.parse(unescape(encodeURIComponent(m)))}},_=l.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(m){typeof m=="string"&&(m=w.parse(m)),this._data.concat(m),this._nDataBytes+=m.sigBytes},_process:function(m){var I,R=this._data,D=R.words,x=R.sigBytes,$=this.blockSize,mt=$*4,et=x/mt;m?et=r.ceil(et):et=r.max((et|0)-this._minBufferSize,0);var yt=et*$,Gt=r.min(yt*4,x);if(yt){for(var Ot=0;Ot<yt;Ot+=$)this._doProcessBlock(D,Ot);I=D.splice(0,yt),R.sigBytes-=Gt}return new h.init(I,Gt)},clone:function(){var m=c.clone.call(this);return m._data=this._data.clone(),m},_minBufferSize:0});l.Hasher=_.extend({cfg:c.extend(),init:function(m){this.cfg=this.cfg.extend(m),this.reset()},reset:function(){_.reset.call(this),this._doReset()},update:function(m){return this._append(m),this._process(),this},finalize:function(m){m&&this._append(m);var I=this._doFinalize();return I},blockSize:16,_createHelper:function(m){return function(I,R){return new m.init(R).finalize(I)}},_createHmacHelper:function(m){return function(I,R){return new M.HMAC.init(m,R).finalize(I)}}});var M=u.algo={};return u}(Math);return n})}(di)),di.exports}(function(e,t){(function(n,r){e.exports=r(tg())})(Le,function(n){return function(r){var i=n,s=i.lib,o=s.WordArray,a=s.Hasher,u=i.algo,l=[];(function(){for(var w=0;w<64;w++)l[w]=r.abs(r.sin(w+1))*4294967296|0})();var c=u.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(w,_){for(var M=0;M<16;M++){var m=_+M,I=w[m];w[m]=(I<<8|I>>>24)&16711935|(I<<24|I>>>8)&4278255360}var R=this._hash.words,D=w[_+0],x=w[_+1],$=w[_+2],mt=w[_+3],et=w[_+4],yt=w[_+5],Gt=w[_+6],Ot=w[_+7],Sn=w[_+8],Pn=w[_+9],Cn=w[_+10],Vn=w[_+11],Dn=w[_+12],bn=w[_+13],kn=w[_+14],Nn=w[_+15],y=R[0],E=R[1],v=R[2],T=R[3];y=h(y,E,v,T,D,7,l[0]),T=h(T,y,E,v,x,12,l[1]),v=h(v,T,y,E,$,17,l[2]),E=h(E,v,T,y,mt,22,l[3]),y=h(y,E,v,T,et,7,l[4]),T=h(T,y,E,v,yt,12,l[5]),v=h(v,T,y,E,Gt,17,l[6]),E=h(E,v,T,y,Ot,22,l[7]),y=h(y,E,v,T,Sn,7,l[8]),T=h(T,y,E,v,Pn,12,l[9]),v=h(v,T,y,E,Cn,17,l[10]),E=h(E,v,T,y,Vn,22,l[11]),y=h(y,E,v,T,Dn,7,l[12]),T=h(T,y,E,v,bn,12,l[13]),v=h(v,T,y,E,kn,17,l[14]),E=h(E,v,T,y,Nn,22,l[15]),y=d(y,E,v,T,x,5,l[16]),T=d(T,y,E,v,Gt,9,l[17]),v=d(v,T,y,E,Vn,14,l[18]),E=d(E,v,T,y,D,20,l[19]),y=d(y,E,v,T,yt,5,l[20]),T=d(T,y,E,v,Cn,9,l[21]),v=d(v,T,y,E,Nn,14,l[22]),E=d(E,v,T,y,et,20,l[23]),y=d(y,E,v,T,Pn,5,l[24]),T=d(T,y,E,v,kn,9,l[25]),v=d(v,T,y,E,mt,14,l[26]),E=d(E,v,T,y,Sn,20,l[27]),y=d(y,E,v,T,bn,5,l[28]),T=d(T,y,E,v,$,9,l[29]),v=d(v,T,y,E,Ot,14,l[30]),E=d(E,v,T,y,Dn,20,l[31]),y=f(y,E,v,T,yt,4,l[32]),T=f(T,y,E,v,Sn,11,l[33]),v=f(v,T,y,E,Vn,16,l[34]),E=f(E,v,T,y,kn,23,l[35]),y=f(y,E,v,T,x,4,l[36]),T=f(T,y,E,v,et,11,l[37]),v=f(v,T,y,E,Ot,16,l[38]),E=f(E,v,T,y,Cn,23,l[39]),y=f(y,E,v,T,bn,4,l[40]),T=f(T,y,E,v,D,11,l[41]),v=f(v,T,y,E,mt,16,l[42]),E=f(E,v,T,y,Gt,23,l[43]),y=f(y,E,v,T,Pn,4,l[44]),T=f(T,y,E,v,Dn,11,l[45]),v=f(v,T,y,E,Nn,16,l[46]),E=f(E,v,T,y,$,23,l[47]),y=S(y,E,v,T,D,6,l[48]),T=S(T,y,E,v,Ot,10,l[49]),v=S(v,T,y,E,kn,15,l[50]),E=S(E,v,T,y,yt,21,l[51]),y=S(y,E,v,T,Dn,6,l[52]),T=S(T,y,E,v,mt,10,l[53]),v=S(v,T,y,E,Cn,15,l[54]),E=S(E,v,T,y,x,21,l[55]),y=S(y,E,v,T,Sn,6,l[56]),T=S(T,y,E,v,Nn,10,l[57]),v=S(v,T,y,E,Gt,15,l[58]),E=S(E,v,T,y,bn,21,l[59]),y=S(y,E,v,T,et,6,l[60]),T=S(T,y,E,v,Vn,10,l[61]),v=S(v,T,y,E,$,15,l[62]),E=S(E,v,T,y,Pn,21,l[63]),R[0]=R[0]+y|0,R[1]=R[1]+E|0,R[2]=R[2]+v|0,R[3]=R[3]+T|0},_doFinalize:function(){var w=this._data,_=w.words,M=this._nDataBytes*8,m=w.sigBytes*8;_[m>>>5]|=128<<24-m%32;var I=r.floor(M/4294967296),R=M;_[(m+64>>>9<<4)+15]=(I<<8|I>>>24)&16711935|(I<<24|I>>>8)&4278255360,_[(m+64>>>9<<4)+14]=(R<<8|R>>>24)&16711935|(R<<24|R>>>8)&4278255360,w.sigBytes=(_.length+1)*4,this._process();for(var D=this._hash,x=D.words,$=0;$<4;$++){var mt=x[$];x[$]=(mt<<8|mt>>>24)&16711935|(mt<<24|mt>>>8)&4278255360}return D},clone:function(){var w=a.clone.call(this);return w._hash=this._hash.clone(),w}});function h(w,_,M,m,I,R,D){var x=w+(_&M|~_&m)+I+D;return(x<<R|x>>>32-R)+_}function d(w,_,M,m,I,R,D){var x=w+(_&m|M&~m)+I+D;return(x<<R|x>>>32-R)+_}function f(w,_,M,m,I,R,D){var x=w+(_^M^m)+I+D;return(x<<R|x>>>32-R)+_}function S(w,_,M,m,I,R,D){var x=w+(M^(_|~m))+I+D;return(x<<R|x>>>32-R)+_}i.MD5=a._createHelper(c),i.HmacMD5=a._createHmacHelper(c)}(Math),n.MD5})})(Ol);var eg=Ol.exports;const js=Wp(eg),ng=document.querySelector("#btnOpen"),Ml=document.querySelector("#btnOpenBurger"),rg=document.querySelector("#personalAccount"),ig=document.querySelector(".burger-menu__exit");document.querySelector("#windModal");const sg=document.querySelector("#btnClose");function zs(){window.windModal.showModal(),document.body.classList.add("scroll-lock"),Xs.style.display="flex",Ks.style.display="none",Ws.style.display="none",Qs.style.display="none",Gr.value="",Kr.value=""}function og(){window.windModal.close(),document.body.classList.remove("scroll-lock")}ng.addEventListener("click",zs);Ml.addEventListener("click",zs);sg.addEventListener("click",og);const ag=document.forms.loginForm,Gr=document.querySelector("#loginEmail"),Kr=document.querySelector("#loginPassword"),an=document.querySelector("#btnLogin"),Hs=document.querySelector(".account__personal"),Gs=document.querySelector(".account__exit");Hs.style.display="none";Gs.style.display="none";const Ll=document.querySelector("#hiNameUser"),Wn=document.querySelector(".account__enter");an.disabled=!0;function ug(){if(localStorage.hasOwnProperty("client")===!0){Wn.style.display="none",Hs.style.display="flex",Gs.style.display="flex";const n=window.localStorage.getItem("client"),r=JSON.parse(n);Ll.textContent=` Привет, ${r.name}`,new Date().getTime()-r.time>30*24*60*60*1e3?(window.localStorage.removeItem("client"),Wn.style.display="flex"):(r.time=new Date().getTime(),window.localStorage.setItem("client",JSON.stringify(r)))}else Wn.style.display="flex";new URLSearchParams(window.location.search).get("login")&&!localStorage.hasOwnProperty("client")&&zs()}window.addEventListener("load",ug);ag.addEventListener("submit",e=>{e.preventDefault()});Gr.addEventListener("input",Fl);Kr.addEventListener("input",Fl);function Fl(){an.disabled=Gr.value==""||Kr.value==""}const lg=document.querySelector("#dialogEmailError"),cg=document.querySelector("#dialogPasswError");async function hg(){an.disabled=!0;let e=js(Kr.value).toString();const t=await xl("users","email",Gr.value);if(t.length==0)lg.textContent="Пользователь с таким email не зарегестрирован. Создайте свой аккаунт в форме регистрации";else if(t[0].password!=e)cg.textContent="пароль неверный";else{let n=new Date().getTime();const r={id:t[0].id,name:t[0].name,time:n},i=JSON.stringify(r);window.localStorage.setItem("client",i),window.windModal.close(),Wn.style.display="none",Ml.style.display="none",ig.style.display="flex",rg.style.display="flex",Hs.style.display="flex",Gs.style.display="flex";const s=window.localStorage.getItem("client"),o=JSON.parse(s);Ll.textContent=` Привет, ${o.name}`}an.disabled=!1}an.addEventListener("click",hg);const mr=document.getElementById("thirdPassword"),un=document.getElementById("thirdReappassword"),dg=document.forms.thirdForm,Wr=document.querySelector("#secondEmail"),Qr=document.querySelector("#secondSecret"),ln=document.querySelector("#secondBtn");ln.disabled=!0;const pr=document.querySelector("#thirdBtn");pr.disabled=!0;function ql(){let e=!0;return/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(mr.value)||(e=!1,document.getElementById("thirdPasswordErr").innerHTML=" Пароль должен: содержать хотя бы одну большую букву, хотя бы одну маленькую букву, хотя бы одну цифру, хотя бы один спецсимвол(!@#$%^&*);"),un.value!==mr.value&&(un.nextElementSibling.textContent="Пароли не совпадают",e=!1),e}dg.addEventListener("submit",e=>{e.preventDefault(),ql()});function Bl(){ln.disabled=Wr.value==""||Qr.value==""}Wr.addEventListener("input",Bl);Qr.addEventListener("input",Bl);function Ul(){pr.disabled=un.value==""||mr.value==""}mr.addEventListener("input",Ul);un.addEventListener("input",Ul);const fg=document.querySelector("#secondEmailErr"),mg=document.querySelector("#secondSecretErr"),Ks=document.querySelector(".check-input"),Ws=document.querySelector(".new-pass"),Qs=document.querySelector(".ok-block"),Xs=document.querySelector(".main-form"),pg=document.querySelector("#newComwIn");let Hi="";const gg=document.querySelector("#passwordBtn");function _g(){Xs.style.display="none",Ks.style.display="flex",Wr.value="",Qr.value=""}gg.addEventListener("click",_g);async function yg(){ln.disabled=!0;let e=js(Qr.value).toString();const t=await xl("users","email",Wr.value);t.length==0?fg.textContent="Пользователь с таким email не зарегестрирован. Создайте свой аккаунт в форме регистрации":t[0].secret!=e?mg.textContent="кодовое слово неверное":(Ks.style.display="none",Ws.style.display="flex",Hi=t[0].id),ln.disabled=!1}ln.addEventListener("click",yg);pr.addEventListener("click",async()=>{if(!ql())return;pr.disabled=!0;const e={password:js(un.value).toString()};await Kp("users",Hi,e),Hi="",Ws.style.display="none",Qs.style.display="flex"});pg.addEventListener("click",()=>{Qs.style.display="none",Xs.style.display="flex"});const Eg=document.getElementById("upper-posters"),vg=document.getElementById("down-posters"),ia=document.createElement("div"),sa=document.createElement("div"),$l=document.getElementById("subtext-quote");document.getElementById("btn-quote");document.querySelector("#btnCloseRedirectionModal");document.querySelector("#btnRedirectToAuth");const oa=[{quote:"Я пошел за молоком, дорогая.",film:"Бриллиантовая рука"},{quote:"Жизнь прекрасна!",film:"Жизнь прекрасна"},{quote:"Черт побери, я тоже могу шутить!",film:"Список Шиндлера"},{quote:"Всё будет хорошо. Если не будет, значит, не конец.",film:"Индиана Джонс и последний крестовый поход"},{quote:"Мама всегда говорила, что жизнь как коробка шоколадных конфет. Никогда не знаешь, какая начинка тебя ждет.",film:"Форрест Гамп"},{quote:"Как же вы могли?!",film:"Леон"},{quote:"Любишь меня? Нет? Дай пять!",film:"В джазе только девушки"},{quote:"Не стоит стараться понять моих ближних. Я сам их не понимаю.",film:"Брат 2"},{quote:"Время - это то, что у нас не бывает. У нас есть только сейчас.",film:"Братья Блум"},{quote:"Жизнь — это коробка шоколадных конфет.",film:"Форрест Гамп"},{quote:"Иногда счастье требует жертв.",film:"Жизнь прекрасна"},{quote:"Я к тебе в гости, как к себе на дачу.",film:"Бриллиантовая рука"},{quote:"Лучшая защита – нападение.",film:"Бриллиантовая рука"},{quote:"Этот мир придуман, чтобы разбить сердце.",film:"Игры разума"},{quote:"Деньги есть у всех, а когда они есть у вас, вы - никто.",film:"Большой Лебовски"},{quote:"Взгляд с высоты гор и расстояние сближают все вещи.",film:"Побег из Шоушенка"},{quote:"Он меня не любит. А я его тоже нет.",film:"Сладкая жизнь"},{quote:"Время, Дороти. Время - это то, что все меряют, но никто не знает, что это такое на самом деле.",film:"Магазинчик за углом"},{quote:"Иногда нам нужно отойти, чтобы вернуться назад.",film:"Король Лев"},{quote:"Я хочу, чтобы ты помнила, что меня всегда можно найти в твоем сердце.",film:"Дневник памяти"},{quote:"Скажи мне, кто твой друг, и я скажу, кто ты.",film:"Дрожь земли"},{quote:"Мы забываем, что время лечит раны.",film:"Карты, деньги, два ствола"},{quote:"Я всегда с тобой, даже если ты меня не видишь.",film:"Вечное сияние чистого разума"},{quote:"Жизнь несовершенна, как и мы сами.",film:"Достучаться до небес"},{quote:"Люди забывают, но никогда не прощают.",film:"Властелин колец: Братство кольца"},{quote:"Каждый момент – это шанс начать сначала.",film:"Город ангелов"},{quote:"Я знаю, что ты знаешь, что я знаю.",film:"Друзья"},{quote:"Поднимайся выше, смотри дальше.",film:"Дюна"},{quote:"Любовь — это то, что остается после нас.",film:"Интерстеллар"},{quote:"Будь собой; всех остальных места нет.",film:"Скайфолл"},{quote:"Всегда есть выбор.",film:"Матрица"},{quote:"Любовь – это самая красивая вещь, которая может случиться с человеком.",film:"Красотка"},{quote:"Никогда не говори никогда.",film:"007: Касино Рояль"},{quote:"Мне всегда нравилась арифметика.",film:"Матрица"},{quote:"Будьте осторожны, мужчины играют в игры смерти.",film:"Смертельное оружие"},{quote:"Даже монстры могут быть добрыми.",film:"Монстры, Инк."},{quote:"Сделай это или не делай вообще.",film:"Бегущий по лезвию"},{quote:"Слабый человек разрушает, сильный – создает.",film:"Базаров"},{quote:"Только умирая, мы понимаем, как мы живем.",film:"Доктор Стрейнджлав, или Как я научился не волноваться и полюбил атомную бомбу"},{quote:"Ты можешь выбирать свой путь, но ты не можешь выбирать свое прошлое.",film:"Мрачные тени"},{quote:"Не бойся быть собой.",film:"Игры разума"},{quote:"Иногда для настоящей любви нужно пойти на жертву.",film:"Дневники вампира"},{quote:"Ты никогда не поздно изменить свою жизнь.",film:"Загадочная история Бенджамина Баттона"},{quote:"Не бойся быть счастливым.",film:"Кошмар перед Рождеством"},{quote:"Любовь – это всегда замешательство.",film:"Марли и я"},{quote:"Самое важное – это никогда не останавливаться, даже если все идет не так.",film:"Алиса в Стране чудес"},{quote:"Жизнь – это нечто большее, чем просто деньги и власть.",film:"Властелин колец: Возвращение короля"},{quote:"Правда всегда там, где нужно искать.",film:"Шоу Трумана"},{quote:"Любовь – это единственная вещь, которая может привести к счастью или боли.",film:"Титаник"},{quote:"Счастье не приходит с возрастом, оно приходит с выбором.",film:"Внутренний голос"},{quote:"Ты узнаешь своего настоящего друга в беде.",film:"Красавчик"},{quote:"Время — это всегда лучшее лекарство.",film:"Вспомнить всё"},{quote:"Самая настоящая жизнь – это жизнь, которую мы мечтаем себе создать.",film:"Спасти рядового Райана"},{quote:"Соблюдайте меру во всем, и вам будет счастье.",film:"Амели"},{quote:"Мы создаем свою собственную реальность.",film:"Гарри Поттер и философский камень"},{quote:"Нам нужно больше смелости, чтобы прожить настоящую жизнь, чем умереть.",film:"Брат 2"},{quote:"Иногда надо забыть о себе и думать о других.",film:"Брат 2"},{quote:"Любовь - это когда другому хочется дарить радость.",film:"Три метра над уровнем неба"},{quote:"Счастье – это просто вопрос выбора.",film:"Мстители"},{quote:"Иногда нам нужно уйти, чтобы понять, насколько нам нужны другие.",film:"Сумерки"},{quote:"Мама всегда говорила, что жизнь как коробка шоколадных конфет: никогда не знаешь, какая начинка тебя ждет.",film:"Форрест Гамп (1994)"},{quote:"Люди не понимают всей глубины чувств, которые они сами создают.",film:"Исход (2014)"},{quote:"Я никогда не могла вас забыть, и вот я здесь.",film:"Сумерки (2008)"},{quote:"Даю вам 50/50. Ну что вы скажете?",film:"Бриллиантовая рука (1968)"},{quote:"В этом мире нет ничего бессмысленного. Всё имеет свою причину.",film:"Седьмая печать (1957)"},{quote:"Ты не можешь управлять ветром, но можешь отрегулировать паруса.",film:"Шрек (2001)"},{quote:"Все в мире делится на два. Ты либо являешься частью проблемы, либо частью решения.",film:"Брюс Всемогущий (2003)"},{quote:"Пойми, что мы только что приземлились в космосе, и это, наверное, был самый глупый момент, чтобы начать ссору.",film:"Гравитация (2013)"},{quote:"Лучшее, что у нас есть, — это друг друг.",film:"Интерстеллар (2014)"},{quote:"Когда ты ничего не можешь сделать, есть только одна вещь, которую можно сделать — принять это.",film:"Игры разума (2001)"},{quote:"Иногда ты получаешь второй шанс, потому что ты был слишком глуп, чтобы воспользоваться первым.",film:"Матрица (1999)"},{quote:"Счастье — это не в том, чтобы иметь всё, а в том, чтобы уметь радоваться мелочам.",film:"Марли и я (2008)"},{quote:"Дайте мне точку опоры, и я переверну Землю.",film:"Архимед (2019)"},{quote:"Любовь — это когда ты готов принимать друг друга такими, какие вы есть, а не такими, какими вы хотели бы быть.",film:"Очень страшное кино (2000)"},{quote:"Жизнь прекрасна. И не потому, что всегда с ней легко, а потому, что она удивительно разнообразна.",film:"Прекрасное далеко (1997)"},{quote:"Любовь — это когда ты понимаешь, что кто-то другой важнее тебя самого.",film:"Дневник памяти (2004)"},{quote:"Пожалуйста, не плачь. Ты знаешь, что я не умею обращаться с женщинами, когда они плачут.",film:"Холодное сердце (2013)"},{quote:"Если ты хочешь, чтобы что-то сделали хорошо, сделай это сам.",film:"Бегущий по лезвию (1982)"},{quote:"Дети — это лучшее, что может случиться в жизни человека.",film:"Шестое чувство (1999)"},{quote:"Время — это всё, что у нас есть, и как мы его используем, зависит от нас.",film:"Бенджамин Баттон (2008)"},{quote:"Не позволяйте своим мечтам остаться мечтами.",film:"Игрок (2014)"},{quote:"Даже если ты сломан, ты всё равно целый.",film:"Амели (2001)"},{quote:"Жизнь — это как коробка шоколадных конфет, никогда не знаешь, что ты получишь.",film:"Зеленая миля (1999)"},{quote:"Всё, что мне нужно, — это маленький стартовый капитал и свобода от жены.",film:"Терминал (2004)"},{quote:"Счастье не в том, чтобы быть постоянно радостным, а в том, чтобы быть умиротворенным собой.",film:"Семь жизней (2008)"},{quote:"Счастье — это когда ты готов пожертвовать своим счастьем ради счастья другого.",film:"Красавица и чудовище (1991)"},{quote:"Ты мой человек. Ты всегда будешь моим человеком.",film:"Заводной апельсин (1971)"},{quote:"Жизнь — это всегда новый старт.",film:"Рокки (1976)"},{quote:"Будь собой. Это лучшее, что ты можешь быть.",film:"Лучше не бывает (2000)"},{quote:"Счастье в том, чтобы быть любимым, а не в том, чтобы быть понятым.",film:"Не могу сказать прощай (2004)"},{quote:"Любовь — это не то, что делает мир круглым. Любовь — это то, что делает поездку вокруг мира стоить того.",film:"Монстр в Париже (2011)"},{quote:"Никто не сможет принять решение за тебя. Ты должен сам выбрать свой путь.",film:"Подкидыш (2006)"},{quote:"Чем больше ты ждешь, тем больше ожидания, а они порождают разочарование.",film:"Сердцеед (2001)"},{quote:"Если ты не хочешь, чтобы что-то узнали, не говори об этом.",film:"Молчание ягнят (1991)"},{quote:"Да будет свет!",film:"Сияние (1980)"},{quote:"Всегда можно начать сначала.",film:"Добро пожаловать в Зомбилэнд (2009)"},{quote:"Жизнь — это шоу, и ты находишься в главной роли.",film:"Игра (1997)"},{quote:"Люди умирают, но их идеи бессмертны.",film:"Почти известная история (2000)"},{quote:"Счастье — это когда ты можешь сказать 'да' своей жизни.",film:"Дьявол носит Prada (2006)"},{quote:"Нет ничего важнее семьи.",film:"Форсаж 7 (2015)"},{quote:"Не жди, что мир изменится. Измени сам мир своим примером.",film:"Доктор Стрейнджлав, или Как я научился не волноваться и полюбил атомную бомбу (1964)"},{quote:"Не бойся, Люси. Живи.",film:"Пятый элемент (1997)"},{quote:"Сила не в оружии, а в разуме.",film:"Звёздные войны. Эпизод I: Скрытая угроза (1999)"},{quote:"Не важно, как медленно ты движешься, главное — не останавливайся.",film:"Алиса в стране чудес (2010)"},{quote:"Пусть будет свет.",film:"Терминатор (1984)"},{quote:"Завтра — новый день, с чистого листа.",film:"Унесённые ветром (1939)"},{quote:"Не нужно доказывать, что ты большой. Просто будь большим.",film:"Загадочная история Бенджамина Баттона (2008)"},{quote:"Любовь — это то, что мы делаем.",film:"Мистер и миссис Смит (2005)"},{quote:"Человек становится старым, когда его мечты становятся воспоминаниями.",film:"Скайфолл (2012)"},{quote:"Каждый мужчина имеет право на ошибку. Но, моя дорогая, вам следовало бы его простить.",film:"Сладкая жизнь (1960)"},{quote:"Мама всегда говорила, что жизнь как коробка шоколадных конфет: никогда не знаешь, какая начинка тебя ждет.",film:"Форрест Гамп (1994)"},{quote:"Люди не понимают всей глубины чувств, которые они сами создают.",film:"Исход (2014)"},{quote:"Я никогда не могла вас забыть, и вот я здесь.",film:"Сумерки (2008)"},{quote:"Даю вам 50/50. Ну что вы скажете?",film:"Бриллиантовая рука (1968)"},{quote:"В этом мире нет ничего бессмысленного. Всё имеет свою причину.",film:"Седьмая печать (1957)"},{quote:"Ты не можешь управлять ветром, но можешь отрегулировать паруса.",film:"Шрек (2001)"},{quote:"Все в мире делится на два. Ты либо являешься частью проблемы, либо частью решения.",film:"Брюс Всемогущий (2003)"},{quote:"Пойми, что мы только что приземлились в космосе, и это, наверное, был самый глупый момент, чтобы начать ссору.",film:"Гравитация (2013)"},{quote:"Лучшее, что у нас есть, — это друг друг.",film:"Интерстеллар (2014)"},{quote:"Когда ты ничего не можешь сделать, есть только одна вещь, которую можно сделать — принять это.",film:"Игры разума (2001)"},{quote:"Иногда ты получаешь второй шанс, потому что ты был слишком глуп, чтобы воспользоваться первым.",film:"Матрица (1999)"},{quote:"Счастье — это не в том, чтобы иметь всё, а в том, чтобы уметь радоваться мелочам.",film:"Марли и я (2008)"},{quote:"Дайте мне точку опоры, и я переверну Землю.",film:"Архимед (2019)"},{quote:"Любовь — это когда ты готов принимать друг друга такими, какие вы есть, а не такими, какими вы хотели бы быть.",film:"Очень страшное кино (2000)"},{quote:"Жизнь прекрасна. И не потому, что всегда с ней легко, а потому, что она удивительно разнообразна.",film:"Прекрасное далеко (1997)"},{quote:"Любовь — это когда ты понимаешь, что кто-то другой важнее тебя самого.",film:"Дневник памяти (2004)"},{quote:"Пожалуйста, не плачь. Ты знаешь, что я не умею обращаться с женщинами, когда они плачут.",film:"Холодное сердце (2013)"},{quote:"Если ты хочешь, чтобы что-то сделали хорошо, сделай это сам.",film:"Бегущий по лезвию (1982)"},{quote:"Дети — это лучшее, что может случиться в жизни человека.",film:"Шестое чувство (1999)"},{quote:"Время — это всё, что у нас есть, и как мы его используем, зависит от нас.",film:"Бенджамин Баттон (2008)"},{quote:"Не позволяйте своим мечтам остаться мечтами.",film:"Игрок (2014)"},{quote:"Даже если ты сломан, ты всё равно целый.",film:"Амели (2001)"},{quote:"Жизнь — это как коробка шоколадных конфет, никогда не знаешь, что ты получишь.",film:"Зеленая миля (1999)"},{quote:"Всё, что мне нужно, — это маленький стартовый капитал и свобода от жены.",film:"Терминал (2004)"},{quote:"Счастье не в том, чтобы быть постоянно радостным, а в том, чтобы быть умиротворенным собой.",film:"Семь жизней (2008)"},{quote:"Счастье — это когда ты готов пожертвовать своим счастьем ради счастья другого.",film:"Красавица и чудовище (1991)"},{quote:"Ты мой человек. Ты всегда будешь моим человеком.",film:"Заводной апельсин (1971)"},{quote:"Жизнь — это всегда новый старт.",film:"Рокки (1976)"},{quote:"Будь собой. Это лучшее, что ты можешь быть.",film:"Лучше не бывает (2000)"},{quote:"Счастье в том, чтобы быть любимым, а не в том, чтобы быть понятым.",film:"Не могу сказать прощай (2004)"},{quote:"Любовь — это не то, что делает мир круглым. Любовь — это то, что делает поездку вокруг мира стоить того.",film:"Монстр в Париже (2011)"},{quote:"Никто не сможет принять решение за тебя. Ты должен сам выбрать свой путь.",film:"Подкидыш (2006)"},{quote:"Чем больше ты ждешь, тем больше ожидания, а они порождают разочарование.",film:"Сердцеед (2001)"},{quote:"Если ты не хочешь, чтобы что-то узнали, не говори об этом.",film:"Молчание ягнят (1991)"},{quote:"Да будет свет!",film:"Сияние (1980)"},{quote:"Всегда можно начать сначала.",film:"Добро пожаловать в Зомбилэнд (2009)"},{quote:"Жизнь — это шоу, и ты находишься в главной роли.",film:"Игра (1997)"},{quote:"Люди умирают, но их идеи бессмертны.",film:"Почти известная история (2000)"},{quote:"Счастье — это когда ты можешь сказать 'да' своей жизни.",film:"Дьявол носит Prada (2006)"},{quote:"Нет ничего важнее семьи.",film:"Форсаж 7 (2015)"},{quote:"Не жди, что мир изменится. Измени сам мир своим примером.",film:"Доктор Стрейнджлав, или Как я научился не волноваться и полюбил атомную бомбу (1964)"},{quote:"Не бойся, Люси. Живи.",film:"Пятый элемент (1997)"},{quote:"Сила не в оружии, а в разуме.",film:"Звёздные войны. Эпизод I: Скрытая угроза (1999)"},{quote:"Не важно, как медленно ты движешься, главное — не останавливайся.",film:"Алиса в стране чудес (2010)"},{quote:"Пусть будет свет.",film:"Терминатор (1984)"},{quote:"Завтра — новый день, с чистого листа.",film:"Унесённые ветром (1939)"},{quote:"Не нужно доказывать, что ты большой. Просто будь большим.",film:"Загадочная история Бенджамина Баттона (2008)"},{quote:"Любовь — это то, что мы делаем.",film:"Мистер и миссис Смит (2005)"},{quote:"Человек становится старым, когда его мечты становятся воспоминаниями.",film:"Скайфолл (2012)"},{quote:"Каждый мужчина имеет право на ошибку. Но, моя дорогая, вам следовало бы его простить.",film:"Сладкая жизнь (1960)"}];window.addEventListener("load",function(){const e=Math.floor(Math.random()*30);fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=${e}`,{method:"GET",headers:{"X-API-KEY":"efb74c12-361f-4478-a2aa-d7214dd21813","Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{const n=t.items,r=Math.floor(Math.random()*(4-0)+0),i=n[r],s=t.items,o=Math.floor(Math.random()*(9-5)+5),a=s[o];t.items;const u=Math.floor(Math.random()*(14-10)+10),l=s[u];t.items;const c=Math.floor(Math.random()*(n.length-15)+15),h=s[c],d=`

  <div class="poster-info post-one">
  <img class="film__img" src="${i.posterUrl}" alt="film">
     <div class="film__title-wrapper"><a href="/page-movie.html?id=${i.kinopoiskId}" class="film__title">${i.nameRu}</a></div>
    
     </div>

  <div class="poster-info">
  <img class="film__img" src="${a.posterUrl}" alt="film">
    <div class="film__title-wrapper"><a href="/page-movie.html?id=${a.kinopoiskId}"  class="film__title">${a.nameRu}</a></div>
   
    </div>`,f=`

  <div class="poster-info post-one">
  <img class="film__img" src="${l.posterUrl}" alt="film">
    <div class="film__title-wrapper"><a href="/page-movie.html?id=${l.kinopoiskId}"  class="film__title">${l.nameRu}</a></div>
    
    </div>

  <div class="poster-info">
  <img class="film__img" src="${h.posterUrl}" alt="film">
    <div class="film__title-wrapper"><a href="/page-movie.html?id=${h.kinopoiskId}" class="film__title">${h.nameRu}</a></div>
    
  </div>`;ia.innerHTML=d,Eg.appendChild(ia),sa.innerHTML=f,vg.appendChild(sa)}).catch(t=>{console.log("Ошибка загрузки:",t)})});function aa(e){return Math.floor(Math.random()*e)}async function jl(e){return new Promise(t=>setTimeout(t,e))}async function Tg(e){for(let t=0;t<e.length;t++)$l.textContent+=e[t],await jl(50)}async function Ig(){for(;;){$l.textContent="";let e=oa[aa(oa.length)];await Tg("« "+e.quote+"» "+e.film),await jl(1e3+aa(2e3))}}Ig();
