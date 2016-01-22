/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var FEditor;
	
	__webpack_require__(2);
	
	FEditor = __webpack_require__(6);
	
	if (typeof module !== "undefined" && module !== null) {
	  module.exports = FEditor;
	}
	
	if (typeof window !== "undefined" && window !== null) {
	  window.FEditor = FEditor;
	  window.addEventListener('load', function() {
	    return FEditor('.f-editor');
	  });
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./f-editor.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./f-editor.styl");
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
	exports.push([module.id, ".f-editor {\n  padding: 1rem;\n  margin: 0px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  border: 1px solid #808080;\n}\n.f-editor.show-tags b::before {\n  content: '[b]';\n}\n.f-editor.show-tags b::after {\n  content: '[/b]';\n}\n.f-editor.show-tags i::before {\n  content: '[i]';\n}\n.f-editor.show-tags i::after {\n  content: '[/i]';\n}\n.f-editor.show-tags s::before {\n  content: '[s]';\n}\n.f-editor.show-tags s::after {\n  content: '[/s]';\n}\n.f-editor.show-tags u::before {\n  content: '[u]';\n}\n.f-editor.show-tags u::after {\n  content: '[/u]';\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
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
		var sourceMap = obj.sourceMap;
	
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
		var media = obj.media;
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var FEditor, React, Toolbar, debounce, dom, parse;
	
	React = dom = __webpack_require__(7);
	
	parse = __webpack_require__(8);
	
	debounce = __webpack_require__(9).debounce;
	
	Toolbar = __webpack_require__(10);
	
	FEditor = module.exports = function(editor) {
	  var handle, node, toolbar;
	  if (typeof editor === 'string') {
	    return (function() {
	      var i, len, ref, results;
	      ref = document.querySelectorAll(editor);
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        node = ref[i];
	        results.push(FEditor(node));
	      }
	      return results;
	    })();
	  }
	  dom(editor, {
	    contentEditable: true,
	    style: {
	      whiteSpace: 'pre-wrap'
	    }
	  });
	  toolbar = Toolbar(editor);
	  handle = debounce(200, function() {
	    return console.log(parse(editor));
	  });
	  dom.on(editor, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', handle);
	  return editor;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	var dom,
	  slice = [].slice,
	  hasProp = {}.hasOwnProperty;
	
	dom = module.exports = function() {
	  var attributeKey, attributeValue, child, children, element, i, len, options, ref;
	  element = arguments[0], options = arguments[1], children = 3 <= arguments.length ? slice.call(arguments, 2) : [];
	  if (typeof element === 'string') {
	    element = document.createElement(element);
	  }
	  ref = options || {};
	  for (attributeKey in ref) {
	    if (!hasProp.call(ref, attributeKey)) continue;
	    attributeValue = ref[attributeKey];
	    if (/^on/.test(attributeKey)) {
	      dom.on(element, attributeKey, attributeValue);
	    } else if (attributeKey === 'style') {
	      dom.style(element, attributeValue);
	    } else if (attributeKey === 'className') {
	      dom.className(element, attributeValue);
	    } else {
	      if (attributeValue === true) {
	        dom.className(element, attributeKey);
	      }
	      element[attributeKey] = attributeValue;
	    }
	  }
	  if (children.length) {
	    for (i = 0, len = children.length; i < len; i++) {
	      child = children[i];
	      element.appendChild((typeof child === 'string' ? document.createTextNode(child) : child));
	    }
	  }
	  return element;
	};
	
	Object.assign(dom, {
	  dom: dom,
	  createElement: dom,
	  className: function(element, classNames) {
	    var className, classes, i, len;
	    classes = new Set(element.className.split(/\w+/g));
	    if (!Array.isArray(classNames)) {
	      classNames = classNames.split(/\w+/g);
	    }
	    for (i = 0, len = classNames.length; i < len; i++) {
	      className = classNames[i];
	      if (/^!/.test(className)) {
	        classes.remove(className.substring(1));
	      } else if (/^~/.test(className)) {
	        className = className.substring(1);
	        if (classes.has(className)) {
	          classes.remove(className);
	        } else {
	          classes.add(className);
	        }
	      } else {
	        classes.add(className);
	      }
	    }
	    return element.className = Array.from(classes).join(' ');
	  },
	  on: function(element, types, handler) {
	    var i, len, type;
	    if (typeof types === 'string') {
	      types = types.split(/\s+/g);
	    }
	    for (i = 0, len = types.length; i < len; i++) {
	      type = types[i];
	      if (!(type)) {
	        continue;
	      }
	      if (/^on/i.test(type)) {
	        type = type.substring(2);
	      }
	      element.addEventListener(type, handler);
	    }
	    return function() {
	      return dom.off(element, types, handler);
	    };
	  },
	  off: function(element, types, handler) {
	    var results, type;
	    if (typeof types === 'string') {
	      types = types.split(/\s+/g);
	    }
	    results = [];
	    for (type in types) {
	      if (/^on/i.test(type)) {
	        type = type.substring(2);
	      }
	      results.push(element.removeEventListener(type, handler));
	    }
	    return results;
	  },
	  style: function(element, styles) {
	    var results, style, value;
	    if (typeof styles === 'string') {
	      return element.style = styles;
	    } else {
	      results = [];
	      for (style in styles) {
	        if (!hasProp.call(styles, style)) continue;
	        value = styles[style];
	        results.push(element.style[style] = value);
	      }
	      return results;
	    }
	  }
	});


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(editor) {
	  return console.log(editor.textContent);
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	var slice = [].slice;
	
	module.exports = {
	  debounce: function(delay, fn) {
	    var last, waiting;
	    waiting = false;
	    last = 0;
	    return function() {
	      var args;
	      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	      if (!waiting) {
	        waiting = true;
	        return setTimeout((function(_this) {
	          return function() {
	            waiting = false;
	            last = Date.now();
	            return fn.apply(_this, args);
	          };
	        })(this), last - Date.now() + delay);
	      }
	    };
	  }
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var React, dom;
	
	React = dom = __webpack_require__(7);
	
	module.exports = function(editor) {
	  return React.createElement("div", null, React.createElement("button", {
	    "button": true,
	    "ui-button": true,
	    "ui-widget": true,
	    "ui-state-default": true,
	    "ui-corner-all": true,
	    "onclick": (function() {
	      return dom["class"](editor, '~show-tags');
	    })
	  }, " Show Tags "));
	};


/***/ }
/******/ ]);
//# sourceMappingURL=f-editor.js.map