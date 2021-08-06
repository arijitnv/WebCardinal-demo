import{e,c as n,f as t,g as o,V as i,b as a,F as r,k as s,l,m as c,j as f,d as u,I as d,n as h,o as p,x as b,h as m,i as y,D as v}from"./p-61cc1f50.js";import{c as x,d as $}from"./p-0c3518a5.js";function g(e,n,t){let o=null;for(;e;){if(e.matches(n)){o=e;break}if(t&&e.matches(t))break;e=e.parentElement}return o}function M(n,{key:t,value:o}){if(!e.includes(t))if(["innerHTML","innerText"].includes(t)&&console.warn(`Model property "${t}" can be short handed, try "${t.substr(5).toLowerCase()}" instead!\n`,"target element:",n),["data-tag","data-view-model"].includes(t)&&console.warn(`Model property "${t}" can be shorthanded, try "${t.substr(5)}" instead!\n`,"target model:",n.getAttribute("data-model")),function(e){return["value","innerText","innerHTML"].includes(e)}(t=function(e){switch(e){case"model":return"data-view-model";case"tag":return"data-tag";case"text":return"innerText";case"html":return"innerHTML";default:return e}}(t))){if("INPUT"===n.tagName&&"file"===n.getAttribute("type")&&"value"===t)return;n[t]=o}else if("class"!==t)"boolean"!=typeof o?"string"!=typeof o?"object"!=typeof o||(n[t]=o):n.setAttribute(t,o):o?n.setAttribute(t,""):n.removeAttribute(t);else{if(""===o)return void(n.className="");if("string"==typeof o)return void n.classList.add(o);if("object"==typeof o){for(const[e,t]of Object.entries(o))t?n.classList.add(e):n.classList.remove(e);return}}}function k(e,n){return"input"===e.tagName.toLowerCase()&&"checkbox"===e.getAttribute("type")&&"checked"===n||"value"===n}function A(e,r,s=n,l=null){t.includes(e.tagName.toLowerCase())||e.tagName.startsWith(o.toUpperCase())||Array.from(e.attributes).forEach((t=>{const o=t.nodeName;let c=t.nodeValue;o!==i&&o!==a&&c.startsWith(s)&&(c=c.slice(1),l&&(c=H(l,c)),M(e,{key:o,value:r.getChainValue(c)}),s===n&&k(e,o)&&T(e,r,c),r.onChange(c,(()=>{M(e,{key:o,value:r.getChainValue(c)})})),r.hasExpression(c)&&(M(e,{key:o,value:r.evaluateExpression(c)}),s===n&&k(e,o)&&T(e,r,c),r.onChangeExpressionChain(c,(()=>{M(e,{key:o,value:r.evaluateExpression(c)})}))))}))}function j(e){e.nodeType===Node.ELEMENT_NODE&&(e.removeAttribute("slot"),e.removeAttribute("hidden"))}function T(e,n,t){const o=e.tagName.toLowerCase();["input","textarea"].includes(o)?e.addEventListener("input",(i=>{const a=i.target;"input"!==o||"checkbox"!==e.getAttribute("type")?"input"!==o||"file"!==e.getAttribute("type")?n.setChainValue(t,a.value):n.setChainValue(t,Array.from(a.files)):n.setChainValue(t,a.checked)})):"select"===o&&e.addEventListener("change",(e=>{n.setChainValue(t,e.target.value)}))}function P(e,n,t){if(!n.getChainValue(t))return;const o="input"===e.tagName.toLowerCase()&&"checkbox"===e.getAttribute("type")?"checked":"value";T(e,n,`${t}.${o}`)}function w(e,n){return Array.from(e.attributes).some((e=>e.nodeName===n))}function N(e,n){return e.filter((e=>e.getAttribute("slot")===n))}function O(e,n){return N(e,n).map((e=>e.outerHTML)).join("")}function E(e){for(;e.children.length>0;)e.children[0].remove()}function C(e){for(;e.childNodes.length>0;)e.childNodes[0].remove()}function H(...e){return e.filter((e=>null!=e)).filter(String).join(".")}function I(e,n,t){const o=n.getChainValue(t);if(o){for(const[n,t]of Object.entries(o))M(e,{key:n,value:t});if(!0===o._saveElement){for(const n in e)"function"==typeof e[n]&&(e[n]=e[n].bind(e));o.getElement||n.setChainValue(t,Object.assign(Object.assign({},o),{getElement:()=>e}))}}if(n.hasExpression(t)){const o=n.evaluateExpression(t);for(const[n,t]of Object.entries(o))M(e,{key:n,value:t})}}function L(e){return e.nodeType===Node.ELEMENT_NODE}function V(e){return e.nodeType===Node.TEXT_NODE&&e.nodeValue&&e.nodeValue.trim()}function W(e,o,i,a=null){if(t.includes(e.nodeName.toLowerCase()))return;if(e.nodeType!==Node.TEXT_NODE||!e.nodeValue||!e.nodeValue.trim())return;const r=[...e.nodeValue.matchAll(/\{\{\s*([^\s}}]+)\s*\}\}/g)];if(!r.length)return;const s=r.map((e=>({expression:e[0],chainWithPrefix:e[1]}))).filter((({chainWithPrefix:e})=>e.startsWith(n)||e.startsWith(u))).map((e=>{let{chainWithPrefix:t}=e;const r=t.startsWith(u);let s=e.chainWithPrefix.slice(1);!r&&a&&(s=H(a,s),t=`${n}${s}`);const l=r?i:o;return Object.assign(Object.assign({},e),{chain:s,isTranslation:r,isModel:!r,isModelExpression:l.hasExpression(s),evaluateModelExpression:()=>l.evaluateExpression(s),model:l,getChainValue:()=>{let e=l.getChainValue(s);if(r&&void 0===e){const{pathname:n}=window.location,t=b();console.warn(`No translations found for skin "${t}", page "${n}" and chain "${s}"`),e=s}return e}})}));if(!s.length)return;const l=e.nodeValue,c=()=>{let n=l;s.forEach((({expression:e,getChainValue:t,isModelExpression:o,evaluateModelExpression:i})=>{let a=t();["number","boolean"].includes(typeof a)&&(a=a.toString()),!a&&o&&(a=o?i():""),n=n.replace(e,a||"")})),e.nodeValue=n};c(),s.filter((e=>e.isModel)).forEach((({model:e,chain:n,isModelExpression:t})=>{e.onChange(n,(()=>{c()})),t&&e.onChangeExpressionChain(n,(()=>{c()}))}))}const S={bindElement:(e,b={model:null,translationModel:null})=>{const{model:g,translationModel:M,chainPrefix:k,enableTranslations:T=!1,recursive:O=!1}=b;if(g){if(V(e))W(e,g,M,k);else if(L(e)){const E=e;if(t.includes(E.tagName.toLowerCase()))return;if(E.hasAttribute(m)){let e;E.hasAttribute(a)&&(e=E.getAttribute(a),(null==e?void 0:e.startsWith(n))&&(e=e.slice(1)));const t=H(k,e);E[y]=()=>g.hasExpression(t)?g.evaluateExpression(t):g.toObject(t)}const U=w(E,d),B=w(E,r);if(U&&B)console.error("Cannot use both data-if and data-for attributes on the same element",E);else if(U)!function(e,t,{model:o,translationModel:i,chainPrefix:a,enableTranslations:r=!1}={model:null,translationModel:null}){let s=e.getAttribute(d);if(!s.startsWith(n))return void console.warn(`Attribute "${d}" doesn't start with the chain prefix!`);s=s.slice(1);const l=H(a,s),c=Array.from(e.children);let f,b=N(c,h);const m=N(c,p);b.length||m.length||(b=Array.from(e.childNodes)),C(e);const y=async n=>{let s;if(n instanceof Promise)try{s=await n}catch(e){console.error("data-if condition promise failed",e),s=!1}else s=!!n;const l=f!==s;f=s,l&&(()=>{const n=f?b:m;C(e),n.forEach((n=>{const s=n.cloneNode(!0);j(s),e.appendChild(s),t(s,{model:o,translationModel:i,chainPrefix:a,enableTranslations:r,recursive:!0})}))})()};y(o.getChainValue(l)),A(e,o,n,a),r&&A(e,i,u,a),o.onChange(l,(()=>{y(o.getChainValue(l))})),o.hasExpression(l)&&(y(o.evaluateExpression(l)),o.onChangeExpressionChain(l,(()=>{y(o.evaluateExpression(l))})))}(E,S.bindElement,b);else if(B)!function(e,t,{model:o,translationModel:i,chainPrefix:a,enableTranslations:d=!1}={model:null,translationModel:null}){let h=e.getAttribute(r);if(!h.startsWith(n))return void console.warn(`Attribute "${r}" doesn't start with the chain prefix!`);h=h.slice(1);const p=H(a,h);let b=o.getChainValue(p);if(!Array.isArray(b))return void console.error(`Attribute "${r}" (${h}) must be a chain to an array in the model!`,e);let m=b.length;const y=(e.getAttribute(s)||"").split(" ").filter(String),v=y.includes(l);let g=y.includes(c);const M=[],k=[];for(;e.childNodes.length>0;){const n=e.childNodes[0];L(n)&&n.getAttribute("slot")===f?M.push(n):k.push(n),n.remove()}let T=[];const P=()=>{if(!m)return C(e),void M.forEach((n=>{const r=n.cloneNode(!0);j(r),e.appendChild(r),t(r,{model:o,translationModel:i,chainPrefix:a,enableTranslations:d,recursive:!0})}));if(g){const n=document.createElement(e.tagName),t=Array.prototype.slice.call(e.attributes);let o;for(;o=t.pop();)o.nodeName!==s&&n.setAttribute(o.nodeName,o.nodeValue);y.length>0&&n.setAttribute(s,y.join(" ")),e.insertAdjacentElement("afterend",n),e.remove(),e=n}b.forEach(((n,a)=>{const r=[];k.forEach((e=>{const n=e.cloneNode(!0),s=H(p,a);t(n,{model:o,translationModel:i,chainPrefix:s,enableTranslations:d,recursive:!0}),r.push(n)})),T[a]?r.forEach(((e,n)=>{document.createElement("div").appendChild(T[a][n].cloneNode(!0));const t=x(e),o=x(T[a][n]);$(t,o,T[a][n])})):(r.forEach((n=>{e.appendChild(n)})),T[a]=r)}));for(let e=m;e<T.length;e++)T[e].forEach((e=>{C(e),e.remove()}));T.splice(m)},w=(n,t=!1)=>{Array.isArray(n)||(n=[]);const o=m!==(n=n||[]).length;b=n,m=b.length,v?P():(t||o)&&(C(e),T=[],P())};P(),A(e,o,n,a),d&&A(e,i,u,a);const N=({targetChain:e,chain:n})=>{if(void 0===o.getChainValue(p))return void o.offChange(n,N);const t=p===e;w(o.getChainValue(p),t)};o.onChange(p,N),o.hasExpression(p)&&o.onChangeExpressionChain(p,(()=>{w(o.evaluateExpression(p))}))}(E,S.bindElement,b);else{const e=E.hasAttribute(i),t=E.hasAttribute(a);if(!E.hasAttribute(v)){if(e||t){let o;if(e?o=E.getAttribute(i):(console.warn(`Attribute "${a}" is deprecated for binding! Use the "${i}" key attribute instead.`,E),o=E.getAttribute(a)),o.startsWith(n)){o=o.slice(1);const e=H(k,o);E.setAttribute(i,`${n}${e}`),t&&E.setAttribute(a,`${n}${e}`),I(E,g,e),P(E,g,e),g.onChange(e,(()=>I(E,g,e))),g.hasExpression(e)&&g.onChangeExpressionChain(e,(()=>I(E,g,e)))}else console.warn(`Invalid chain found! (chain: "${o}")!\n`,`A valid chain must start with "${n}".\n`,"target element:",E)}E.tagName.startsWith(o.toUpperCase())||A(E,g,n,k),T&&A(E,M,u,k),Array.from(E.childNodes).filter(V).forEach((e=>{W(e,g,M,k)}))}O&&Array.from(E.children).forEach((e=>{S.bindElement(e,b)}))}}}else{const n=L(e)?e.tagName.toLowerCase():"text node";console.warn(`No model found for: ${n}!`)}},bindChildNodes:(e,n)=>{Array.from(e.childNodes).forEach((e=>{S.bindElement(e,Object.assign({},n))}))}};export{S as B,T as a,A as b,P as c,N as d,O as e,E as f,g,C as h,w as i,H as j,j as r,M as s}