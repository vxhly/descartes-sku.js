'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SKU2Descartes = function () {
  /**
   * [constructor 初始化]
   * @method constructor
   * @param  {[Array | Object]}    arr [[Array1,Array2,Array3,...]]
   */
  function SKU2Descartes(arr) {
    _classCallCheck(this, SKU2Descartes);

    if (_lodash2.default.isArray(arr)) this._arr = arr;else throw new Error('arr is Array');
  }
  /**
   * [sku 根据输入的内容执行相应的函数]
   * @method sku
   * @return {[Array | Object]} [笛卡儿积]
   */


  _createClass(SKU2Descartes, [{
    key: 'sku',
    value: function sku() {
      var sku = this._arr;
      var result = [];

      if (_lodash2.default.size(sku) > 0) {
        if (_lodash2.default.isArray(sku[0])) result = this.sku_arr(sku);else if (_lodash2.default.isObject(sku[0])) result = this.sku_obj(sku);
      }
      return result;
    }

    /**
     * [sku_arr SKU转换成笛卡尔乘积]
     * @method sku_arr
     * @param  {[Array]} _sku [传入SKU数组]
     * @return {[Array]} [笛卡尔乘积]
     */

  }, {
    key: 'sku_arr',
    value: function sku_arr(_sku) {
      var sku = _sku || this._arr;
      var sku_length = 0;
      var arr = [];

      sku.forEach(function (item, index) {
        var length = _lodash2.default.size(item);
        if (length > sku_length) sku_length = length;
      });

      for (var i = 0; i < sku_length; i++) {
        arr.push([]);
      }sku.forEach(function (sku_item, index) {
        sku_item.forEach(function (item, index) {
          if (!arr[index].includes(item)) arr[index].push(item);
        });
      });

      return arr;
    }

    /**
     * [sku_obj 允许传入含有键的对象]
     * @method sku_obj
     * @param  {[Array]} _sku [传入SKU数组]
     * @return {[Object]} [笛卡尔乘积数组]
     */

  }, {
    key: 'sku_obj',
    value: function sku_obj(_sku) {
      var sku = _sku || this._arr;
      var sku_length = 0;
      var obj = {};
      var keys = [];

      sku.forEach(function (item, index) {
        var length = _lodash2.default.size(item);
        if (length > sku_length) {
          sku_length = length;
          keys = _lodash2.default.keys(item);
        }
      });

      keys.forEach(function (item) {
        obj[item] = [];
      });

      sku.forEach(function (item, index) {
        keys.forEach(function (key_item, key_index) {
          var _obj = obj[key_item];
          var _value = item[key_item];
          if (!_obj.includes(_value)) _obj.push(_value);
        });
      });

      return obj;
    }
  }]);

  return SKU2Descartes;
}();

exports.default = SKU2Descartes;