import { Descartes2SKU } from './index'

const obj1 = { size: ['XL', 'XXL'], type: ['羊毛'] }
const descartes1 = new Descartes2SKU(obj1)
const result1 = descartes1.descartes()

console.log('result1', result1)
// =>  [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]

const obj2 = { size: ['XL', 'XXL'] }
const descartes2 = new Descartes2SKU(obj2)
const result2 = descartes2.descartes()

console.log('result2', result2)
// =>  [ { size: 'XL' }, { size: 'XXL' } ]

const obj3 = { size: ['XL', 'XXL'], type: [] }
const descartes3 = new Descartes2SKU(obj3)
const result3 = descartes3.descartes()

console.log('result3', result3)
// =>  [ { size: 'XL' }, { size: 'XXL' } ]

const obj4 = { size: [], type: ['羊毛', '棉'] }
const descartes4 = new Descartes2SKU(obj4)
const result4 = descartes4.descartes()

console.log('result4', result4)
// =>  [ { type: 'XL' }, { type: 'XXL' } ]

const obj5 = { size: [], type: [], color: [] }
const descartes5 = new Descartes2SKU(obj5)
const result5 = descartes5.descartes()

console.log('result5', result5)
// =>  []

const obj6 = { color: ['黄色'], size: ['XL'], type: [] }
const descartes6 = new Descartes2SKU(obj6)
const result6 = descartes6.descartes()

console.log('result6', result6)
// => [ { color: '黄色', size: 'XL' } ]

const obj7 = { color: [], size: ['XL'], type: ['棉'] }
const descartes7 = new Descartes2SKU(obj7)
const result7 = descartes7.descartes()

console.log('result7', result7)
// =>  [ { size: 'XL', type: '棉' } ]
