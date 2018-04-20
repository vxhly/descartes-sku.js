const arr1 = [['a', 'b', 'c']]
const descartes1 = new Descartes(arr1)
const result1 = descartes1.descartes_1()

console.log('result1', result1)

const arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
const descartes2 = new Descartes(arr2)
const result2 = descartes2.descartes_1()

console.log('result2', result2)

const arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']]
const descartes3 = new Descartes(arr3)
const result3 = descartes3.descartes_1()

console.log('result3', result3)
