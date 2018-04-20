'use strict';

var _index = require('./index.js');

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