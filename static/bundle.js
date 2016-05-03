/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/stylus-loader/index.js!./main.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/stylus-loader/index.js!./main.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {\n  background: transparent;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\nbody {\n  line-height: 1;\n}\nbutton {\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  background: none;\n}\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\nnav ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none;\n}\na {\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n  color: inherit;\n  text-decoration: none;\n}\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\ndel {\n  text-decoration: line-through;\n}\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhr {\n  border: 0;\n  border-top: 1px solid #ccc;\n  display: block;\n  height: 1px;\n  margin: 1em 0;\n  padding: 0;\n}\ninput, select {\n  vertical-align: middle;\n}\n@font-face {\n  font-family: 'Moderat';\n  src: url(" + __webpack_require__(5) + ");\n  src: url(" + __webpack_require__(5) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(6) + ") format('woff2'), url(" + __webpack_require__(7) + ") format('woff'), url(" + __webpack_require__(8) + ") format('truetype'), url(" + __webpack_require__(9) + "#moderatregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Moderat Bold';\n  src: url(" + __webpack_require__(10) + ");\n  src: url(" + __webpack_require__(10) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(11) + ") format('woff2'), url(" + __webpack_require__(12) + ") format('woff'), url(" + __webpack_require__(13) + ") format('truetype'), url(" + __webpack_require__(14) + "#moderatbold) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\nhtml, body {\n  font-size: 10px;\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  font-family: 'Moderat', Helvetica, Arial, sans-serif;\n  background: #fff;\n  color: #666;\n}\n::-moz-selection {\n  background: #536dfe;\n  color: #fff;\n}\n::selection {\n  background: #536dfe;\n  color: #fff;\n}\n.about {\n  position: absolute;\n  z-index: 10;\n  top: 5rem;\n  left: 5rem;\n  font-size: 1.5rem;\n  line-height: 2em;\n}\n.about__name {\n  color: #536dfe;\n}\n.about__job {\n  color: #323232;\n}\n.about__intro a {\n  position: relative;\n  display: inline-block;\n}\n.about__intro a:after {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  bottom: 0.2rem;\n  left: 0;\n  width: 100%;\n  height: 0.1rem;\n  background: rgba(83,109,254,0.25);\n}\n.about__intro a:before {\n  content: '';\n  position: absolute;\n  z-index: 2;\n  bottom: 0.2rem;\n  left: 0;\n  width: 0;\n  height: 0.1rem;\n  background: #536dfe;\n  -webkit-transition: background, width 0.2s ease-out;\n  transition: background, width 0.2s ease-out;\n}\n.about__intro a:hover:before {\n  width: 100%;\n}\n.about__projects {\n  margin-top: 4rem;\n}\n.about__list {\n  list-style-type: none;\n}\n.about__list-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.about__list-item > a {\n  position: relative;\n  display: inline-block;\n}\n.about__list-item > a:after {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  bottom: 0.2rem;\n  left: 0;\n  width: 0;\n  height: 0.1rem;\n  background: #536dfe;\n  -webkit-transition: width 0.2s ease-out;\n  transition: width 0.2s ease-out;\n}\n.about__list-item > a:hover:after {\n  width: 100%;\n}\n.about__list-item:before {\n  content: '';\n  display: block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-right: 1rem;\n  background: #536dfe;\n}\n.social {\n  position: absolute;\n  z-index: 10;\n  bottom: 5rem;\n  left: 5rem;\n  font-size: 1.5rem;\n  line-height: 2em;\n}\n.social__list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.social__list-item {\n  margin-right: 1.5rem;\n}\n.social__list-item:last-child {\n  margin-right: 0;\n}\n.social__list-item > a {\n  position: relative;\n  display: inline-block;\n}\n.social__list-item > a:after {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  bottom: 0.2rem;\n  left: 0;\n  width: 0;\n  height: 0.1rem;\n  background: #536dfe;\n  -webkit-transition: width 0.2s ease-out;\n  transition: width 0.2s ease-out;\n}\n.social__list-item > a:hover:after {\n  width: 100%;\n}\n.projects {\n  position: absolute;\n  top: 0;\n  left: 50vw;\n  width: 50vw;\n  height: 100vh;\n}\n.projects__links {\n  position: absolute;\n  top: -2.5rem;\n  left: -18rem;\n  z-index: 3;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  color: #2e2e2e;\n}\n.projects__link {\n  position: relative;\n  margin-bottom: 2.5rem;\n  font-family: 'Moderat Bold', Helvetica, Arial, sans-serif;\n  font-size: 10rem;\n}\n.projects__link:first-child {\n  margin-left: 7rem;\n}\n.projects__link:last-child {\n  margin-bottom: 0;\n}\n.projects__link:last-child:after {\n  content: '';\n  position: absolute;\n  top: 16rem;\n  left: 15rem;\n  display: block;\n  width: 17rem;\n  height: 2rem;\n  background: #536dfe;\n  pointer-events: none;\n}\n.projects__link > time {\n  margin-left: 1.5rem;\n  vertical-align: 5.7rem;\n  font-family: 'Moderat', Helvetica, Arial, sans-serif;\n  font-size: 2rem;\n}\n.projects__visuals {\n  position: relative;\n  z-index: 2;\n  width: 25vw;\n  height: 100vh;\n  background: #666;\n  overflow: hidden;\n}\n.projects__visual {\n  position: absolute;\n  z-index: 1;\n  width: 25vw;\n  height: 100vh;\n  background: url(\"http://lorempicsum.com/simpsons/500/1920/2\") center;\n  background-size: cover;\n}\n.projects__tags {\n  position: absolute;\n  top: 50vh;\n  left: calc(25vw + 6rem);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 50vh;\n  font-family: 'Moderat', Helvetica, Arial, sans-serif;\n  font-size: 1.5rem;\n  line-height: 2em;\n}\n.projects__tags-list {\n  list-style-type: none;\n}\n.projects__tags-list-item {\n  position: relative;\n}\n.projects__tags-list-item:first-child:before {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  top: -0.4rem;\n  left: -1.2rem;\n  display: block;\n  height: 2rem;\n  width: 2rem;\n  background: #e7e7e7;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "86591867d5547c3f6ff56c8b774dd40c.eot";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "19f79ff7375a0be6105e82b4e8c63ff8.woff2";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5f091d05fd7338b1f07b557e536292d0.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "df0b5decb149bf7f8f1463fe4a84c024.ttf";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fbe6c99715227f406f4abd3b5a1938c0.svg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f780cc62da4b3e34ecbb228b512893f9.eot";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2cb0b082aa64d665f55c964b064676db.woff2";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a757a12b463c765b554731b47d19f515.woff";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89eb9240f8cff3873105ee6bb4cac566.ttf";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e9546d04bb77a7525901c1b816628ff3.svg";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);