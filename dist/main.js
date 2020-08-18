/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n.custom-select {\\n  position: relative;\\n  cursor: pointer;\\n  background: white;\\n  color: black;\\n  padding: 0.4rem 0.6rem;\\n  border: 1px solid black;\\n  border-radius: 2px; }\\n  .custom-select.focus {\\n    box-shadow: 0 0 5px #2979ff; }\\n  .custom-select > span.selected {\\n    display: inline-block;\\n    background: white;\\n    color: black; }\\n  .custom-select:after {\\n    content: \\\"⯆\\\";\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    padding: 0.4rem 0.6rem; }\\n  .custom-select > .options {\\n    left: 0;\\n    top: calc(100% + 1px);\\n    width: 100%;\\n    position: absolute;\\n    padding: 0;\\n    margin: 0;\\n    z-index: 10;\\n    background: white;\\n    color: black;\\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\\n    border-radius: 2px;\\n    display: none; }\\n    .custom-select > .options.active {\\n      display: block; }\\n    .custom-select > .options > li {\\n      cursor: pointer;\\n      list-style: none;\\n      padding: 0.4rem 0.6rem;\\n      background: white;\\n      color: black; }\\n      .custom-select > .options > li.selected {\\n        background: #2979ff;\\n        color: white; }\\n      .custom-select > .options > li:hover {\\n        background: rgba(41, 121, 255, 0.5);\\n        color: white; }\\n  .custom-select > select {\\n    position: absolute;\\n    pointer-events: none;\\n    opacity: 0; }\\n\\n.custom-input-number {\\n  position: relative;\\n  overflow: hidden;\\n  cursor: text;\\n  background: white;\\n  color: black;\\n  padding: 0.4rem 0.6rem;\\n  border: 1px solid black;\\n  border-radius: 2px; }\\n  .custom-input-number.focus {\\n    box-shadow: 0 0 5px #2979ff; }\\n  .custom-input-number > input[type=\\\"number\\\"] {\\n    border: none;\\n    outline: none;\\n    margin: 0;\\n    margin-right: -100vw;\\n    width: calc(100% + 100vw); }\\n  .custom-input-number > .controls {\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column; }\\n    .custom-input-number > .controls > .up, .custom-input-number > .controls > .down {\\n      height: 50%;\\n      text-align: center;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      font-style: normal;\\n      cursor: pointer;\\n      background: white;\\n      color: black; }\\n      .custom-input-number > .controls > .up:hover, .custom-input-number > .controls > .down:hover {\\n        background: rgba(41, 121, 255, 0.5);\\n        color: white; }\\n    .custom-input-number > .controls > .up:before {\\n      content: \\\"⯅\\\"; }\\n    .custom-input-number > .controls > .down:before {\\n      content: \\\"⯆\\\"; }\\n\\n.custom-input-checkbox {\\n  background: white;\\n  color: black;\\n  padding: 0.4rem 0.6rem;\\n  border: 1px solid black;\\n  border-radius: 2px;\\n  padding: 0;\\n  position: relative;\\n  display: inline-block;\\n  line-height: 0;\\n  overflow: hidden;\\n  cursor: pointer; }\\n  .custom-input-checkbox.focus {\\n    box-shadow: 0 0 5px #2979ff; }\\n  .custom-input-checkbox > input[type=\\\"checkbox\\\"] {\\n    opacity: 0;\\n    cursor: pointer;\\n    min-width: 100%;\\n    min-height: 100%; }\\n  .custom-input-checkbox:before {\\n    content: \\\"\\\";\\n    transition: all 0.2s ease-out;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    pointer-events: none; }\\n  .custom-input-checkbox.active:before {\\n    content: \\\"✓\\\";\\n    background: #2979ff;\\n    color: white; }\\n  .custom-input-checkbox.hover:before {\\n    background: rgba(41, 121, 255, 0.5);\\n    color: white; }\\n\\n.custom-input-radio {\\n  background: white;\\n  color: black;\\n  padding: 0.4rem 0.6rem;\\n  border: 1px solid black;\\n  border-radius: 2px;\\n  padding: 0;\\n  position: relative;\\n  display: inline-block;\\n  line-height: 0;\\n  overflow: hidden;\\n  cursor: pointer;\\n  border-radius: 50%; }\\n  .custom-input-radio.focus {\\n    box-shadow: 0 0 5px #2979ff; }\\n  .custom-input-radio > input[type=\\\"radio\\\"] {\\n    opacity: 0;\\n    cursor: pointer;\\n    min-width: 100%;\\n    min-height: 100%; }\\n  .custom-input-radio:before {\\n    content: \\\"\\\";\\n    transition: all 0.2s ease-out;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    pointer-events: none; }\\n  .custom-input-radio.active:before {\\n    content: \\\"✓\\\";\\n    background: #2979ff;\\n    color: white; }\\n  .custom-input-radio.hover:before {\\n    background: rgba(41, 121, 255, 0.5);\\n    color: white; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./src/custom-element.js":
/*!*******************************!*\
  !*** ./src/custom-element.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomElement; });\nclass CustomElement {\r\n    constructor(el, className='custom-element'){\r\n        this.className = className\r\n\r\n        this.wrap(el)\r\n        this.bindEvents()\r\n        // build\r\n    }\r\n\r\n    /**\r\n     * Wrap element inside a container with config.className\r\n     */\r\n    wrap(el){\r\n        this.el = el\r\n        let index = [...el.parentElement.children].indexOf(el)\r\n        this.container = document.createElement('div')\r\n        el.parentElement.insertBefore(this.container, el)\r\n        this.container.appendChild(el)\r\n        this.container.className = this.className\r\n        this.container.classList.add('custom-element')\r\n    }\r\n    bindEvents(){\r\n        this.el.addEventListener('focusin', (e)=>{\r\n            this.container.classList.add('focus')\r\n        })\r\n        this.el.addEventListener('focusout', (e)=>{\r\n            this.container.classList.remove('focus')\r\n        })\r\n    }\r\n\r\n    setStyles(styles, el=null){\r\n        if(!el) el = this.container\r\n        for(let key in styles) el.style[key] = `${styles[key]}`\r\n    }\r\n\r\n    setElStyles(styles){\r\n        this.setStyles(styles, this.el)\r\n    }\r\n\r\n    triggerEvent(name){\r\n        if (\"createEvent\" in document) {\r\n            var evt = document.createEvent(\"HTMLEvents\");\r\n            evt.initEvent(name, true, true);\r\n            this.el.dispatchEvent(evt);\r\n        }\r\n        else\r\n            this.el.fireEvent(`on${name}`);\r\n    }\r\n\r\n    triggerChange(){\r\n        this.triggerEvent('input')\r\n        this.triggerEvent('change')\r\n        this.triggerEvent('keyup')\r\n    }\r\n\r\n    /**\r\n     * Try to bind a label given el.id\r\n     */\r\n    hasLabel(){\r\n        if(this.el.id) this.label = document.querySelector(`label[for=\"${this.el.id}\"]`)\r\n\r\n        this.container.addEventListener('mouseenter', (e)=>{\r\n            this.container.classList.add('hover')\r\n        })\r\n\r\n        this.container.addEventListener('mouseleave', (e)=>{\r\n            this.container.classList.remove('hover')\r\n        })\r\n\r\n        if(this.label) {\r\n            this.label.addEventListener('mouseenter', (e)=>{\r\n                this.container.classList.add('hover')\r\n            })\r\n\r\n            this.label.addEventListener('mouseleave', (e)=>{\r\n                this.container.classList.remove('hover')\r\n            })\r\n        }\r\n\r\n    }\r\n\r\n    getPreviousFormField(){\r\n        let formFields = [...document.querySelectorAll('input,select,textarea')]\r\n        let previousIndex = formFields.indexOf(this.el) - 1\r\n        if(previousIndex < 0) previousIndex = formFields.length - 1\r\n        return formFields[previousIndex]\r\n    }\r\n    getNextFormField(){\r\n        let formFields = [...document.querySelectorAll('input,select,textarea')]\r\n        let nextIndex = formFields.indexOf(this.el) + 1\r\n        if(nextIndex > formFields.length - 1) nextIndex = 0\r\n        return formFields[nextIndex]\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/custom-element.js?");

/***/ }),

/***/ "./src/custom-fields.js":
/*!******************************!*\
  !*** ./src/custom-fields.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomFields; });\n/* harmony import */ var _custom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-select */ \"./src/custom-select.js\");\n/* harmony import */ var _custom_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-input-number */ \"./src/custom-input-number.js\");\n/* harmony import */ var _custom_input_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-input-checkbox */ \"./src/custom-input-checkbox.js\");\n/* harmony import */ var _custom_input_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-input-radio */ \"./src/custom-input-radio.js\");\n\r\n\r\n\r\n\r\n\r\nclass CustomFields {\r\n    constructor(selector){\r\n        this.selector = selector\r\n        this.className = 'custom-element'\r\n        this.build()\r\n        this.bindObserver()\r\n    }\r\n\r\n    bindObserver(){\r\n        this.observer = new MutationObserver(()=>{\r\n            this.build()\r\n        })\r\n        this.observer.observe(document.body, {\r\n            attributes: false,\r\n            childList: true,\r\n            subtree: true\r\n        })\r\n    }\r\n\r\n    build(){\r\n        this.els = [...document.querySelectorAll(this.selector)]\r\n        this.els.map(el => {\r\n            // already bound\r\n            if(el.parentElement.classList.contains(this.className)) return false;\r\n\r\n            if(el.tagName == 'INPUT' && el.type == 'number') new _custom_input_number__WEBPACK_IMPORTED_MODULE_1__[\"default\"](el)\r\n            if(el.tagName == 'INPUT' && el.type == 'checkbox') new _custom_input_checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"](el)\r\n            if(el.tagName == 'INPUT' && el.type == 'radio') new _custom_input_radio__WEBPACK_IMPORTED_MODULE_3__[\"default\"](el)\r\n            if(el.tagName == 'SELECT') new _custom_select__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el)\r\n\r\n        })\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/custom-fields.js?");

/***/ }),

/***/ "./src/custom-input-checkbox.js":
/*!**************************************!*\
  !*** ./src/custom-input-checkbox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomInputNumber; });\n/* harmony import */ var _custom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-element */ \"./src/custom-element.js\");\n\r\nclass CustomInputNumber extends _custom_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(el){\r\n        super(el, 'custom-input-checkbox')\r\n        \r\n        this.hasLabel()\r\n\r\n        this.bind()\r\n    }\r\n\r\n    bind(){\r\n        this.el.addEventListener('click', ()=>{\r\n            if(this.el.checked) this.container.classList.add('active')\r\n            else this.container.classList.remove('active')\r\n        })\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/custom-input-checkbox.js?");

/***/ }),

/***/ "./src/custom-input-number.js":
/*!************************************!*\
  !*** ./src/custom-input-number.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomInputNumber; });\n/* harmony import */ var _custom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-element */ \"./src/custom-element.js\");\n\r\nclass CustomInputNumber extends _custom_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(el){\r\n        super(el, 'custom-input-number')\r\n\r\n        this.build()\r\n        this.bind()\r\n    }\r\n\r\n    build(){\r\n        this.controls = document.createElement('div')\r\n        this.controls.className = 'controls'\r\n\r\n        this.up = document.createElement('i')\r\n        this.down = document.createElement('i')\r\n        this.up.className = 'up'\r\n        this.down.className = 'down'\r\n\r\n        this.controls.appendChild(this.up)\r\n        this.controls.appendChild(this.down)\r\n        this.container.appendChild(this.controls)\r\n    }\r\n\r\n    bind(){\r\n        let step = this.el.getAttribute('step')\r\n        let min = this.el.getAttribute('min')\r\n        let max = this.el.getAttribute('max')\r\n\r\n        if(min === null) min = 0\r\n        if(max === null) max = null\r\n        if(step === null) step = 1\r\n\r\n        if(step) step = parseFloat(step)\r\n\r\n        this.container.addEventListener('click', ()=>{\r\n            this.el.focus()\r\n        })\r\n\r\n        this.up.addEventListener('click', ()=>{\r\n            this.el.value = parseFloat(this.el.value) + step\r\n            if( max !== null && this.el.value > max) this.el.value = max\r\n            this.triggerChange()\r\n        })\r\n        this.down.addEventListener('click', ()=>{\r\n            this.el.value = parseFloat(this.el.value) - step\r\n            if( min !== null && this.el.value < min) this.el.value = min\r\n            this.triggerChange()\r\n        })\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/custom-input-number.js?");

/***/ }),

/***/ "./src/custom-input-radio.js":
/*!***********************************!*\
  !*** ./src/custom-input-radio.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomInputRadio; });\n/* harmony import */ var _custom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-element */ \"./src/custom-element.js\");\n\r\n\r\nclass CustomInputRadio extends _custom_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(el){\r\n        super(el, 'custom-input-radio')\r\n\r\n        this.hasLabel()\r\n\r\n        this.bind()\r\n    }\r\n\r\n    bind(){\r\n        this.el.addEventListener('change', (e)=>{\r\n            let siblings = [...document.querySelectorAll(`input[type=\"radio\"][name=\"${this.el.name}\"]`)]\r\n            siblings.map(el => {\r\n                if(el.checked) el.parentElement.classList.add('active')\r\n                else el.parentElement.classList.remove('active')\r\n            })\r\n        })\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/custom-input-radio.js?");

/***/ }),

/***/ "./src/custom-select.js":
/*!******************************!*\
  !*** ./src/custom-select.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomSelect; });\n/* harmony import */ var _custom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-element */ \"./src/custom-element.js\");\n\r\nclass CustomSelect extends _custom_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(el){\r\n        super(el, 'custom-select')\r\n\r\n        this.shiftState = false\r\n\r\n        this.build()\r\n        this.bind()\r\n    }\r\n\r\n    build(){\r\n\r\n        this.selected = document.createElement('span')\r\n        this.selected.className = 'selected'\r\n        this.container.appendChild(this.selected)\r\n\r\n        this.optionsList = document.createElement('ul')\r\n\r\n        let opts = [...this.el.options]\r\n        opts.map(opt => {\r\n            let option = document.createElement('li')\r\n            option.innerHTML = opt.innerHTML\r\n            option.setAttribute('data-value', opt.value)\r\n            this.optionsList.appendChild(option)\r\n            if(opt.selected) this.setSelected(option)\r\n        })\r\n        this.optionsList.className = 'options'\r\n        this.container.appendChild(this.optionsList)\r\n\r\n    }\r\n\r\n    setSelected(option){\r\n        this.clearSelected()\r\n        this.selected.innerHTML = option.innerHTML\r\n        option.classList.add('selected')\r\n        this.el.value = option.getAttribute('data-value')\r\n        this.triggerChange()\r\n    }\r\n\r\n    clearSelected(){\r\n        let options = [...this.optionsList.children]\r\n        options.map(opt => opt.classList.remove('selected'))\r\n        this.el.value = null\r\n    }\r\n\r\n    bind(){\r\n\r\n        let options = [...this.optionsList.children]\r\n        options.map(opt => {\r\n            opt.addEventListener('click', ()=>{\r\n                this.setSelected(opt)\r\n                this.close()\r\n                window.removeEventListener('click', focusOut)\r\n                window.removeEventListener('keyup', keyup)\r\n                window.removeEventListener('keydown', keydown)\r\n            })\r\n        })\r\n\r\n        /**\r\n         * Temporary events\r\n         */\r\n        let keyup = (e)=>{\r\n\r\n            if(e.key == 'ArrowDown') this.onArrowDown()\r\n            if(e.key == 'ArrowUp') this.onArrowUp()\r\n            if(e.key == 'Enter') {\r\n                this.close()\r\n                window.removeEventListener('click', focusOut)\r\n                window.removeEventListener('keyup', keyup)\r\n                window.removeEventListener('keydown', keydown)\r\n            }\r\n            e.preventDefault()\r\n        }\r\n\r\n        let keydown = (e)=>{\r\n            e.preventDefault()\r\n        }\r\n\r\n        let focusOut = (e)=>{\r\n            if(!this.container.contains(e.target)) {\r\n                this.close()\r\n                window.removeEventListener('click', focusOut)\r\n                window.removeEventListener('keyup', keyup)\r\n                window.removeEventListener('keydown', keydown)\r\n            }\r\n        }\r\n\r\n        this.el.addEventListener('focusin', (e)=>{\r\n            this.open()\r\n            window.addEventListener('click', focusOut)\r\n            window.addEventListener('keyup', keyup)\r\n            window.addEventListener('keydown', keydown)\r\n        })\r\n\r\n        this.container.addEventListener('click', (e)=>{\r\n            if(this.optionsList.contains(e.target)) return false;\r\n            this.open()\r\n            window.addEventListener('click', focusOut)\r\n            window.addEventListener('keyup', keyup)\r\n            window.addEventListener('keydown', keydown)\r\n        })\r\n\r\n        document.addEventListener('keyup', (e)=>{ if(e.key == 'Shift') this.shiftState = false })\r\n        document.addEventListener('keydown', (e)=>{ if(e.key == 'Shift') this.shiftState = true })\r\n    }\r\n\r\n    open(){\r\n        this.optionsList.classList.add('active')\r\n    }\r\n\r\n    close(){\r\n        this.optionsList.classList.remove('active')\r\n    }\r\n\r\n    onArrowUp(){\r\n        if(this.el.selectedIndex - 1 >= 0) this.setSelected(this.optionsList.children[this.el.selectedIndex - 1])\r\n    }\r\n\r\n    onArrowDown(){\r\n        if(this.el.selectedIndex + 1 < this.optionsList.children.length) this.setSelected(this.optionsList.children[this.el.selectedIndex + 1])\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/custom-select.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _custom_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-fields */ \"./src/custom-fields.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_custom_fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n    new _custom_fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('select')\r\n    new _custom_fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('input')\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });