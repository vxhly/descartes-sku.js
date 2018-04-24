'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj1 = { size: ['XL', 'XXL'], type: ['羊毛'] };
var descartes1 = new _index2.default(obj1);
var result1 = descartes1.descartes_obj();

console.log('result1', result1);
// =>  [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]

var obj2 = { size: ['XL', 'XXL'] };
var descartes2 = new _index2.default(obj2);
var result2 = descartes2.descartes_obj();

console.log('result2', result2);
// =>  [ { size: 'XL' }, { size: 'XXL' } ]