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

    if (_lodash2.default.isArray(arrORobj) || _lodash2.default.isObject(arrORobj)) this.arrORobj = arrORobj;else throw new Error('arrORobj is Array or Object');
  }
  /**
   * [descartes 根据输入的内容执行相应的函数]
   * @method descartes
   * @param  {[Number]}  algorithm [算法几，默认算法二，1，2]
   * @return {[Array]}  [SKU数组]
   */


  _createClass(Descartes2SKU, [{
    key: 'descartes',
    value: function descartes(algorithm) {
      var arrORobj = this.arrORobj;
      var result = [];

      if (_lodash2.default.size(arrORobj) > 0) {
        if (_lodash2.default.isArray(arrORobj)) {
          switch (algorithm) {
            case 1:
              result = this._descartes_1(arrORobj);
              break;
            case 2:
              result = this._descartes_2(arrORobj);
              break;
            default:
              result = this._descartes_2(arrORobj);
          }
        } else if (_lodash2.default.isObject(arrORobj)) result = this._descartes_obj(arrORobj);
      }

      return result;
    }

    /**
     * [_descartes_obj 对象形式输出]
     * @method _descartes_obj
     * @param  {[Array | Object]}      _arrORobj [传入的数组或者对象]
     * @return {[Object]}      [对象]
     */

  }, {
    key: '_descartes_obj',
    value: function _descartes_obj(_arrORobj) {
      var obj = _arrORobj || this.arrORobj;
      var keys = _lodash2.default.keys(obj);
      var result = [];
      var arr = [];
      for (var i in obj) {
        if (obj[i].length > 0) arr.push(obj[i]);else {
          delete obj[i];
          _lodash2.default.pull(keys, i);
        }
      }
      var descartes_arr = this._descartes_2(arr);
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
     * [_descartes_2 算法二递归]
     * @method _descartes_2
     * @param  {[Array]}    _arr [船儿的数组]
     * @return {[Array]}    [算法二递归]
     */

  }, {
    key: '_descartes_2',
    value: function _descartes_2(_arr) {
      var arr = _arr || this._arrORobj;
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
     * [_descartes_1 入口函数]
     * @method _descartes_1
     * @param  {[Array]}    _arr [船儿的数组]
     * @return {[Array]}  [Array|[Array1,Array2,Array3,...]]
     */

  }, {
    key: '_descartes_1',
    value: function _descartes_1(_arr) {
      var arr = _arr || this._arrORobj;
      var result = [];

      if (!arr) return [];
      if (arr.length <= 0) return [];
      if (arr.length === 1) result = this._descartes1(arr[0]);
      if (arr.length === 2) result = this._descartes2(arr[0], arr[1]);
      if (arr.length >= 3) result = this._descartes3(arr);

      return result;
    }
    /**
     * [_descartes1 如果传入的参数只有一个数组，求笛卡尔积结果]
     * @method _descartes1
     * @param  {[Array]}   arr1 [一维数组]
     * @return {[Array]}   [二维数组]
     */

  }, {
    key: '_descartes1',
    value: function _descartes1(arr1) {
      var result = [];

      for (var i in arr1) {
        result.push([arr1[i]]);
      }

      return result;
    }
    /**
     * [_descartes2 如果传入的参数只有两个数组，求笛卡尔积结果]
     * @method _descartes2
     * @param  {[Array]}   arr1 [一维数组]
     * @param  {[Array]}   arr2 [一维数组]
     * @return {[Array]}   [二维数组]
     */

  }, {
    key: '_descartes2',
    value: function _descartes2(arr1, arr2) {
      var result = [];

      for (var i in arr1) {
        for (var j in arr2) {
          result.push([arr1[i], arr2[j]]);
        }
      }

      return result;
    }
    /**
     * [_descartes3 如果传入的参数有三个以上的数组，求笛卡尔积结果]
     * @method _descartes3
     * @param  {[Array]}   arr [二维数组
     * @return {[Array]}   [二维数组]
     */

  }, {
    key: '_descartes3',
    value: function _descartes3(arr) {
      var arr2D = this._descartes2(arr[0], arr[1]);

      for (var i = 2; i < arr.length; i++) {
        arr2D = this._descartes2DAnd1D(arr2D, arr[i]);
      }

      return arr2D;
    }
    /**
     * [_descartes2DAnd1D 降维]
     * @method _descartes2DAnd1D
     * @param  {[Array]}         arr2D [二维数组]
     * @param  {[Array]}         arr1D [一维数组]
     * @return {[Array]}         [二维数组]
     */

  }, {
    key: '_descartes2DAnd1D',
    value: function _descartes2DAnd1D(arr2D, arr1D) {
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