!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var i=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function c(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],a=t.base?r[0]+t.base:r[0],l=n[a]||0,u="".concat(a," ").concat(l);n[a]=l+1;var d=c(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:u,updater:b(p,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function b(e,t){var n,i,o;if(t.singleton){var r=m++;n=f||(f=l(t)),i=p.bind(null,n,r,!1),o=p.bind(null,n,r,!0)}else n=l(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=c(n[i]);s[o].references--}for(var r=a(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=r}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'.custom-select{position:relative;cursor:pointer;background:#fff;color:#000;padding:0.4rem 0.6rem;border:1px solid #000;border-radius:2px}.custom-select>span.selected{display:inline-block;background:#fff;color:#000}.custom-select:after{content:"⯆";position:absolute;right:0;top:0;padding:0.4rem 0.6rem}.custom-select>.options{left:0;top:calc(100% + 1px);width:100%;position:absolute;padding:0;margin:0;z-index:10;background:#fff;color:#000;box-shadow:0 2px 2px rgba(0,0,0,0.2);border-radius:2px;display:none}.custom-select>.options.active{display:block}.custom-select>.options>li{cursor:pointer;list-style:none;padding:0.4rem 0.6rem;background:#fff;color:#000}.custom-select>.options>li.selected{background:#2979ff;color:#fff}.custom-select>.options>li:hover{background:rgba(41,121,255,0.5);color:#fff}.custom-select>select{display:none !important}.custom-input-number{position:relative;overflow:hidden;cursor:text;background:#fff;color:#000;padding:0.4rem 0.6rem;border:1px solid #000;border-radius:2px}.custom-input-number>input[type="number"]{border:none;outline:none;margin:0;margin-right:-100vw;width:calc(100% + 100vw)}.custom-input-number>.controls{position:absolute;right:0;top:0;height:100%;display:flex;flex-direction:column}.custom-input-number>.controls>.up,.custom-input-number>.controls>.down{height:50%;text-align:center;display:flex;justify-content:center;align-items:center;font-style:normal;cursor:pointer;background:#fff;color:#000}.custom-input-number>.controls>.up:hover,.custom-input-number>.controls>.down:hover{background:rgba(41,121,255,0.5);color:#fff}.custom-input-number>.controls>.up:before{content:"⯅"}.custom-input-number>.controls>.down:before{content:"⯆"}.custom-input-checkbox{background:#fff;color:#000;padding:0.4rem 0.6rem;border:1px solid #000;border-radius:2px;padding:0;position:relative;display:inline-block;line-height:0;overflow:hidden;cursor:pointer}.custom-input-checkbox>input[type="checkbox"]{opacity:0;cursor:pointer;min-width:100%;min-height:100%}.custom-input-checkbox:before{content:"";transition:all 0.2s ease-out;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.custom-input-checkbox.active:before{content:"✓";background:#2979ff;color:#fff}.custom-input-checkbox:hover:before{background:rgba(41,121,255,0.5);color:#fff}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(s=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var s,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);i&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);class i{constructor(e,t="custom-element"){this.className=t,this.wrap(e)}wrap(e){this.el=e;[...e.parentElement.children].indexOf(e);this.container=document.createElement("div"),e.parentElement.insertBefore(this.container,e),this.container.appendChild(e),this.container.className=this.className,this.container.classList.add("custom-element")}setStyles(e,t=null){t||(t=this.container);for(let n in e)t.style[n]=""+e[n]}setElStyles(e){this.setStyles(e,this.el)}triggerEvent(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),this.el.dispatchEvent(t)}else this.el.fireEvent("on"+e)}triggerChange(){this.triggerEvent("input"),this.triggerEvent("change"),this.triggerEvent("keyup")}}class o extends i{constructor(e){super(e,"custom-select"),this.build(),this.bind()}build(){this.setElStyles({display:"none"}),this.selected=document.createElement("span"),this.selected.className="selected",this.container.appendChild(this.selected),this.optionsList=document.createElement("ul"),[...this.el.options].map(e=>{let t=document.createElement("li");t.innerHTML=e.innerHTML,t.setAttribute("data-value",e.value),this.optionsList.appendChild(t),e.selected&&this.setSelected(t)}),this.optionsList.className="options",this.container.appendChild(this.optionsList)}setSelected(e){this.clearSelected(),this.selected.innerHTML=e.innerHTML,e.classList.add("selected"),this.el.value=e.getAttribute("data-value"),this.triggerChange()}clearSelected(){[...this.optionsList.children].map(e=>e.classList.remove("selected")),this.el.value=null}bind(){let e=t=>{this.container.contains(t.target)||(this.close(),window.removeEventListener("click",e))};[...this.optionsList.children].map(e=>{e.addEventListener("click",()=>{this.setSelected(e),this.close()})}),this.container.addEventListener("click",t=>{if(this.optionsList.contains(t.target))return!1;this.open(),window.addEventListener("click",e)})}open(){this.optionsList.classList.add("active")}close(){this.optionsList.classList.remove("active")}}class r extends i{constructor(e){super(e,"custom-input-number"),this.build(),this.bind()}build(){this.controls=document.createElement("div"),this.controls.className="controls",this.up=document.createElement("i"),this.down=document.createElement("i"),this.up.className="up",this.down.className="down",this.controls.appendChild(this.up),this.controls.appendChild(this.down),this.container.appendChild(this.controls)}bind(){let e=this.el.getAttribute("step"),t=this.el.getAttribute("min"),n=this.el.getAttribute("max");null===t&&(t=0),null===n&&(n=null),null===e&&(e=1),e&&(e=parseFloat(e)),this.container.addEventListener("click",()=>{this.el.focus()}),this.up.addEventListener("click",()=>{this.el.value=parseFloat(this.el.value)+e,null!==n&&this.el.value>n&&(this.el.value=n),this.triggerChange()}),this.down.addEventListener("click",()=>{this.el.value=parseFloat(this.el.value)-e,null!==t&&this.el.value<t&&(this.el.value=t),this.triggerChange()})}}class s extends i{constructor(e){super(e,"custom-input-checkbox"),this.bind()}bind(){this.el.addEventListener("click",()=>{this.el.checked?this.container.classList.add("active"):this.container.classList.remove("active")})}}class c{constructor(e){this.selector=e,this.className="custom-element",this.build(),this.bindObserver()}bindObserver(){this.observer=new MutationObserver(()=>{this.build()}),this.observer.observe(document.body,{attributes:!1,childList:!0,subtree:!0})}build(){this.els=[...document.querySelectorAll(this.selector)],this.els.map(e=>{if(e.parentElement.classList.contains(this.className))return!1;"INPUT"==e.tagName&&"number"==e.type&&new r(e),"INPUT"==e.tagName&&"checkbox"==e.type&&new s(e),"SELECT"==e.tagName&&new o(e)})}}n(0),t.default=c;document.addEventListener("DOMContentLoaded",()=>{new c("select"),new c("input")})}]);