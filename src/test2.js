import Descartes from './index.js'

const arr1 = [['a', 'b', 'c']]
const descartes1 = new Descartes(arr1)
const result1 = descartes1.descartes_2()

console.log('result1', result1)
//  => [ ['a'], ['b'], ['c'] ]

const arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
const descartes2 = new Descartes(arr2)
const result2 = descartes2.descartes_2()

console.log('result2', result2)
// => [
//      [ 'a', 1 ], [ 'a', 2 ], [ 'a', 3 ], [ 'a', 4 ], [ 'a', 5 ],
//      [ 'b', 1 ], [ 'b', 2 ], [ 'b', 3 ], [ 'b', 4 ], [ 'b', 5 ],
//      [ 'c', 1 ], [ 'c', 2 ], [ 'c', 3 ], [ 'c', 4 ], [ 'c', 5 ]
//    ]

const arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']]
const descartes3 = new Descartes(arr3)
const result3 = descartes3.descartes_2()

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
