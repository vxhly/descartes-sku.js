import Descartes from './index.js'

const obj1 = { size: ['XL', 'XXL'], type: ['羊毛'] }
const descartes1 = new Descartes(obj1)
const result1 = descartes1.descartes_obj()

console.log('result1', result1)
// =>  [ { size: 'XL', type: '羊毛' }, { size: 'XXL', type: '羊毛' } ]

const obj2 = { size: ['XL', 'XXL'] }
const descartes2 = new Descartes(obj2)
const result2 = descartes2.descartes_obj()

console.log('result2', result2)
// =>  [ { size: 'XL' }, { size: 'XXL' } ]

const obj3 = { size: ['XL', 'XXL'], type: [] }
const descartes3 = new Descartes(obj3)
const result3 = descartes3.descartes_obj()

console.log('result3', result3)
// =>  [ { size: 'XL' }, { size: 'XXL' } ]

var obj4 = { size: [], type: ['羊毛', '棉'] }
var descartes4 = new Descartes(obj4)
var result4 = descartes4.descartes_obj()

console.log('result4', result4)
// =>  [ { type: 'XL' }, { type: 'XXL' } ]

var obj5 = { size: [], type: [], color: [] }
var descartes5 = new Descartes(obj5)
var result5 = descartes5.descartes_obj()

console.log('result5', result5)
// =>  []
