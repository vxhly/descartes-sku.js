import _ from 'lodash'

class SKU2Descartes {
  /**
   * [constructor 初始化]
   * @method constructor
   * @param  {[Array | Object]}    arr [[Array1,Array2,Array3,...]]
   */
  constructor (arr) {
    if (_.isArray(arr)) this._arr = arr
    else throw new Error('arr is Array')
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
