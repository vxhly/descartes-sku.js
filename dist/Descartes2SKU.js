'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * [Descartes2SKU 笛卡尔积数组转换成一条条 SKU]
 */
var Descartes2SKU = function () {
  /**
   * [constructor 初始化]
   * @method constructor
   * @param  {[Array | Object]}    arrORobj [[Array1,Array2,Array3,...]]
   */
  function Descartes2SKU(arrORobj) {
    _classCallCheck(this, Descartes2SKU);

    if (_lodash2.default.isArray(arrORobj)) this._arr = arrORobj;else if (_lodash2.default.isObject(arrORobj)) this._obj = arrORobj;else throw new Error('arrORobj is Array or Object');
  }
  /**
   * [descartes_obj 对象形式输出]
   * @method descartes_obj
   * @return {[Object]}      [对象]
   */


  _createClass(Descartes2SKU, [{
    key: 'descartes_obj',
    value: function descartes_obj() {
      var obj = this._obj;
      var keys = _lodash2.default.keys(obj);
      var result = [];
      var arr = [];
      for (var i in obj) {
        if (obj[i].length > 0) arr.push(obj[i]);else {
          delete obj[i];
          _lodash2.default.pull(keys, i);
        }
      }
      var descartes_arr = this.descartes_2(arr);
      descartes_arr.forEach(function (item) {
        result.push(Object.assign({}, item));
      });

      result.forEach(function (item, index) {
        result[index] = _lodash2.default.mapKeys(item, function (value, key) {
          var _key = Number(key);

          return keys[_key];
        });
      });

      return result;
    }

    /**
     * [descartes_2 算法二递归]
     * @method descartes_2
     * @return {[Array]}    [二维数组]
     */

  }, {
    key: 'descartes_2',
    value: function descartes_2(_arr) {
      var arr = _arr || this._arr;
      var end = arr.length - 1;
      var result = [];

      var recursive = function recursive(curr, start) {
        var first = arr[start];
        var last = start === end;
        for (var i in first) {
          var copy = curr.slice();
          copy.push(first[i]);
          if (last) {
            result.push(copy);
          } else {
            recursive(copy, start + 1);
          }
        }
      };

      if (arr.length) recursive([], 0);

      return result;
    }

    /**
     * [descartes_1 入口函数]
     * @method descartes_1
     * @return {[Array]}  [Array|[Array1,Array2,Array3,...]]
     */

  }, {
    key: 'descartes_1',
    value: function descartes_1(_arr) {
      var arr = _arr || this._arr;
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
    key: 'descartes1',
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
    key: 'descartes2',
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
    key: 'descartes3',
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
    key: 'descartes2DAnd1D',
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

  return Descartes2SKU;
}();

exports.default = Descartes2SKU;