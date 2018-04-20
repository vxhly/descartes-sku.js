# descartes.js

[![NPM version](https://img.shields.io/npm/v/descartes.js.svg?style=flat-square)](https://www.npmjs.com/package/descartes.js) [![Build Status](https://travis-ci.org/vxhly/descartes.js.svg?branch=master)](https://travis-ci.org/vxhly/descartes.js) [![GitHub forks](https://img.shields.io/github/forks/vxhly/descartes.js.svg)](https://github.com/vxhly/descartes.js/network) [![GitHub stars](https://img.shields.io/github/stars/vxhly/descartes.js.svg)](https://github.com/vxhly/descartes.js/stargazers) [![NPM download](https://img.shields.io/npm/dm/descartes.js.svg?style=flat-square)](https://npmjs.org/package/descartes.js) [![GitHub license](https://img.shields.io/github/license/vxhly/descartes.js.svg)](https://github.com/vxhly/descartes.js/blob/master/LICENSE)

## SKU

> Stock Keeping Unit，是库存进出计量的基本单元。 即库存进出计量的基本单元，可以是以件，盒，托盘等为单位.

## 笛卡尔乘积算法

> 笛卡尔乘积是指在数学中，两个集合X和Y的笛卡尓积（Cartesian product），又称直积，表示为X × Y，第一个对象是X的成员而第二个对象是Y的所有可能有序对的其中一个成员。

## 功能

基于笛卡尔乘积算法基础上编写的一个快捷插件，只需传入需要生成 SKU 属性数组的原始数据即可快捷生成对应的 SKU。 

## download

```bash
git clone https://github.com/vxhly/descartes.js.git
```

### npm

```bash
npm install descartes.js --save
```

### bower

```bash
bower install descartes.js --save
```

## USE

```javascript
import Descartes from './descartes.js'

const arr1 = [['a', 'b', 'c']]
const descartes1 = new Descartes(arr1)
const result1 = descartes1.descartes_1()

console.log('result1', result1)
//  => [ ['a'], ['b'], ['c'] ]

const arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
const descartes2 = new Descartes(arr2)
const result2 = descartes2.descartes()

console.log('result2', result2)
// => [ 
//      [ 'a', 1 ], [ 'a', 2 ], [ 'a', 3 ], [ 'a', 4 ], [ 'a', 5 ],
//      [ 'b', 1 ], [ 'b', 2 ], [ 'b', 3 ], [ 'b', 4 ], [ 'b', 5 ],
//      [ 'c', 1 ], [ 'c', 2 ], [ 'c', 3 ], [ 'c', 4 ], [ 'c', 5 ] 
//    ]   

const arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']]
const descartes3 = new Descartes(arr3)
const result3 = descartes3.descartes()

console.log('result3', result3)
// => [ 
//      [ '黄色', 'XL', 'aa' ], [ '黄色', 'XL', 'bb' ], [ '黄色', 'X', 'aa' ],
//      [ '黄色', 'X', 'bb' ], [ '黄色', 'XXL', 'aa' ], [ '黄色', 'XXL', 'bb' ],
//      [ '黄色', 'L', 'aa' ], [ '黄色', 'L', 'bb' ], [ '绿色', 'XL', 'aa' ],
//      [ '绿色', 'XL', 'bb' ], [ '绿色', 'X', 'aa' ], [ '绿色', 'X', 'bb' ],
//      [ '绿色', 'XXL', 'aa' ], [ '绿色', 'XXL', 'bb' ], [ '绿色', 'L', 'aa' ],
//      [ '绿色', 'L', 'bb' ], [ '黑色', 'XL', 'aa' ], [ '黑色', 'XL', 'bb' ],
//      [ '黑色', 'X', 'aa' ], [ '黑色', 'X', 'bb' ], [ '黑色', 'XXL', 'aa' ],
//      [ '黑色', 'XXL', 'bb' ], [ '黑色', 'L', 'aa' ], [ '黑色', 'L', 'bb' ] 
//    ]
```

## test

```bash
npm run test
```
