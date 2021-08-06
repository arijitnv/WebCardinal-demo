import{V as e,c as n,w as t,x as o,h as i,i as r}from"./p-61cc1f50.js";import"./p-0c3518a5.js";function s(e,n){return window.$$&&$$.SSAPP_CONTEXT&&$$.SSAPP_CONTEXT.BASE_URL&&$$.SSAPP_CONTEXT.SEED&&0!==e.indexOf($$.SSAPP_CONTEXT.BASE_URL)&&0!==e.indexOf("data:image")&&(e=`${$$.SSAPP_CONTEXT.BASE_URL}${0===e.indexOf("/")?e.substr(1):e}`),fetch(e,n)}function u(e,n,t){s(e,{method:"POST",body:n}).then((e=>e.json().then((n=>{if(!e.ok||201!=e.status){let e="";Array.isArray(n)&&n.length?e=`${n[0].error.message}. Code: ${n[0].error.code}`:"object"==typeof n&&(e=n.message?n.message:JSON.stringify(n));let t=new Error(e);throw t.data=n,t}if(Array.isArray(n)){let e=[];for(const t of n)console.log(`Uploaded ${t.file.name} to ${t.result.path}`),e.push(t.result.path);t(void 0,e.length>1?e:e[0])}})))).catch((e=>t(e)))}function a(e,n,t,o){"function"==typeof t&&(o=t,t=void 0);const i=new FormData;let r="file";if(Array.isArray(n))for(const e of n)r="files[]",i.append(r,e);else i.append(r,n);let s=`/upload?path=${e}&input=${r}`;void 0!==t&&t.preventOverwrite&&(s+="&preventOverwrite=true"),u(s,i,o)}function l(e,n){Array.isArray(e)||(e=[e]);let t=[],o=[],i=r=>{let u=r;"/"!==r[0]&&(r="/"+r),function(e,n){s(e,{method:"DELETE"}).then((e=>{if(!e.ok)throw new Error(e.statusText);n()})).catch((e=>n(e)))}("/delete"+r,(r=>{if(r?t.push({filename:u,message:r.message}):o.push(u),e.length>0)return i(e.shift());n(t.length?t:void 0,o)}))};i(e.shift())}class c{constructor(e,n){this.directAccessEnabled=!1}enableDirectAccess(e){let n=this;!function e(n){let t=require("opendsu").loadAPI("sc"),o=void 0;try{o=t.getMainDSU()}catch(e){}if(o)n();else{const o=require("opendsu");o.loadAPI("http").doGet("/getSSIForMainDSU",(function(i,r){if(i)return reportUserRelevantError("Failed to enable direct DSUStorage access from Cardinal",i);let s=o.loadApi("config");"server"==o.loadApi("keyssi").parse(r).getHint()&&s.disableLocalVault(),o.loadAPI("resolver").loadDSU(r,((o,i)=>{if(o)return printOpenDSUError(o),reportUserRelevantInfo("Reattempting to enable direct DSUStorage from Cardinal",o),void setTimeout((function(){e(n)}),100);t.setMainDSU(i),n()}))}))}}((function(){if(n.directAccessEnabled)e(void 0,!0);else{let t=["addFile","addFiles","addFolder","appendToFile","createFolder","delete","extractFile","extractFolder","getArchiveForPath","getCreationSSI","getKeySSI","listFiles","listFolders","mount","readDir","readFile","rename","unmount","writeFile","listMountedDSUs","beginBatch","commitBatch","cancelBatch"],o=require("opendsu").loadAPI("sc").getMainDSU();for(let e of t)n[e]=o[e];n.directAccessEnabled=!0,e(void 0,!0)}}))}call(e,...n){if(0===n.length)throw Error("Missing arguments. Usage: call(functionName, arg1, arg2 ... callback)");const t=n.pop();s("/api?"+new URLSearchParams({name:e,arguments:JSON.stringify(n)}),{method:"GET"}).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{t(...e)})).catch((e=>t(e)))}setObject(e,n,t){try{let o=JSON.stringify(n);this.setItem(e,o,t)}catch(e){t(createOpenDSUErrorWrapper("setObject failed",e))}}getObject(e,n){this.getItem(e,"json",(function(e,t){if(e||!t)return n(void 0,void 0);n(void 0,t)}))}setItem(e,n,t){if(this.directAccessEnabled)this.writeFile(e,n,t);else{let o=e.split("/"),i=o.splice(o.length-1,1)[0];(e=o.join("/"))||(e="/"),u(`/upload?path=${e}&filename=${i}`,n,t)}}getItem(e,n,t){"function"==typeof n&&(t=n,n="arrayBuffer"),this.directAccessEnabled?this.readFile(e,(function(e,o){if(e)return t(e);try{"json"==n&&(o=JSON.parse(o.toString()))}catch(e){return t(e)}t(void 0,o)})):("/"!==e[0]&&(e="/"+e),function(e,n,t){s(e).then((e=>{if(!e.ok)throw new Error(e.statusText);e[n]().then((e=>t(void 0,e))).catch((e=>{throw e}))})).catch((e=>t(e)))}(e="/download"+e,n,t))}uploadFile(e,n,t,o){a(...arguments)}uploadMultipleFiles(e,n,t,o){a(...arguments)}deleteObjects(e,n){l(e,n)}removeFile(e,n){console.log("[Warning] - obsolete. Use DSU.deleteObjects"),l([e],n)}removeFiles(e,n){console.log("[Warning] - obsolete. Use DSU.deleteObjects"),l(e,n)}}bindableModelRequire=function e(n,t,o){function i(s,u){if(!t[s]){if(!n[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[s]={exports:{}};n[s][0].call(c.exports,(function(e){return i(n[s][1][e]||e)}),c,c.exports,e,n,t,o)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({"D:\\work\\epi-workspace\\privatesky\\builds\\tmp\\bindableModel.js":[function(e){(function(n){(function(){"undefined"!=typeof window&&void 0===window.process&&(window.process={}),"undefined"==typeof File&&(n.File=function(){}),e("./bindableModel_intermediar")}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./bindableModel_intermediar":"D:\\work\\epi-workspace\\privatesky\\builds\\tmp\\bindableModel_intermediar.js"}],"D:\\work\\epi-workspace\\privatesky\\builds\\tmp\\bindableModel_intermediar.js":[function(e){(function(n){(function(){n.bindableModelLoadModules=function(){void 0===$$.__runtimeModules["overwrite-require"]&&($$.__runtimeModules["overwrite-require"]=e("overwrite-require")),void 0===$$.__runtimeModules.queue&&($$.__runtimeModules.queue=e("queue")),void 0===$$.__runtimeModules.soundpubsub&&($$.__runtimeModules.soundpubsub=e("soundpubsub")),void 0===$$.__runtimeModules["psk-bindable-model"]&&($$.__runtimeModules["psk-bindable-model"]=e("psk-bindable-model"))},n.bindableModelRequire=e,"undefined"!=typeof $$&&$$.requireBundle("bindableModel")}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"overwrite-require":"overwrite-require","psk-bindable-model":"psk-bindable-model",queue:"queue",soundpubsub:"soundpubsub"}],"D:\\work\\epi-workspace\\privatesky\\modules\\overwrite-require\\moduleConstants.js":[function(e,n){n.exports={BROWSER_ENVIRONMENT_TYPE:"browser",MOBILE_BROWSER_ENVIRONMENT_TYPE:"mobile-browser",WEB_WORKER_ENVIRONMENT_TYPE:"web-worker",SERVICE_WORKER_ENVIRONMENT_TYPE:"service-worker",ISOLATE_ENVIRONMENT_TYPE:"isolate",THREAD_ENVIRONMENT_TYPE:"thread",NODEJS_ENVIRONMENT_TYPE:"nodejs"}},{}],"D:\\work\\epi-workspace\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js":[function(e){(function(n){(function(){let t=console;if(void 0===$$.Buffer&&($$.Buffer=e("buffer").Buffer),void 0===n.$$.uidGenerator&&($$.uidGenerator={},$$.uidGenerator.safe_uuid=e("swarmutils").safe_uuid),n.process&&"true"===process.env.NO_LOGS)console.log("Environment flag NO_LOGS is set, logging to console");else try{e("zeromq");const n=e("psklogger");t=n.PSKLogger.getLogger(),console.log("Logger init successful",process.pid)}catch(e){-1!==e.message.indexOf("psklogger")||-1!==e.message.indexOf("zeromq")?(console.log("Logger not available, using console"),t=console):console.log(e)}$$.registerGlobalSymbol=function(e,n){void 0===$$[e]?Object.defineProperty($$,e,{value:n,writable:!1}):t.error("Refusing to overwrite $$."+e)},console.warn=(...e)=>{console.log(...e)},$$.registerGlobalSymbol("autoThrow",(function(e){if(!e)throw e})),$$.registerGlobalSymbol("propagateError",(function(e,n){if(e)throw n(e),e})),$$.registerGlobalSymbol("logError",(function(e){e&&(console.log(e),$$.err(e))})),$$.registerGlobalSymbol("fixMe",(function(...e){console.log("Fix this:",...e)})),$$.registerGlobalSymbol("exception",(function(e){throw new Error(e)})),$$.registerGlobalSymbol("throw",(function(e){throw new Error(e)})),$$.incomplete=function(...e){e.unshift("Incomplete feature touched:"),t.warn(...e)},$$.notImplemented=$$.incomplete,$$.registerGlobalSymbol("assert",(function(e,n){if(!e)throw new Error("Assert false "+n)})),$$.registerGlobalSymbol("flags",(function(){$$.incomplete("flags handling not implemented")})),$$.registerGlobalSymbol("obsolete",(function(...e){e.unshift("Obsolete feature:"),t.log(...e),console.log(...e)})),$$.registerGlobalSymbol("log",(function(...e){e.unshift("Log:"),t.log(...e)})),$$.registerGlobalSymbol("info",(function(...e){e.unshift("Info:"),t.log(...e),console.log(...e)})),$$.registerGlobalSymbol("err",(function(...e){e.unshift("Error:"),t.error(...e),console.error(...e)})),$$.registerGlobalSymbol("error",(function(...e){e.unshift("Error:"),t.error(...e),console.error(...e)})),$$.registerGlobalSymbol("warn",(function(...e){e.unshift("Warn:"),t.warn(...e),console.log(...e)})),$$.registerGlobalSymbol("syntaxError",(function(...e){e.unshift("Syntax error:"),t.error(...e);try{throw new Error("Syntax error or misspelled symbol!")}catch(n){console.error(...e),console.error(n.stack)}})),$$.invalidMemberName=function(e,n){let o="unknown";n&&n.meta&&(o=n.meta.swarmTypeName);const i="Invalid member name "+e+"in swarm "+o;console.error(i),t.err(i)},$$.registerGlobalSymbol("invalidSwarmName",(function(e){const n="Invalid swarm name "+e;console.error(n),t.err(n)})),$$.registerGlobalSymbol("unknownException",(function(...e){e.unshift("unknownException:"),t.err(...e),console.error(...e)})),$$.registerGlobalSymbol("event",(function(e,...n){t.hasOwnProperty("event")?t.event(e,...n):"status.domains.boot"===e&&console.log("Failing to console...",e,...n)})),$$.registerGlobalSymbol("redirectLog",(function(e,n){t.hasOwnProperty("redirect")&&t.redirect(e,n)})),$$.registerGlobalSymbol("throttlingEvent",(function(...e){t.log(...e)}))}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{buffer:!1,psklogger:!1,swarmutils:!1}],"D:\\work\\epi-workspace\\privatesky\\modules\\psk-bindable-model\\lib\\PskBindableModel.js":[function(e,n){const t=e("soundpubsub").soundPubSub,o="chainChanged",i=".",r=["copyWithin","fill","pop","push","reverse","shift","slice","sort","splice","unshift"];t.registerCompactor(o,(function(e,n){if(e.type===o)return n}));let s=0;n.exports=class{static setModel(e){let n=void 0,u="Model."+s+i,a=new Set;const l={};function c(e,n){return e?e+i+n:n}function f(e){return u+e}function d(e){return function(t,o,i){let r=c(e,o);return t[o]=i&&"object"==typeof i?p(i,r):i,n.notify(r),!0}}function p(e,s){if("object"!=typeof e||e instanceof File)return e;let u,l,h,b,w,$=!s;$&&(u=function(e){(function(e){"string"!=typeof e&&(e=""+e);let n=new Set;n.add("*");let t=e.split(i).map((e=>e.trim())),o="";for(let e=0;e<t.length;e++)0!==e?o+=i+t[e]:o=t[e],n.add(o);return a.forEach((t=>{t.startsWith(e)&&n.add(t)})),n})(e).forEach((n=>{t.publish(f(n),{type:o,chain:n,targetChain:e})}))},b=function(e){return e?e.split(i).map((e=>e.trim())).reduce(((e,n)=>{if(null!=e)return e[n]}),n):n},w=function(e,t){return e.split(i).map((e=>e.trim())).reduce(((e,n,o,i)=>{if(null!=e)return o===i.length-1?(e[n]=t,!0):e=e[n]}),n)},l=function(e,n){a.add(e),t.subscribe(f(e),n)},h=function(e,n){a.has(e)&&t.unsubscribe(f(e),n)});let v=d(s),k={apply:function(){throw new Error("A function call was not expected inside proxy!")},constructor:function(){throw new Error("A constructor call was not expected inside proxy!")},isExtensible:function(e){return Reflect.isExtensible(e)},preventExtensions:function(e){return Reflect.preventExtensions(e)},get:function(e,n){if($)switch(n){case"onChange":return l;case"offChange":return h;case"notify":return u;case"getChainValue":return b;case"setChainValue":return w}return"__isProxy"===n||(e instanceof Promise&&"function"==typeof e[n]?e[n].bind(e):e[n])},set:d(s),deleteProperty:function(e,n){return n in e&&(delete e[n],!0)},ownKeys:function(e){return Reflect.ownKeys(e)},has:function(e,n){return n in e},defineProperty:function(e,n,t){let o=Object.assign({},t);return o.set=function(e,n,o){t.hasOwnProperty("set")&&t.set(e,n,o),v(e,n,o)},Object.defineProperty(e,n,o)},getOwnPropertyDescriptor:function(e,n){return Object.getOwnPropertyDescriptor(e,n)},getPrototypeOf:function(e){return Reflect.getPrototypeOf(e)},setPrototypeOf:function(e,n){Reflect.setPrototypeOf(e,n)}};return Array.isArray(e)&&(k.get=function(e){const t=["toObject","addExpression","evaluateExpression","hasExpression","onChangeExpressionChain"];return function(o,i){if($)switch(i){case"onChange":return l;case"offChange":return h;case"notify":return u;case"getChainValue":return b;case"setChainValue":return w;default:if(t.includes(i))return o[i]}if("__isProxy"===i)return!0;const s=o[i];if("function"==typeof s)switch(i){case"push":return function(e,t){return function(...o){try{let i=Array.prototype.push.apply(e,o);for(let n=i-o.length;n<i;n++)e[n]=p(e[n],c(t,n.toString()));return n.notify(c(t,i-1)),i}catch(e){throw console.log("An error occurred in Proxy"),e}}}(o,e);default:return function(e,t,o){return function(...i){try{const s=-1!==r.indexOf(e);s&&t.forEach(((e,i)=>{"object"==typeof t[i]&&(t[i]=n.toObject(c(o,i.toString())))}));let u=Array.prototype[e].apply(t,i);if(s)for(let e=0;e<t.length;e++)t[e]=p(t[e],c(o,e.toString()));return s&&n.notify(o),u}catch(e){throw console.log("An error occurred in Proxy"),e}}}(i,o,e)}return s}}(s||"")),Object.keys(e).forEach((n=>{e[n]&&(e[n]=p(e[n],c(s,n)))})),e.__isProxy?e:new Proxy(e,k)}return s++,n=p(e),n.toObject=function(e){let t={};return e?"string"==typeof e&&(t=n.getChainValue(e)):t=n,t&&"object"==typeof t?JSON.parse(JSON.stringify(t)):t},n.addExpression=function(e,t,...o){if("string"!=typeof e||!e.length)throw new Error("Expression name must be a valid string");if("function"!=typeof t)throw new Error("Expression must have a callback");let i=[];if(o.length){let e=o;Array.isArray(e[0])&&(e=e[0]),i=e.filter((e=>"string"==typeof e&&e.length))}l[e]={watchChain:i,callback:function(){return t.call(n)}}},n.evaluateExpression=function(e){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);return l[e].callback()},n.hasExpression=function(e){return"object"==typeof l[e]&&"function"==typeof l[e].callback},n.onChangeExpressionChain=function(e,n){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);const t=l[e];if(t.watchChain.length)for(let e=0;e<t.watchChain.length;e++)this.onChange(t.watchChain[e],n)},n}}},{soundpubsub:"soundpubsub"}],"D:\\work\\epi-workspace\\privatesky\\modules\\soundpubsub\\lib\\soundPubSub.js":[function(e,n,t){const o=e("queue");t.soundPubSub=new function(){this.publish=function(e,s){return c(e)||function(e){var n=!1;return e&&"object"==typeof e||(n=!0,console.log("Invalid messages types: "+e)),n}(s)||void 0===n[e]?null:(function(e,n){var s=!1,u=t[e];if(void 0===u&&(u=new o,t[e]=u),n&&void 0!==n.type){var a=i[n.type];if(void 0!==a)for(let e of u)if(a(n,e)===e&&void 0===e.__transmisionIndex){s=!0;break}}!s&&n&&(u.push(n),r.push(e))}(e,s),setTimeout(u,0),n[e].length)},this.subscribe=function(e,t,o,i){if(!c(e)&&!f(t)){var r={callBack:t,waitForMore:o,filter:i},s=n[e];void 0===s&&(n[e]=s=[]),s.push(r)}},this.unsubscribe=function(e,t,o){if(!f(t)){var i=!1;if(n[e])for(var r=0;r<n[e].length;r++){var s=n[e][r];s.callBack!==t||void 0!==o&&s.filter!==o||(i=!0,s.forDelete=!0,s.callBack=void 0,s.filter=void 0)}i||console.log("Unable to unsubscribe a callback that was not subscribed!")}},this.blockCallBacks=function(){s++},this.releaseCallBacks=function(){for(s--;0===s&&u(!0););for(;0===s&&l(););},this.afterAllEvents=function(e){f(e)||a.push(e),this.blockCallBacks(),this.releaseCallBacks()},this.hasChannel=function(e){return!c(e)&&void 0!==n[e]},this.addChannel=function(e){c(e)||this.hasChannel(e)||(n[e]=[])};var e=this,n={},t={},i={},r=new o,s=0;function u(o){if(s>0)return!1;const i=r.front();if(void 0!==i){e.blockCallBacks();try{let e;if(t[i].isEmpty()||(e=t[i].front()),void 0===e)t[i].isEmpty()||console.log("Can't use as message in a pub/sub channel this object: "+e),r.pop();else{if(void 0===e.__transmisionIndex){e.__transmisionIndex=0;for(var u=n[i].length-1;u>=0;u--){var a=n[i][u];!0===a.forDelete&&n[i].splice(u,1)}}else e.__transmisionIndex++;void 0===e.__transmisionIndex&&console.log("Can't use as message in a pub/sub channel this object: "+e),void 0===(a=n[i][e.__transmisionIndex])?(delete e.__transmisionIndex,t[i].pop()):(null==a.filter||!f(a.filter)&&a.filter(e))&&(a.forDelete||(a.callBack(e),!a.waitForMore||f(a.waitForMore)||a.waitForMore(e)||(a.forDelete=!0)))}}catch(e){console.log("Event callback failed: "+a.callBack+"error: "+e.stack)}return o?s--:e.releaseCallBacks(),!0}return!1}this.registerCompactor=function(e,n){f(n)||(i[e]=n)};var a=new o;function l(){return a.isEmpty()||a.pop()(),!a.isEmpty()}function c(e){var n=!1;return(!e||"string"!=typeof e&&"number"!=typeof e)&&(n=!0,console.log("Invalid channel name: "+e)),n}function f(e){var n=!1;return e&&"function"==typeof e||(n=!0,console.log("Expected to be function but is: "+e)),n}}},{queue:"queue"}],"overwrite-require":[function(e,n){(function(t){(function(){n.exports={enableForEnvironment:function(n){const o=e("./moduleConstants");switch(n){case o.BROWSER_ENVIRONMENT_TYPE:t=window;break;case o.WEB_WORKER_ENVIRONMENT_TYPE:case o.SERVICE_WORKER_ENVIRONMENT_TYPE:t=self;break;default:Error.stackTraceLimit=1/0}void 0===t.$$&&(t.$$={}),void 0===$$.__global&&($$.__global={}),void 0===t.console.log&&(t.console.log=console.warn),Object.defineProperty($$,"environmentType",{get:function(){return n},set:function(){throw Error("Environment type already set!")}}),void 0===$$.__global.requireLibrariesNames&&($$.__global.currentLibraryName=null,$$.__global.requireLibrariesNames={}),void 0===$$.__runtimeModules&&($$.__runtimeModules={}),void 0===t.functionUndefined&&(t.functionUndefined=function(){throw console.log("Called of an undefined function!!!!"),new Error("Called of an undefined function")},void 0===t.webshimsRequire&&(t.webshimsRequire=t.functionUndefined),void 0===t.domainRequire&&(t.domainRequire=t.functionUndefined),void 0===t.pskruntimeRequire&&(t.pskruntimeRequire=t.functionUndefined));const i={};function r(e){return $$.__runtimeModules[e]}function s(e,n){let o,r;e?(o=$$.__requireFunctionsChain.slice(),o.push(e)):o=$$.__requireFunctionsChain,function(e){if(i[e]){const n=new Error("Preventing recursive require for "+e);throw n.type="PSKIgnorableError",n}}(n),function(e){i[e]=!0}(n);let s=!1;$$.__global.currentLibraryName||($$.__global.currentLibraryName=n,void 0===$$.__global.requireLibrariesNames[n]&&($$.__global.requireLibrariesNames[n]={}),s=!0);for(let e=0;e<o.length;e++){const i=o[e];try{if(i===t.functionUndefined)continue;if(r=i(n),r)break}catch(e){"PSKIgnorableError"!==e.type&&("SyntaxError"==typeof e?console.error(e):"zeromq"===n?console.warn("Failed to load module ",n," with error:",e.message):console.error("Failed to load module ",n," with error:",e))}}if(!r)throw Error("Failed to load module "+n);return function(e){i[e]=!1}(n),s&&($$.__global.currentLibraryName=null),r}if($$.__registerModule=function(e,n){$$.__runtimeModules[e]=n},e("./standardGlobalSymbols.js"),void 0===$$.require)switch($$.__requireList=["webshimsRequire"],$$.__requireFunctionsChain=[],$$.requireBundle=function(e){$$.__requireList.push(e+="Require");const n=[r];$$.__requireList.forEach((function(e){const o=function(e){const n=t[e];return void 0===n||n===t.functionUndefined?null:function(e){const t=n(e);return $$.__runtimeModules[e]=t,t}}(e);o&&n.push(o)})),$$.__requireFunctionsChain=n},$$.requireBundle("init"),$$.environmentType){case o.BROWSER_ENVIRONMENT_TYPE:case o.WEB_WORKER_ENVIRONMENT_TYPE:case o.SERVICE_WORKER_ENVIRONMENT_TYPE:console.log("Defining global require in browser"),t.require=function(e){return s(null,e)},$$.require=e;break;case o.ISOLATE_ENVIRONMENT_TYPE:!function(){$$.requireBundle("sandboxBase");const n=t.require;t.crypto=e("crypto"),t.require=function(e){const t=this;let o;return o=s((function(...o){let i;try{i=n.apply(t,o)}catch(o){if("MODULE_NOT_FOUND"!==o.code)throw o;{const o=path.join(process.cwd(),e);i=n.apply(t,[o]),e=o}}return i}),e),o}}(),$$.require=e;break;default:$$.require=function(){const n=e("path");$$.__runtimeModules.crypto=e("crypto"),$$.__runtimeModules.util=e("util");const t=e("module");$$.__runtimeModules.module=t,console.log("Redefining require for node"),$$.__originalRequire=t._load;const o=t.prototype.require;function i(e){const t=this;return s((function(...i){let r;try{r=o.apply(t,i)}catch(i){if("MODULE_NOT_FOUND"!==i.code)throw i;{let i=e;(i.startsWith("/")||i.startsWith("./")||i.startsWith("../"))&&(i=n.join(process.cwd(),e)),r=o.call(t,i),e=i}}return r}),e)}return t.prototype.require=i,i}()}$$.promisify=function(e){return function(...n){return new Promise(((t,o)=>{e(...n,((e,...n)=>{e?o(e):t(...n)}))}))}},$$.makeSaneCallback=function(e){let n=!1;return(...t)=>{if(n)throw new Error("Callback called 2 times! Second call was stopped. Function code:\n"+e.toString());return n=!0,e(...t)}}},constants:e("./moduleConstants")}}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./moduleConstants":"D:\\work\\epi-workspace\\privatesky\\modules\\overwrite-require\\moduleConstants.js","./standardGlobalSymbols.js":"D:\\work\\epi-workspace\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js"}],"psk-bindable-model":[function(e,n){n.exports=e("./lib/PskBindableModel")},{"./lib/PskBindableModel":"D:\\work\\epi-workspace\\privatesky\\modules\\psk-bindable-model\\lib\\PskBindableModel.js"}],queue:[function(e,n){function t(e){this.content=e,this.next=null}function o(){this.head=null,this.tail=null,this.length=0,this.push=function(e){const n=new t(e);this.head?(this.tail.next=n,this.tail=n):(this.head=n,this.tail=n),this.length++},this.pop=function(){if(!this.head)return null;const e=this.head;return this.head=this.head.next,this.length--,0===this.length&&(this.tail=null),e.content},this.front=function(){return this.head?this.head.content:void 0},this.isEmpty=function(){return null===this.head},this[Symbol.iterator]=function*(){let e=this.head;for(;null!==e;)yield e.content,e=e.next}.bind(this)}o.prototype.inspect=o.prototype.toString=function(){let e="",n=this.head;for(;n;)e+=JSON.stringify(n.content)+" ",n=n.next;return e},n.exports=o},{}],soundpubsub:[function(e,n){n.exports={soundPubSub:e("./lib/soundPubSub").soundPubSub}},{"./lib/soundPubSub":"D:\\work\\epi-workspace\\privatesky\\modules\\soundpubsub\\lib\\soundPubSub.js"}]},{},["D:\\work\\epi-workspace\\privatesky\\builds\\tmp\\bindableModel.js"]),function(e){e.bundlePaths={webshims:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\webshims.js",pskruntime:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\pskruntime.js",pskWebServer:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\pskWebServer.js",consoleTools:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\consoleTools.js",blockchain:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\blockchain.js",openDSU:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\openDSU.js",nodeBoot:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\nodeBoot.js",testsRuntime:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\testsRuntime.js",bindableModel:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\bindableModel.js",loaderBoot:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\loaderBoot.js",swBoot:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\swBoot.js",iframeBoot:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\iframeBoot.js",launcherBoot:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\launcherBoot.js",testRunnerBoot:"D:\\work\\epi-workspace\\privatesky\\psknode\\bundles\\testRunnerBoot.js"}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const f=bindableModelRequire("psk-bindable-model");function d(e,n,t){if("string"!=typeof e||0===e.trim().length)throw Error(`\n      Argument eventName is not valid. It must be a non-empty string.\n      Provided value: ${e}\n    `);if("function"!=typeof n)throw Error(`\n      Argument listener is not valid, it must be a function.\n      Provided value: ${n}\n    `);if(t&&"boolean"!=typeof t&&"object"!=typeof t)throw Error(`\n      Argument options is not valid, it must a boolean (true/false) in case of capture, or an options object.\n      If no options are needed, this argument can be left empty.\n      Provided value: ${t}\n    `)}function p(){const{state:e}=window.WebCardinal||{};return e&&e.skin&&"string"==typeof e.skin}function h(){let{pathname:e}=window.location;return"/"===e?e:e.endsWith("/")?e.slice(0,-1):e}function b(e,n){"string"==typeof n&&(n=n.split("."));const t=n.shift();return n.length?b(e[t],n):e[t]}function w(e){if(e&&"object"==typeof e)return void 0===e.onChangeExpressionChain?f.setModel(e):e;console.warn("A model must be an object!")}class ${constructor(i,r,s,u){let a;if(this.DSUStorage=new c,this.element=i,this.history=r,this.tagEventListeners=[],s&&this.element.hasAttribute(e)){let t=this.element.getAttribute(e);t.startsWith(n)&&(t=t.slice(1)),a=t?f.setModel(b(s,t)):s}Object.defineProperty(this,"model",{get:()=>a,set(e){a?Object.keys(e).forEach((n=>{a[n]=e[n]})):a=f.setModel(e)}}),this.setLegacyGetModelEventListener(),this.translationModel=u||f.setModel(function(){if(!t())return;let{translations:e}=window.WebCardinal;const n=o(),i=h(),r=e[n],s=e.default;if(!r&&!s)return void console.warn(`No translations found for skins: "${n}"${"default"!==n?' and "default"':""}`);let u=r&&r[i];return u||(u=s&&s[i],u||void console.warn(`No translations found for page: "${i}" (skins: "${n}"${"default"!==n?' and "default"':""}`))}()||{}),this.disconnectedCallback=()=>{this.removeAllTagEventListeners(),this.onDisconnectedCallback()},"function"==typeof this.element.componentOnReady?this.element.componentOnReady().then(this.onReady.bind(this)):this.onReady()}createElement(e,n){return n&&n.model&&(n.model=w(n.model)),Object.assign(document.createElement(e),n)}createAndAddElement(e,n){const t=this.createElement(e,n);return this.element.append(t),t}on(e,n,t){try{d(e,n,t),this.element.addEventListener(e,n,t)}catch(e){console.error(e)}}off(e,n,t){try{d(e,n,t),this.element.removeEventListener(e,n,t)}catch(e){console.error(e)}}onReady(){}onDisconnectedCallback(){}removeAllTagEventListeners(){this.tagEventListeners.forEach((e=>{this.element.removeEventListener(e.eventName,e.eventListener,e.options)}))}onTagEvent(e,n,t,o){try{d(n,t,o);const s=n=>{let o=n.target;for(;o&&o!==this.element;){if(o.getAttribute(i)===e){n.preventDefault(),n.stopPropagation();const e=o[r]?o[r]():null;t(e,o,n);break}o=o.parentElement}};this.tagEventListeners.push({tag:e,eventName:n,listener:t,eventListener:s,options:o});let u=this.element;this.element.hasAttribute("shadow")&&this.element.shadowRoot&&(u=this.element.shadowRoot),u.addEventListener(n,s,o)}catch(e){console.error(e)}}offTagEvent(e,n,t,o){try{d(n,t,o);const i=[];this.tagEventListeners.filter(((r,s)=>{const u=r.tag===e&&r.eventName===n&&r.listener===t&&r.options===o;return u&&i.push(s),u})).forEach((e=>{this.element.removeEventListener(n,e.eventListener,o)})),i.length&&(i.reverse(),i.forEach((e=>{this.tagEventListeners.splice(e,1)})))}catch(e){console.error(e)}}onTagClick(e,n,t){this.onTagEvent(e,"click",n,t)}offTagClick(e,n,t){this.offTagEvent(e,"click",n,t)}navigateToUrl(e,n){this.history.push(e,n)}navigateToPageTag(e,n){this.element.dispatchEvent(new CustomEvent("webcardinal:tags:get",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:e,callback:(e,t)=>{e?console.error(e):this.navigateToUrl(t,n)}}}))}send(e,n,t={}){let o={bubbles:!0,cancelable:!0,composed:!0,detail:n,...t};this.element.dispatchEvent(new CustomEvent(e,o))}setLegacyGetModelEventListener(){this.element.addEventListener("getModelEvent",(e=>{e.preventDefault(),e.stopImmediatePropagation();let{bindValue:n,callback:t}=e.detail;if("function"==typeof t)return function(e,n,t){e&&n[e]&&t(null,n[e]),e||t(null,n)}(n,this.model,t);t(new Error("No callback provided"))}))}setState(e){this.history.location.state=e}getState(){return this.history.location.state}setSkin(e,{save:n}={save:!0}){p()?"string"==typeof e?(n&&"localStorage"in window&&window.localStorage.setItem("webcardinal.skin",e),window.WebCardinal.state.skin=e):console.log('"skin" must be a valid non-empty string!'):console.warn("WebCardinal skin is not set by your Application!")}getSkin(){if(p())return window.WebCardinal.state.skin;console.warn("WebCardinal skin is not set by your Application!")}applySkinForCurrentPage(e){p()?"string"==typeof e?window.WebCardinal.state.page.loader.skin=e:console.log('"skin" must be a valid non-empty string!'):console.warn("WebCardinal skin is not set by your Application!")}translate(e){if(!t())return void console.warn(['Function "translate" must be called only when translations are enabled!',"Check WebCardinal.state"].join("\n"));const n=o(),i=h();if(!this.translationModel)return console.warn(`No translations found for page: "${i}" (skins: "${n}"${"default"!==n?' and "default"':""})`),e;e.startsWith("$")&&(e=e.slice(1));return b(this.translationModel,e)||(console.warn(`No translations found for chain: "${e}" (page: "${i}", skins: "${n}"${"default"!==n?' and "default"':""})`),e)}getElementByTag(e){return this.element.querySelector(`[${i}="${e}"]`)}getElementsByTag(e){return this.element.querySelectorAll(`[${i}="${e}"]`)}querySelector(e){return this.element.querySelector(e)}querySelectorAll(e){return this.element.querySelectorAll(e)}setModel(e){console.warn(['Function "setModel" is applied in a redundant manner and it is also deprecated.',"This function will be removed in a future release",'Use "this.model = <YOUR_MODEL>" instead'].join("\n")),this.model=e}setLanguage(){console.warn(['Function "setLanguage" is deprecated!','Use "setSkin" with a new skin if changing of the translations is desired'].join("\n"))}setPreferredSkin(e,{saveOption:n}={saveOption:!0}){console.warn(['Function "setPreferredSkin" is deprecated!','Use "setSkin" instead, "saveOptions" flag is now "save" (store your skin in localStorage).'].join("\n")),this.setSkin(e,{save:n})}getPreferredSkin(){return console.warn(['Function "getPreferredSkin" is deprecated!','Use "getSkin" instead!'].join("\n")),this.getSkin()}changeSkinForCurrentPage(e){console.warn(['Function "changeSkinForCurrentPage" is deprecated!','Use "applySkinForCurrentPage" instead!'].join("\n")),this.applySkinForCurrentPage(e)}}export{$ as C,s as e,w as p}