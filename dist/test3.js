'use strict';

var _index = require('./index.js');

var obj1 = { size: ['XL', 'XXL'], type: ['羊毛'] };
var descartes1 = new _index.Descartes2SKU(obj1);
var result1 = descartes1.descartes();

console.log('result1', result1);
// =>  [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]

var obj2 = { size: ['XL', 'XXL'] };
var descartes2 = new _index.Descartes2SKU(obj2);
var result2 = descartes2.descartes();

console.log('result2', result2);
// =>  [ { size: 'XL' }, { size: 'XXL' } ]

var obj3 = { size: ['XL', 'XXL'], type: [] };
var descartes3 = new _index.Descartes2SKU(obj3);
var result3 = descartes3.descartes();

console.log('result3', result3);
// =>  [ { size: 'XL' }, { size: 'XXL' } ]

var obj4 = { size: [], type: ['羊毛', '棉'] };
var descartes4 = new _index.Descartes2SKU(obj4);
var result4 = descartes4.descartes();

console.log('result4', result4);
// =>  [ { type: 'XL' }, { type: 'XXL' } ]

var obj5 = { size: [], type: [], color: [] };
var descartes5 = new _index.Descartes2SKU(obj5);
var result5 = descartes5.descartes();

console.log('result5', result5);
// =>  []

var obj6 = { color: ['黄色'], size: ['XL'], type: [] };
var descartes6 = new _index.Descartes2SKU(obj6);
var result6 = descartes6.descartes();

console.log('result6', result6);
// => [ { color: '黄色', size: 'XL' } ]

var obj7 = { color: [], size: ['XL'], type: ['棉'] };
var descartes7 = new _index.Descartes2SKU(obj7);
var result7 = descartes7.descartes();

console.log('result7', result7);
// =>  [ { size: 'XL', type: '棉' } ]