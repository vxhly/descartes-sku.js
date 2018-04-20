class Descartes {
  constructor (arr) {
    this._arr = arr
  }
  descartes () {
    const arr = this._arr
    let result = []

    if (!arr) return []
    if (arr.length <= 0) return []
    if (arr.length === 1) result = this.descartes1(arr[0])
    if (arr.length === 2) result = this.descartes2(arr[0], arr[1])
    if (arr.length >= 3) result = this.descartes3(arr)

    return result
  }
  descartes1 (arr1) {
    const result = []

    for (let i in arr1) {
      result.push(arr1[i])
    }

    return result
  }
  descartes2 (arr1, arr2) {
    const result = []

    for (let i in arr1) {
      for (let j in arr2) {
        result.push([arr1[i], arr2[j]])
      }
    }

    return result
  }
  descartes3 (arr) {
    let arr2D = this.descartes2(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
      arr2D = this.descartes2DAnd1D(arr2D, arr[i])
    }

    return arr2D
  }
  descartes2DAnd1D (arr2D, arr1D) {
    const result = []

    for (let i in arr2D) {
      for (let j in arr1D) {
        result.push(arr2D[i].concat(arr1D[j]))
      }
    }

    return result
  }
}
export default Descartes
