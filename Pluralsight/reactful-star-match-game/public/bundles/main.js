/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ \"sg+I\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__[\"App\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5oeWRyYXRlKFxuICA8QXBwIGluaXRpYWxEYXRhPXt3aW5kb3cuX19SX0RBVEEuaW5pdGlhbERhdGF9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "OMmv":
/*!***************************************!*\
  !*** ./src/components/DisplayStar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"VD5/\");\n\n\n\nvar DisplayStar = function DisplayStar(props) {\n  return _Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.count).map(function (startId) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: startId,\n      className: \"star\"\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayStar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT01tdi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rpc3BsYXlTdGFyLmpzPzM4YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5jb25zdCBEaXNwbGF5U3RhciA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgVXRpbHMucmFuZ2UoMSwgcHJvcHMuY291bnQpLm1hcChzdGFydElkID0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtzdGFydElkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3RhclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBEaXNwbGF5U3RhcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///OMmv\n");

/***/ }),

/***/ "VD5/":
/*!*********************************!*\
  !*** ./src/components/Utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Math science\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length - 1)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVkQ1Ly5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1V0aWxzLmpzPzU0M2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWF0aCBzY2llbmNlXHJcbmNvbnN0IHV0aWxzID0ge1xyXG4gICAgLy8gU3VtIGFuIGFycmF5XHJcbiAgICBzdW06IGFyciA9PiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApLFxyXG4gIFxyXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgYmV0d2VlbiBtaW4gYW5kIG1heCAoZWRnZXMgaW5jbHVkZWQpXHJcbiAgICByYW5nZTogKG1pbiwgbWF4KSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtYXggLSBtaW4gKyAxIH0sIChfLCBpKSA9PiBtaW4gKyBpKSxcclxuICBcclxuICAgIC8vIHBpY2sgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXggKGVkZ2VzIGluY2x1ZGVkKVxyXG4gICAgcmFuZG9tOiAobWluLCBtYXgpID0+IG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSksXHJcbiAgXHJcbiAgICAvLyBHaXZlbiBhbiBhcnJheSBvZiBudW1iZXJzIGFuZCBhIG1heC4uLlxyXG4gICAgLy8gUGljayBhIHJhbmRvbSBzdW0gKDwgbWF4KSBmcm9tIHRoZSBzZXQgb2YgYWxsIGF2YWlsYWJsZSBzdW1zIGluIGFyclxyXG4gICAgcmFuZG9tU3VtSW46IChhcnIsIG1heCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXRzID0gW1tdXTtcclxuICAgICAgY29uc3Qgc3VtcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSBzZXRzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBjYW5kaWRhdGVTZXQgPSBzZXRzW2pdLmNvbmNhdChhcnJbaV0pO1xyXG4gICAgICAgICAgY29uc3QgY2FuZGlkYXRlU3VtID0gdXRpbHMuc3VtKGNhbmRpZGF0ZVNldCk7XHJcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlU3VtIDw9IG1heCkge1xyXG4gICAgICAgICAgICBzZXRzLnB1c2goY2FuZGlkYXRlU2V0KTtcclxuICAgICAgICAgICAgc3Vtcy5wdXNoKGNhbmRpZGF0ZVN1bSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdW1zW3V0aWxzLnJhbmRvbSgwLCBzdW1zLmxlbmd0aCAtIDEpXTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgdXRpbHM7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUJBO0FBNkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///VD5/\n");

/***/ }),

/***/ "enYR":
/*!**************************************!*\
  !*** ./src/components/PlayNumber.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayNumber = function PlayNumber(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"number\",\n    style: {\n      backgroundColor: colors[props.status]\n    },\n    onClick: function onClick() {\n      props.onClick(props.number, props.status);\n    }\n  }, props.number);\n}; // Color Theme\n\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayNumber);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5ZUi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXlOdW1iZXIuanM/N2E3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IFBsYXlOdW1iZXIgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJudW1iZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3JzW3Byb3BzLnN0YXR1c10gfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9uQ2xpY2socHJvcHMubnVtYmVyLCBwcm9wcy5zdGF0dXMpOyB9fT5cclxuICAgICAgICB7cHJvcHMubnVtYmVyfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQ29sb3IgVGhlbWVcclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgYXZhaWxhYmxlOiAnbGlnaHRncmF5JyxcclxuICAgIHVzZWQ6ICdsaWdodGdyZWVuJyxcclxuICAgIHdyb25nOiAnbGlnaHRjb3JhbCcsXHJcbiAgICBjYW5kaWRhdGU6ICdkZWVwc2t5Ymx1ZScsXHJcbiAgfTtcclxuICBcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBQbGF5TnVtYmVyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///enYR\n");

/***/ }),

/***/ "oy3Y":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DisplayStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayStar */ \"OMmv\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ \"VD5/\");\n/* harmony import */ var _PlayNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayNumber */ \"enYR\");\n/* harmony import */ var _PlayAgain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayAgain */ \"xdZa\");\n\n\n\n\n\n //Custom hoook\n\nvar useGameState = function useGameState() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(_Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].random(1, 9)),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),\n      stars = _React$useState2[0],\n      setStars = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(_Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].range(1, 9)),\n      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),\n      availableNumbers = _React$useState4[0],\n      setavailableNumbers = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState5, 2),\n      candidateNumbers = _React$useState6[0],\n      setcandidateNumbers = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(10),\n      _React$useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState7, 2),\n      secondsLeft = _React$useState8[0],\n      setSecondsLeft = _React$useState8[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    if (secondsLeft > 0 && availableNumbers.length > 0) {\n      var timerId = setTimeout(function () {\n        setSecondsLeft(secondsLeft - 1);\n      }, 1000);\n      return function () {\n        clearTimeout(timerId);\n      };\n    }\n  });\n\n  var setGameState = function setGameState(newCandiateNumbers) {\n    if (_Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sum(newCandiateNumbers) !== stars) {\n      setcandidateNumbers(newCandiateNumbers);\n    } else {\n      var newAvailableNumbers = availableNumbers.filter(function (n) {\n        return !newCandiateNumbers.includes(n);\n      }); //redraw stars (from what'is available)\n\n      setStars(_Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomSumIn(newAvailableNumbers));\n      setavailableNumbers(newAvailableNumbers);\n      setcandidateNumbers([]);\n    }\n  }; //state transition methode\n\n\n  return {\n    stars: stars,\n    availableNumbers: availableNumbers,\n    candidateNumbers: candidateNumbers,\n    secondsLeft: secondsLeft,\n    setGameState: setGameState\n  };\n};\n\nvar Game = function Game(props) {\n  var _useGameState = useGameState(),\n      stars = _useGameState.stars,\n      availableNumbers = _useGameState.availableNumbers,\n      candidateNumbers = _useGameState.candidateNumbers,\n      secondsLeft = _useGameState.secondsLeft,\n      setGameState = _useGameState.setGameState;\n\n  var candidatesAreWrong = _Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sum(candidateNumbers) > stars; // const gameIsWon= availableNumbers.length===0;\n  // const gameIsLost= secondsLeft===0;\n\n  var gameStatus = availableNumbers.length === 0 ? \"won\" : secondsLeft == 0 ? \"lost\" : \"active\"; // const resetGame = () => {\n  //   setStars(utils.random(1, 9));\n  //   setavailableNumbers(utils.range(1, 9));\n  //   setcandidateNumbers([]);\n  // }\n\n  var numberStatus = function numberStatus(number) {\n    if (!availableNumbers.includes(number)) {\n      return 'used';\n    }\n\n    if (candidateNumbers.includes(number)) {\n      return candidatesAreWrong ? 'wrong' : 'candidate';\n    }\n\n    return 'available';\n  };\n\n  var onNumberClick = function onNumberClick(number, currentStatus) {\n    //transition of machine state\n    if (gameStatus !== \"active\" || currentStatus === \"used\") {\n      return;\n    } //candidateNumbers\n    // const newCandiateNumbers= candidateNumbers.concat(number);\n\n\n    var newCandiateNumbers = currentStatus === \"available\" ? candidateNumbers.concat(number) : candidateNumbers.filter(function (cn) {\n      return cn !== number;\n    });\n    setGameState(newCandiateNumbers);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus !== \"active\" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayAgain__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: props.startNewGame,\n    gameStatus: gameStatus\n  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DisplayStar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    count: stars\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, _Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].range(1, 9).map(function (number) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayNumber__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: number,\n      status: numberStatus(number),\n      onClick: onNumberClick,\n      number: number\n    });\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondsLeft));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3kzWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUuanM/YTMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGlzcGxheVN0YXIgZnJvbSBcIi4vRGlzcGxheVN0YXJcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vVXRpbHMnO1xyXG5pbXBvcnQgUGxheU51bWJlciBmcm9tIFwiLi9QbGF5TnVtYmVyXCI7XHJcbmltcG9ydCBQbGF5QWdhaW4gZnJvbSBcIi4vUGxheUFnYWluXCI7IFxyXG5cclxuLy9DdXN0b20gaG9vb2tcclxuY29uc3QgdXNlR2FtZVN0YXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGFycywgc2V0U3RhcnNdID0gUmVhY3QudXNlU3RhdGUodXRpbHMucmFuZG9tKDEsIDkpKTtcclxuICBjb25zdCBbYXZhaWxhYmxlTnVtYmVycywgc2V0YXZhaWxhYmxlTnVtYmVyc10gPSBSZWFjdC51c2VTdGF0ZSh1dGlscy5yYW5nZSgxLCA5KSk7XHJcbiAgY29uc3QgW2NhbmRpZGF0ZU51bWJlcnMsIHNldGNhbmRpZGF0ZU51bWJlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gUmVhY3QudXNlU3RhdGUoMTApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlY29uZHNMZWZ0ID4gMCAmJiBhdmFpbGFibGVOdW1iZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0IC0gMSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBzZXRHYW1lU3RhdGUgPSAobmV3Q2FuZGlhdGVOdW1iZXJzKSA9PiB7XHJcbiAgICBpZiAodXRpbHMuc3VtKG5ld0NhbmRpYXRlTnVtYmVycykgIT09IHN0YXJzKSB7XHJcbiAgICAgIHNldGNhbmRpZGF0ZU51bWJlcnMobmV3Q2FuZGlhdGVOdW1iZXJzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdBdmFpbGFibGVOdW1iZXJzID0gYXZhaWxhYmxlTnVtYmVycy5maWx0ZXIoXHJcbiAgICAgICAgbiA9PiAhbmV3Q2FuZGlhdGVOdW1iZXJzLmluY2x1ZGVzKG4pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvL3JlZHJhdyBzdGFycyAoZnJvbSB3aGF0J2lzIGF2YWlsYWJsZSlcclxuICAgICAgc2V0U3RhcnModXRpbHMucmFuZG9tU3VtSW4obmV3QXZhaWxhYmxlTnVtYmVycykpXHJcbiAgICAgIHNldGF2YWlsYWJsZU51bWJlcnMobmV3QXZhaWxhYmxlTnVtYmVycyk7XHJcbiAgICAgIHNldGNhbmRpZGF0ZU51bWJlcnMoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy9zdGF0ZSB0cmFuc2l0aW9uIG1ldGhvZGVcclxuICByZXR1cm4geyBzdGFycywgYXZhaWxhYmxlTnVtYmVycywgY2FuZGlkYXRlTnVtYmVycywgc2Vjb25kc0xlZnQsIHNldEdhbWVTdGF0ZSB9O1xyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCB7IHN0YXJzLCBhdmFpbGFibGVOdW1iZXJzLCBjYW5kaWRhdGVOdW1iZXJzLCBzZWNvbmRzTGVmdCwgc2V0R2FtZVN0YXRlIH0gPSB1c2VHYW1lU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgY2FuZGlkYXRlc0FyZVdyb25nID0gdXRpbHMuc3VtKGNhbmRpZGF0ZU51bWJlcnMpID4gc3RhcnM7XHJcbiAgLy8gY29uc3QgZ2FtZUlzV29uPSBhdmFpbGFibGVOdW1iZXJzLmxlbmd0aD09PTA7XHJcbiAgLy8gY29uc3QgZ2FtZUlzTG9zdD0gc2Vjb25kc0xlZnQ9PT0wO1xyXG4gIGNvbnN0IGdhbWVTdGF0dXMgPSBhdmFpbGFibGVOdW1iZXJzLmxlbmd0aCA9PT0gMFxyXG4gICAgPyBcIndvblwiXHJcbiAgICA6IHNlY29uZHNMZWZ0ID09IDAgPyBcImxvc3RcIiA6IFwiYWN0aXZlXCI7XHJcblxyXG4gIC8vIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcclxuICAvLyAgIHNldFN0YXJzKHV0aWxzLnJhbmRvbSgxLCA5KSk7XHJcbiAgLy8gICBzZXRhdmFpbGFibGVOdW1iZXJzKHV0aWxzLnJhbmdlKDEsIDkpKTtcclxuICAvLyAgIHNldGNhbmRpZGF0ZU51bWJlcnMoW10pO1xyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgbnVtYmVyU3RhdHVzID0gKG51bWJlcikgPT4ge1xyXG4gICAgaWYgKCFhdmFpbGFibGVOdW1iZXJzLmluY2x1ZGVzKG51bWJlcikpIHtcclxuICAgICAgcmV0dXJuICd1c2VkJztcclxuICAgIH1cclxuICAgIGlmIChjYW5kaWRhdGVOdW1iZXJzLmluY2x1ZGVzKG51bWJlcikpIHtcclxuICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNBcmVXcm9uZyA/ICd3cm9uZycgOiAnY2FuZGlkYXRlJztcclxuICAgIH1cclxuICAgIHJldHVybiAnYXZhaWxhYmxlJztcclxuICB9O1xyXG5cclxuICBjb25zdCBvbk51bWJlckNsaWNrID0gKG51bWJlciwgY3VycmVudFN0YXR1cykgPT4ge1xyXG4gICAgLy90cmFuc2l0aW9uIG9mIG1hY2hpbmUgc3RhdGVcclxuICAgIGlmIChnYW1lU3RhdHVzICE9PSBcImFjdGl2ZVwiIHx8IGN1cnJlbnRTdGF0dXMgPT09IFwidXNlZFwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vY2FuZGlkYXRlTnVtYmVyc1xyXG4gICAgLy8gY29uc3QgbmV3Q2FuZGlhdGVOdW1iZXJzPSBjYW5kaWRhdGVOdW1iZXJzLmNvbmNhdChudW1iZXIpO1xyXG5cclxuICAgIGNvbnN0IG5ld0NhbmRpYXRlTnVtYmVycyA9XHJcbiAgICAgIGN1cnJlbnRTdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIgP1xyXG4gICAgICAgIGNhbmRpZGF0ZU51bWJlcnMuY29uY2F0KG51bWJlcikgOlxyXG4gICAgICAgIGNhbmRpZGF0ZU51bWJlcnMuZmlsdGVyKGNuID0+IGNuICE9PSBudW1iZXIpO1xyXG5cclxuICAgIHNldEdhbWVTdGF0ZShuZXdDYW5kaWF0ZU51bWJlcnMpO1xyXG5cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XHJcbiAgICAgICAgUGljayAxIG9yIG1vcmUgbnVtYmVycyB0aGF0IHN1bSB0byB0aGUgbnVtYmVyIG9mIHN0YXJzXHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVTdGF0dXMgIT09IFwiYWN0aXZlXCIgPyAoXHJcbiAgICAgICAgICAgICAgPFBsYXlBZ2FpbiBvbkNsaWNrPXtwcm9wcy5zdGFydE5ld0dhbWV9IGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8RGlzcGxheVN0YXIgY291bnQ9e3N0YXJzfSAvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICB7dXRpbHMucmFuZ2UoMSwgOSkubWFwKG51bWJlciA9PlxyXG4gICAgICAgICAgICA8UGxheU51bWJlclxyXG4gICAgICAgICAgICAgIGtleT17bnVtYmVyfVxyXG4gICAgICAgICAgICAgIHN0YXR1cz17bnVtYmVyU3RhdHVzKG51bWJlcil9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25OdW1iZXJDbGlja31cclxuICAgICAgICAgICAgICBudW1iZXI9e251bWJlcn0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+VGltZSBSZW1haW5pbmc6IHtzZWNvbmRzTGVmdH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///oy3Y\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"oy3Y\");\n\n\n\n\nvar StarMatch = function StarMatch() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),\n      gameId = _React$useState2[0],\n      setGameId = _React$useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: gameId,\n    startNewGame: function startNewGame() {\n      return setGameId(gameId + 1);\n    }\n  });\n};\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcblxuY29uc3QgU3Rhck1hdGNoID0gKCkgPT4ge1xuICBjb25zdCBbZ2FtZUlkLCBzZXRHYW1lSWRdID0gUmVhY3QudXNlU3RhdGUoMSk7XG4gIHJldHVybiA8R2FtZSBrZXk9e2dhbWVJZH0gc3RhcnROZXdHYW1lPXsoKSA9PiBzZXRHYW1lSWQoZ2FtZUlkICsgMSl9IC8+XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxTdGFyTWF0Y2ggLz5cbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "sg+I":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2crSS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8zOGE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///sg+I\n");

/***/ }),

/***/ "xdZa":
/*!*************************************!*\
  !*** ./src/components/PlayAgain.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayAgain = function PlayAgain(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === \"lost\" ? \"red\" : \"green\"\n    }\n  }, props.gameStatus === \"lost\" ? \"Game Over\" : \"Nice\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Play Again\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayAgain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGRaYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXlBZ2Fpbi5qcz9jNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUGxheUFnYWluID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWRvbmVcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiBwcm9wcy5nYW1lU3RhdHVzID09PSBcImxvc3RcIiA/IFwicmVkXCIgOiBcImdyZWVuXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3BzLmdhbWVTdGF0dXMgPT09IFwibG9zdFwiID8gXCJHYW1lIE92ZXJcIiA6IFwiTmljZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5QbGF5IEFnYWluPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBQbGF5QWdhaW47Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBUUE7QUFBQTtBQVZBO0FBQ0E7QUFjQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///xdZa\n");

/***/ })

/******/ });