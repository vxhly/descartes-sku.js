import { SearchSKU } from './index'

const arr1 = [
  { color: '黄色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
  { color: '黄色', size: 'XL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test2' },
  { color: '黄色', size: 'XL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'test3' },
  { color: '黄色', size: 'XXL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test4' },
  { color: '黄色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test5' },
  { color: '黄色', size: 'XXL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'test6' },
  { color: '绿色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test7' },
  { color: '绿色', size: 'XL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test9' },
  { color: '绿色', size: 'XL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'test23' },
  { color: '绿色', size: 'XXL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test2323' },
  { color: '绿色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测32试', test: 'test323' },
  { color: '绿色', size: 'XXL', type: '纯棉', stock: 99, price: 12, oteh: '测323试', test: 'test' },
  { color: '黑色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测23333试', test: 'test' },
  { color: '黑色', size: 'XL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'te33st' },
  { color: '黑色', size: 'XL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'te434st' },
  { color: '黑色', size: 'XXL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'te33st' },
  { color: '黑色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'tes2t' },
  { color: '黑色', size: 'XXL', type: '纯棉', stock: 99, price: 12, oteh: '测试', test: 'tes22t' }
]

const search_sku1 = { color: '黑色', size: 'XL', type: '羊毛' }
const descartes1 = new SearchSKU(arr1, search_sku1)
const result1 = descartes1.search()

console.log('result1', result1)
// => { color: '黑色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测23333试', test: 'test' }

const search_sku2 = { color: '', size: '', type: '' }
const descartes2 = new SearchSKU(arr1, search_sku2)
const result2 = descartes2.search()

console.log('result2', result2)
// => {}

const search_sku3 = { color: '紫色', size: '黑白', type: '无' }
const descartes3 = new SearchSKU(arr1, search_sku3)
const result3 = descartes3.search()

console.log('result3', result3)
// => {}

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

const search_sku5 = { color: '', size: '' }
const descartes5 = new SearchSKU(arr2, search_sku5)
const result5 = descartes5.search()

console.log('result5', result5)
// => {}

const search_sku6 = { color: '紫色', size: '黑白' }
const descartes6 = new SearchSKU(arr2, search_sku6)
const result6 = descartes6.search()

console.log('result6', result6)
// => {}

const arr3 = [
  { color: '黄色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
  { color: '黄绿色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
  { color: '黑色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test2' },
  { color: '白色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
  { color: '灰色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
  { color: '橘色', size: 'XXL', type: '棉', stock: 99, price: 12, oteh: '测试', test: 'test2' }
]

const search_sku7 = { color: '白色' }
const descartes7 = new SearchSKU(arr3, search_sku7)
const result7 = descartes7.search()

console.log('result7', result7)
// => { color: '白色', size: 'XL', type: '羊毛', stock: 99, price: 12, oteh: '测试', test: 'test1' },
