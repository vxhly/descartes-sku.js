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