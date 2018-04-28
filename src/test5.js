import { SKU2Descartes } from './index.js'

const obj1 = [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]
const descartes1 = new SKU2Descartes(obj1)
const result1 = descartes1.sku_obj()

console.log('result1', result1)
//  { size: ['XL', 'XXL'], type: ['羊毛'] }

const obj2 = [ { size: 'XL' }, { size: 'XXL' } ]
const descartes2 = new SKU2Descartes(obj2)
const result2 = descartes2.sku_obj()

console.log('result2', result2)
//  { size: ['XL', 'XXL'] }

const obj3 = []
const descartes3 = new SKU2Descartes(obj3)
const result3 = descartes3.sku_obj()

console.log('result3', result3)
//  {}

const obj4 = [ { color: '黄色', size: 'XL' } ]
const descartes4 = new SKU2Descartes(obj4)
const result4 = descartes4.sku_obj()

console.log('result4', result4)
//   { color: ['黄色'], size: ['XL'] }
