/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	module.exports = __webpack_require__(10);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	import _ from 'lodash'

	/**
	 * [Descartes2SKU 笛卡尔积数组转换成一条条 SKU]
	 */
	class Descartes2SKU {
	  /**
	   * [constructor 初始化]
	   * @method constructor
	   * @param  {[Array | Object]}    arrORobj [[Array1,Array2,Array3,...]]
	   */
	  constructor (arrORobj) {
	    if (_.isArray(arrORobj) || _.isObject(arrORobj)) this.arrORobj = arrORobj
	    else throw new Error('Sorry, the receiving parameter should be an Array or Object')
	  }
	  /**
	   * [descartes 根据输入的内容执行相应的函数]
	   * @method descartes
	   * @param  {[Number]}  algorithm [算法几，默认算法二，1，2]
	   * @return {[Array]}  [SKU数组]
	   */
	  descartes (algorithm) {
	    const arrORobj = this.arrORobj
	    let result = []

	    if (_.size(arrORobj) > 0) {
	      if (_.isArray(arrORobj)) {
	        switch (algorithm) {
	          case 1:
	            result = this._descartes_1(arrORobj)
	            break
	          case 2:
	            result = this._descartes_2(arrORobj)
	            break
	          default:
	            result = this._descartes_2(arrORobj)
	        }
	      } else if (_.isObject(arrORobj)) result = this._descartes_obj(arrORobj)
	    }

	    return result
	  }

	  /**
	   * [_descartes_obj 对象形式输出]
	   * @method _descartes_obj
	   * @param  {[Array | Object]}      _arrORobj [传入的数组或者对象]
	   * @return {[Object]}      [对象]
	   */
	  _descartes_obj (_arrORobj) {
	    const obj = _arrORobj || this.arrORobj
	    let keys = _.keys(obj)
	    let result = []
	    const arr = []
	    for (let i in obj) {
	      if (obj[i].length > 0) arr.push(obj[i])
	      else {
	        delete obj[i]
	        _.pull(keys, i)
	      }
	    }
	    const descartes_arr = this._descartes_2(arr)
	    descartes_arr.forEach(item => {
	      result.push(Object.assign({}, item))
	    })

	    result.forEach((item, index) => {
	      result[index] = _.mapKeys(item, (value, key) => {
	        let _key = Number(key)

	        return keys[_key]
	      })
	    })

	    return result
	  }

	  /**
	   * [_descartes_2 算法二递归]
	   * @method _descartes_2
	   * @param  {[Array]}    _arr [船儿的数组]
	   * @return {[Array]}    [算法二递归]
	   */
	  _descartes_2 (_arr) {
	    const arr = _arr || this._arrORobj
	    const end = arr.length - 1
	    const result = []

	    const recursive = (curr, start) => {
	      const first = arr[start]
	      const last = (start === end)
	      for (let i in first) {
	        var copy = curr.slice()
	        copy.push(first[i])
	        if (last) {
	          result.push(copy)
	        } else {
	          recursive(copy, start + 1)
	        }
	      }
	    }

	    if (arr.length) recursive([], 0)

	    return result
	  }

	  /**
	   * [_descartes_1 入口函数]
	   * @method _descartes_1
	   * @param  {[Array]}    _arr [船儿的数组]
	   * @return {[Array]}  [Array|[Array1,Array2,Array3,...]]
	   */
	  _descartes_1 (_arr) {
	    const arr = _arr || this._arrORobj
	    let result = []

	    if (!arr) return []
	    if (arr.length <= 0) return []
	    if (arr.length === 1) result = this._descartes1(arr[0])
	    if (arr.length === 2) result = this._descartes2(arr[0], arr[1])
	    if (arr.length >= 3) result = this._descartes3(arr)

	    return result
	  }
	  /**
	   * [_descartes1 如果传入的参数只有一个数组，求笛卡尔积结果]
	   * @method _descartes1
	   * @param  {[Array]}   arr1 [一维数组]
	   * @return {[Array]}   [二维数组]
	   */
	  _descartes1 (arr1) {
	    const result = []

	    for (let i in arr1) {
	      result.push([arr1[i]])
	    }

	    return result
	  }
	  /**
	   * [_descartes2 如果传入的参数只有两个数组，求笛卡尔积结果]
	   * @method _descartes2
	   * @param  {[Array]}   arr1 [一维数组]
	   * @param  {[Array]}   arr2 [一维数组]
	   * @return {[Array]}   [二维数组]
	   */
	  _descartes2 (arr1, arr2) {
	    const result = []

	    for (let i in arr1) {
	      for (let j in arr2) {
	        result.push([arr1[i], arr2[j]])
	      }
	    }

	    return result
	  }
	  /**
	   * [_descartes3 如果传入的参数有三个以上的数组，求笛卡尔积结果]
	   * @method _descartes3
	   * @param  {[Array]}   arr [二维数组
	   * @return {[Array]}   [二维数组]
	   */
	  _descartes3 (arr) {
	    let arr2D = this._descartes2(arr[0], arr[1])

	    for (let i = 2; i < arr.length; i++) {
	      arr2D = this._descartes2DAnd1D(arr2D, arr[i])
	    }

	    return arr2D
	  }
	  /**
	   * [_descartes2DAnd1D 降维]
	   * @method _descartes2DAnd1D
	   * @param  {[Array]}         arr2D [二维数组]
	   * @param  {[Array]}         arr1D [一维数组]
	   * @return {[Array]}         [二维数组]
	   */
	  _descartes2DAnd1D (arr2D, arr1D) {
	    const result = []

	    for (let i in arr2D) {
	      for (let j in arr1D) {
	        result.push(arr2D[i].concat(arr1D[j]))
	      }
	    }

	    return result
	  }
	}

	export default Descartes2SKU


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	import _ from 'lodash'

	class SKU2Descartes {
	  /**
	   * [constructor 初始化]
	   * @method constructor
	   * @param  {[Array | Object]}    arr [[Array1,Array2,Array3,...]]
	   */
	  constructor (arr) {
	    if (_.isArray(arr)) this._arr = arr
	    else throw new Error('Sorry, the receiving parameter should be an Array')
	  }
	  /**
	   * [sku 根据输入的内容执行相应的函数]
	   * @method sku
	   * @return {[Array | Object]} [笛卡儿积]
	   */
	  sku () {
	    const sku = this._arr
	    let result = []

	    if (_.size(sku) > 0) {
	      if (_.isArray(sku[0])) result = this._sku_arr(sku)
	      else if (_.isObject(sku[0])) result = this._sku_obj(sku)
	    }
	    return result
	  }

	  /**
	   * [_sku_arr SKU转换成笛卡尔乘积]
	   * @method _sku_arr
	   * @param  {[Array]} _sku [传入SKU数组]
	   * @return {[Array]} [笛卡尔乘积]
	   */
	  _sku_arr (_sku) {
	    const sku = _sku || this._arr
	    let sku_length = 0
	    const arr = []

	    sku.forEach((item, index) => {
	      const length = _.size(item)
	      if (length > sku_length) sku_length = length
	    })

	    for (let i = 0; i < sku_length; i++) arr.push([])

	    sku.forEach((sku_item, index) => {
	      sku_item.forEach((item, index) => {
	        if (!arr[index].includes(item)) arr[index].push(item)
	      })
	    })

	    return arr
	  }

	  /**
	   * [_sku_obj 允许传入含有键的对象]
	   * @method _sku_obj
	   * @param  {[Array]} _sku [传入SKU数组]
	   * @return {[Object]} [笛卡尔乘积数组]
	   */
	  _sku_obj (_sku) {
	    const sku = _sku || this._arr
	    let sku_length = 0
	    let obj = {}
	    let keys = []

	    sku.forEach((item, index) => {
	      const length = _.size(item)
	      if (length > sku_length) {
	        sku_length = length
	        keys = _.keys(item)
	      }
	    })

	    keys.forEach(item => {
	      obj[item] = []
	    })

	    sku.forEach((item, index) => {
	      keys.forEach((key_item, key_index) => {
	        const _obj = obj[key_item]
	        const _value = item[key_item]
	        if (!_obj.includes(_value)) _obj.push(_value)
	      })
	    })

	    return obj
	  }
	}

	export default SKU2Descartes


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	import _ from 'lodash'

	class SearchSKU {
	  /**
	   * [constructor 搜索skuu]
	   * @method constructor
	   * @param  {[Array]}    SKU [SKU 数组]
	   * @param  {[Object]}    sku [待搜索的对象]
	   */
	  constructor (SKU, sku) {
	    if (_.isArray(SKU)) this._SKU = SKU
	    else throw new Error('Sorry, the receiving parameter should be an Array')
	    if (_.isObject(sku)) this._sku = sku
	    else throw new Error('Sorry, the receiving parameter should be an Object')
	  }

	  search () {
	    const SKU = this._SKU
	    const sku = this._sku
	    let result = {}

	    if (_.size(SKU) > 0 && _.size(sku) > 0) {
	      if (_.isObject(SKU[0])) result = this._Search_Obj(SKU, sku)
	    }
	    return result
	  }
	  _Search_Arr (_SKU, _sku) {
	    const SKU = _SKU || this._SKU
	    const sku = _sku || this._sku
	    console.log(SKU, sku)
	  }

	  /**
	   * [_Search_Obj 搜索]
	   * @method _Search_Obj
	   * @return {[Object]} [SKU]
	   */
	  _Search_Obj (_SKU, _sku) {
	    const SKU = _SKU || this._SKU
	    const sku = _sku || this._sku
	    let result

	    const _search = (sku, _search_obj, sku_key) => {
	      try {
	        let _sku_key = sku_key || 0
	        const keys = _.keys(_search_obj)
	        const _result = []
	        sku.forEach(item => {
	          if (item[keys[_sku_key]] === _search_obj[keys[_sku_key]]) _result.push(item)
	        })

	        if (_.size(_result) > 1) _search(_result, _search_obj, _sku_key + 1)
	        else if (_.size(_result) === 1) result = _result
	      } catch (err) {
	        throw new Error('The data entered is incorrect !!!')
	      }
	    }

	    _search(_SKU, _sku)

	    return _.size(result) === 1 && result ? result[0] : {}
	  }
	}

	export default SearchSKU


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	import Descartes2SKU from './Descartes2SKU'
	import SKU2Descartes from './SKU2Descartes'
	import SearchSKU from './SearchSKU'

	export {
	  Descartes2SKU,
	  SKU2Descartes,
	  SearchSKU
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	import { Descartes2SKU } from './index'

	const arr1 = [['a', 'b', 'c']]
	const descartes1 = new Descartes2SKU(arr1)
	const result1 = descartes1.descartes(1)

	console.log('result1', result1)
	//  => [ ['a'], ['b'], ['c'] ]

	const arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
	const descartes2 = new Descartes2SKU(arr2)
	const result2 = descartes2.descartes(1)

	console.log('result2', result2)
	// => [
	//      [ 'a', 1 ], [ 'a', 2 ], [ 'a', 3 ], [ 'a', 4 ], [ 'a', 5 ],
	//      [ 'b', 1 ], [ 'b', 2 ], [ 'b', 3 ], [ 'b', 4 ], [ 'b', 5 ],
	//      [ 'c', 1 ], [ 'c', 2 ], [ 'c', 3 ], [ 'c', 4 ], [ 'c', 5 ]
	//    ]

	const arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']]
	const descartes3 = new Descartes2SKU(arr3)
	const result3 = descartes3.descartes(1)

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

	const arr4 = []
	const descartes4 = new Descartes2SKU(arr4)
	const result4 = descartes4.descartes(1)

	console.log('result4', result4)
	// => []


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	import { Descartes2SKU } from './index'

	const arr1 = [['a', 'b', 'c']]
	const descartes1 = new Descartes2SKU(arr1)
	const result1 = descartes1.descartes(2)

	console.log('result1', result1)
	//  => [ ['a'], ['b'], ['c'] ]

	const arr2 = [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
	const descartes2 = new Descartes2SKU(arr2)
	const result2 = descartes2.descartes(2)

	console.log('result2', result2)
	// => [
	//      [ 'a', 1 ], [ 'a', 2 ], [ 'a', 3 ], [ 'a', 4 ], [ 'a', 5 ],
	//      [ 'b', 1 ], [ 'b', 2 ], [ 'b', 3 ], [ 'b', 4 ], [ 'b', 5 ],
	//      [ 'c', 1 ], [ 'c', 2 ], [ 'c', 3 ], [ 'c', 4 ], [ 'c', 5 ]
	//    ]

	const arr3 = [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']]
	const descartes3 = new Descartes2SKU(arr3)
	const result3 = descartes3.descartes(2)

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

	const arr4 = []
	const descartes4 = new Descartes2SKU(arr4)
	const result4 = descartes4.descartes(2)

	console.log('result4', result4)
	// => []


/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

	var obj4 = { size: [], type: ['羊毛', '棉'] }
	var descartes4 = new Descartes2SKU(obj4)
	var result4 = descartes4.descartes()

	console.log('result4', result4)
	// =>  [ { type: 'XL' }, { type: 'XXL' } ]

	var obj5 = { size: [], type: [], color: [] }
	var descartes5 = new Descartes2SKU(obj5)
	var result5 = descartes5.descartes()

	console.log('result5', result5)
	// =>  []

	var obj6 = { color: ['黄色'], size: ['XL'], type: [] }
	var descartes6 = new Descartes2SKU(obj6)
	var result6 = descartes6.descartes()

	console.log('result6', result6)
	// => [ { color: '黄色', size: 'XL' } ]

	var obj7 = { color: [], size: ['XL'], type: ['棉'] }
	var descartes7 = new Descartes2SKU(obj7)
	var result7 = descartes7.descartes()

	console.log('result7', result7)
	// =>  [ { size: 'XL', type: '棉' } ]


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	import { SKU2Descartes } from './index'

	const arr1 = [ ['a'], ['b'], ['c'] ]
	const descartes1 = new SKU2Descartes(arr1)
	const result1 = descartes1.sku()

	console.log('result1', result1)
	// => [ [ 'a', 'b', 'c' ] ]

	const arr2 = [
	  [ 'a', 1 ], [ 'a', 2 ], [ 'a', 3 ], [ 'a', 4 ], [ 'a', 5 ],
	  [ 'b', 1 ], [ 'b', 2 ], [ 'b', 3 ], [ 'b', 4 ], [ 'b', 5 ],
	  [ 'c', 1 ], [ 'c', 2 ], [ 'c', 3 ], [ 'c', 4 ], [ 'c', 5 ]
	]
	const descartes2 = new SKU2Descartes(arr2)
	const result2 = descartes2.sku()

	console.log('result2', result2)
	// => [['a', 'b', 'c'], [1, 2, 3, 4, 5]]

	const arr3 = [
	  [ '黄色', 'XL', 'aa' ], [ '黄色', 'XL', 'bb' ], [ '黄色', 'X', 'aa' ],
	  [ '黄色', 'X', 'bb' ], [ '黄色', 'XXL', 'aa' ], [ '黄色', 'XXL', 'bb' ],
	  [ '黄色', 'L', 'aa' ], [ '黄色', 'L', 'bb' ], [ '绿色', 'XL', 'aa' ],
	  [ '绿色', 'XL', 'bb' ], [ '绿色', 'X', 'aa' ], [ '绿色', 'X', 'bb' ],
	  [ '绿色', 'XXL', 'aa' ], [ '绿色', 'XXL', 'bb' ], [ '绿色', 'L', 'aa' ],
	  [ '绿色', 'L', 'bb' ], [ '黑色', 'XL', 'aa' ], [ '黑色', 'XL', 'bb' ],
	  [ '黑色', 'X', 'aa' ], [ '黑色', 'X', 'bb' ], [ '黑色', 'XXL', 'aa' ],
	  [ '黑色', 'XXL', 'bb' ], [ '黑色', 'L', 'aa' ], [ '黑色', 'L', 'bb' ]
	]
	const descartes3 = new SKU2Descartes(arr3)
	const result3 = descartes3.sku()

	console.log('result3', result3)
	// => [['黄色', '绿色', '黑色'], ['XL', 'X', 'XXL', 'L'], ['aa', 'bb']]

	const arr4 = []
	const descartes4 = new SKU2Descartes(arr4)
	const result4 = descartes4.sku()

	console.log('result4', result4)
	// => []


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	import { SKU2Descartes } from './index'

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


/***/ }),
/* 10 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);