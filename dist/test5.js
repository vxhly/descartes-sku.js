'use strict';

var _index = require('./index');

var obj1 = [{ size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' }];
var descartes1 = new _index.SKU2Descartes(obj1);
var result1 = descartes1.sku();

console.log('result1', result1);
//  { size: ['XL', 'XXL'], type: ['羊毛'] }

var obj2 = [{ size: 'XL' }, { size: 'XXL' }];
var descartes2 = new _index.SKU2Descartes(obj2);
var result2 = descartes2.sku();

console.log('result2', result2);
//  { size: ['XL', 'XXL'] }

var obj3 = [];
var descartes3 = new _index.SKU2Descartes(obj3);
var result3 = descartes3.sku();

console.log('result3', result3);
//  {}

var obj4 = [{ color: '黄色', size: 'XL' }];
var descartes4 = new _index.SKU2Descartes(obj4);
var result4 = descartes4.sku();

console.log('result4', result4);
//   { color: ['黄色'], size: ['XL'] }