# descartes-sku.js

[![NPM version](https://img.shields.io/npm/v/descartes-sku.js.svg?style=flat-square)](https://www.npmjs.com/package/descartes-sku.js) [![Build Status](https://travis-ci.org/vxhly/descartes-sku.js.svg?branch=master)](https://travis-ci.org/vxhly/descartes-sku.js) [![GitHub forks](https://img.shields.io/github/forks/vxhly/descartes-sku.js.svg)](https://github.com/vxhly/descartes-sku.js/network) [![GitHub stars](https://img.shields.io/github/stars/vxhly/descartes-sku.js.svg)](https://github.com/vxhly/descartes-sku.js/stargazers) [![NPM download](https://img.shields.io/npm/dm/descartes-sku.js.svg?style=flat-square)](https://npmjs.org/package/descartes-sku.js) [![GitHub license](https://img.shields.io/github/license/vxhly/descartes-sku.js.svg)](https://github.com/vxhly/descartes-sku.js/blob/master/LICENSE)

## SKU

> Stock Keeping Unit，是库存进出计量的基本单元。 即库存进出计量的基本单元，可以是以件，盒，托盘等为单位.

## 笛卡尔乘积算法

> 笛卡尔乘积是指在数学中，两个集合X和Y的笛卡尓积（Cartesian product），又称直积，表示为X × Y，第一个对象是X的成员而第二个对象是Y的所有可能有序对的其中一个成员。

## 功能

基于笛卡尔乘积算法基础上编写的一个快捷插件，只需传入需要生成 SKU 属性数组的原始数据即可快捷生成对应的 SKU。 

## download

```bash
git clone https://github.com/vxhly/descartes-sku.js.git
```

### npm

```bash
npm install descartes-sku.js --save
```

### bower

```bash
bower install descartes-sku.js --save
```

## USE

> 提供两套算法，推荐使用算法二

```javascript
import { Descartes2SKU2SKU } from './descartes-sku.js'

const arr1 = [['a', 'b', 'c']]
const descartes1 = new Descartes2SKU(arr1)
const result1 = descartes1.descartes() // 算法一
// descartes1.descartes() 算法二

console.log('result1', result1)
//  => [ ['a'], ['b'], ['c'] ]

const arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
const descartes2 = new Descartes2SKU(arr2)
const result2 = descartes2.descartes()
// descartes2.descartes() 算法二

console.log('result2', result2)
// => [ 
//      [ 'a', 1 ], [ 'a', 2 ], [ 'a', 3 ], [ 'a', 4 ], [ 'a', 5 ],
//      [ 'b', 1 ], [ 'b', 2 ], [ 'b', 3 ], [ 'b', 4 ], [ 'b', 5 ],
//      [ 'c', 1 ], [ 'c', 2 ], [ 'c', 3 ], [ 'c', 4 ], [ 'c', 5 ] 
//    ]   

const arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']]
const descartes3 = new Descartes2SKU(arr3)
const result3 = descartes3.descartes()
// descartes2.descartes() 算法二

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

> 如果需要输出结果带有 key,则传入的必须为对象

```javascript
import { Descartes2SKU } from './descartes-sku.js'

const obj = { size: ['XL', 'XXL'], type: ['羊毛'] }
const descartes = new Descartes2SKU(obj)
const result = descartes.descartes()

console.log('result1', result)
//  =>  [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]
```

> 如果需要将 SKU 转换成笛卡儿积形式,则需要使用 SKU2Descartes()

```javascript
import { Descartes2SKU2SKU } from './descartes-sku.js'

const obj1 = [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]
const descartes1 = new SKU2Descartes(obj1)
const result1 = descartes1.sku()

console.log('result1', result1)
//  { size: ['XL', 'XXL'], type: ['羊毛'] }

const obj2 = [ { size: 'XL' }, { size: 'XXL' } ]
const descartes2 = new SKU2Descartes(obj2)
const result2 = descartes2.sku()

console.log('result2', result2)
//  { size: ['XL', 'XXL'] }

const obj3 = []
const descartes3 = new SKU2Descartes(obj3)
const result3 = descartes3.sku()

console.log('result3', result3)
//  {}

const obj4 = [ { color: '黄色', size: 'XL' } ]
const descartes4 = new SKU2Descartes(obj4)
const result4 = descartes4.sku()

console.log('result4', result4)
//   { color: ['黄色'], size: ['XL'] }
```

> 提供搜索功能，暂时只支持传入对象的形式

```javascript
import { SearchSKU } from './descartes-sku.js'

const arr2 = [
  { color: '黄色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
  { color: '黄色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test2' },
  { color: '黄绿色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
  { color: '黄绿色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test2' }
]

const search_sku4 = { color: '黄绿色', size: 'XL' }
const descartes4 = new SearchSKU(arr2, search_sku4)
const result4 = descartes4.search()

console.log('result4', result4)
// => { color: '绿色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' }
```

> 如果以上例子还不过瘾的话可以看 src/test1.js ~ src/test5.js 文件哦

## test

```bash
npm run test1 => 算法一（逐个匹配）
npm run test2 => 算法二（递归）
npm run test3 => 算法三（对象传入对象输出）
npm run test4 => SKU 转 笛卡尔乘积数组（传入数组，数组套数组）
npm run test5 => SKU 转 笛卡尔乘积数组（传入数组，数组套对象）
npm run test6 => 搜索功能（传入对象）
```
