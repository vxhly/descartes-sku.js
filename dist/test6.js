'use strict';

var _index = require('./index');

var arr1 = [{ color: '黄色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' }, { color: '黄色', size: 'XL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test2' }, { color: '黄色', size: 'XL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'test3' }, { color: '黄色', size: 'XXL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test4' }, { color: '黄色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test5' }, { color: '黄色', size: 'XXL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'test6' }, { color: '绿色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test7' }, { color: '绿色', size: 'XL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test9' }, { color: '绿色', size: 'XL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'test23' }, { color: '绿色', size: 'XXL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test2323' }, { color: '绿色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测32试', test: 'test323' }, { color: '绿色', size: 'XXL', type: '纯棉', stock: 99, price: 12, oteh: '测323试', test: 'test' }, { color: '黑色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测23333试', test: 'test' }, { color: '黑色', size: 'XL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'te33st' }, { color: '黑色', size: 'XL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'te434st' }, { color: '黑色', size: 'XXL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'te33st' }, { color: '黑色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'tes2t' }, { color: '黑色', size: 'XXL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'tes22t' }];
var search_sku1 = { color: '黑色', size: 'XL', type: '羊毛' };
var descartes1 = new _index.SearchSKU(arr1, search_sku1);
var result1 = descartes1.search();

console.log('result1', result1);
// => { color: '黑色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测23333试', test: 'test' }

var search_sku2 = { color: '', size: '', type: '' };
var descartes2 = new _index.SearchSKU(arr1, search_sku2);
var result2 = descartes2.search();

console.log('result2', result2);
// => {}

var search_sku3 = { color: '紫色', size: '黑白', type: '无' };
var descartes3 = new _index.SearchSKU(arr1, search_sku3);
var result3 = descartes3.search();

console.log('result3', result3);
// => {}