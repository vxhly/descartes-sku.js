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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Descartes = function () {
	  /**
	   * [constructor 初始化]
	   * @method constructor
	   * @param  {[Array]}    arr [[Array1,Array2,Array3,...]]
	   */
	  function Descartes(arr) {
	    _classCallCheck(this, Descartes);

	    if (!Array.isArray(arr)) throw new TypeError();else this._arr = arr;
	  }

	  _createClass(Descartes, [{
	    key: "descartes_2",
	    value: function descartes_2() {
	      var arr = this._arr;
	      var end = arr.length - 1;
	      var result = [];

	      var recursive = function recursive(curr, start) {
	        var first = arr[start];
	        var last = start === end;
	        for (var i = 0; i < first.length; ++i) {
	          var copy = curr.slice();
	          copy.push(first[i]);
	          if (last) {
	            result.push(copy);
	          } else {
	            recursive(copy, start + 1);
	          }
	        }
	      };

	      if (arr.length) recursive([], 0);else result.push([]);

	      return result;
	    }

	    /**
	     * [descartes_1 入口函数]
	     * @method descartes_1
	     * @return {[Array]}  [Array|[Array1,Array2,Array3,...]]
	     */

	  }, {
	    key: "descartes_1",
	    value: function descartes_1() {
	      var arr = this._arr;
	      var result = [];

	      if (!arr) return [];
	      if (arr.length <= 0) return [];
	      if (arr.length === 1) result = this.descartes1(arr[0]);
	      if (arr.length === 2) result = this.descartes2(arr[0], arr[1]);
	      if (arr.length >= 3) result = this.descartes3(arr);

	      return result;
	    }
	    /**
	     * [descartes1 如果传入的参数只有一个数组，求笛卡尔积结果]
	     * @method descartes1
	     * @param  {[Array]}   arr1 [一维数组]
	     * @return {[Array]}   [二维数组]
	     */

	  }, {
	    key: "descartes1",
	    value: function descartes1(arr1) {
	      var result = [];

	      for (var i in arr1) {
	        result.push([arr1[i]]);
	      }

	      return result;
	    }
	    /**
	     * [descartes2 如果传入的参数只有两个数组，求笛卡尔积结果]
	     * @method descartes2
	     * @param  {[Array]}   arr1 [一维数组]
	     * @param  {[Array]}   arr2 [一维数组]
	     * @return {[Array]}   [二维数组]
	     */

	  }, {
	    key: "descartes2",
	    value: function descartes2(arr1, arr2) {
	      var result = [];

	      for (var i in arr1) {
	        for (var j in arr2) {
	          result.push([arr1[i], arr2[j]]);
	        }
	      }

	      return result;
	    }
	    /**
	     * [descartes3 如果传入的参数有三个以上的数组，求笛卡尔积结果]
	     * @method descartes3
	     * @param  {[Array]}   arr [二维数组
	     * @return {[Array]}   [二维数组]
	     */

	  }, {
	    key: "descartes3",
	    value: function descartes3(arr) {
	      var arr2D = this.descartes2(arr[0], arr[1]);

	      for (var i = 2; i < arr.length; i++) {
	        arr2D = this.descartes2DAnd1D(arr2D, arr[i]);
	      }

	      return arr2D;
	    }
	    /**
	     * [descartes2DAnd1D 降维]
	     * @method descartes2DAnd1D
	     * @param  {[Array]}         arr2D [二维数组]
	     * @param  {[Array]}         arr1D [一维数组]
	     * @return {[Array]}         [二维数组]
	     */

	  }, {
	    key: "descartes2DAnd1D",
	    value: function descartes2DAnd1D(arr2D, arr1D) {
	      var result = [];

	      for (var i in arr2D) {
	        for (var j in arr1D) {
	          result.push(arr2D[i].concat(arr1D[j]));
	        }
	      }

	      return result;
	    }
	  }]);

	  return Descartes;
	}();

	exports.default = Descartes;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var arr1 = [['a', 'b', 'c']];
	var descartes1 = new Descartes(arr1);
	var result1 = descartes1.descartes_1();

	console.log('result1', result1);

	var arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]];
	var descartes2 = new Descartes(arr2);
	var result2 = descartes2.descartes_1();

	console.log('result2', result2);

	var arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']];
	var descartes3 = new Descartes(arr3);
	var result3 = descartes3.descartes_1();

	console.log('result3', result3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var arr1 = [['a', 'b', 'c']];
	var descartes1 = new _index2.default(arr1);
	var result1 = descartes1.descartes_2();

	console.log('result1', result1);

	var arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]];
	var descartes2 = new _index2.default(arr2);
	var result2 = descartes2.descartes_2();

	console.log('result2', result2);

	var arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']];
	var descartes3 = new _index2.default(arr3);
	var result3 = descartes3.descartes_2();

	console.log('result3', result3);

/***/ })
/******/ ]);