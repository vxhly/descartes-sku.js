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

  /**
   * [search 搜索]
   * @method search
   * @return {[Object]} [SKU]
   */
  search () {
    const SKU = this._SKU
    const sku = this._sku
    let result

    const _search = (sku, search_obj, sku_key) => {
      try {
        let _sku_key = sku_key || 0
        const keys = _.keys(search_obj)
        const _result = []
        sku.forEach(item => {
          if (item[keys[_sku_key]] === search_obj[keys[_sku_key]]) _result.push(item)
        })

        if (_.size(_result) > 1) _search(_result, search_obj, _sku_key + 1)
        else if (_.size(_result) === 1) result = _result
      } catch (err) {
        throw new Error('The data entered is incorrect !!!')
      }
    }

    _search(SKU, sku)

    return _.size(result) === 1 && result ? result[0] : {}
  }
}

export default SearchSKU
