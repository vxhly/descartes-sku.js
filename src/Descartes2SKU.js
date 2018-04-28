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
    else throw new Error('arrORobj is Array or Object')
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
