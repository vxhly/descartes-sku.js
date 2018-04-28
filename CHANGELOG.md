<a name="1.3.0"></a>
# [1.3.0](https://github.com/vxhly/descartes-sku.js/compare/v1.2.8...v1.3.0) (2018-04-28)


### Features

* **SKU2Descartes Descartes2SKU:** Descartes2SKU => 笛卡儿积转换成 SKU；SKU2Descartes => SKU 转笛卡儿积 ([4a468ad](https://github.com/vxhly/descartes-sku.js/commit/4a468ad))


### Performance Improvements

* **Descartes2SKU SKU2Descartes:** 通用方法名，自动判断输入的数值 ([82b1a56](https://github.com/vxhly/descartes-sku.js/commit/82b1a56))
* **SKU2Descartes Descartes2SKU:** 部分方法改成私有方法 ([063025e](https://github.com/vxhly/descartes-sku.js/commit/063025e))


### BREAKING CHANGES

* **SKU2Descartes Descartes2SKU:** 由于JavaScript不提供“私有属性”与“私有方法”，所以只是在命名方式上区别一下
* **SKU2Descartes Descartes2SKU:** Descartes => Descartes2SKU



<a name="1.2.8"></a>
## [1.2.8](https://github.com/vxhly/descartes-sku.js/compare/v1.2.7...v1.2.8) (2018-04-25)


### Bug Fixes

* **bower:** 修复 bower 版本号与 npm 版本号不一致问题 ([225d44f](https://github.com/vxhly/descartes-sku.js/commit/225d44f))
* **index test3:** 修复删除数组元素发生的错误 ([16c1b22](https://github.com/vxhly/descartes-sku.js/commit/16c1b22))



<a name="1.2.7"></a>
## [1.2.7](https://github.com/vxhly/descartes-sku.js/compare/v1.2.5...v1.2.7) (2018-04-25)


### Bug Fixes

* **index test1 test2 test3:** 修复输入的数组长度为 0 时,输出应为 [] ([b69e15a](https://github.com/vxhly/descartes-sku.js/commit/b69e15a))


### BREAKING CHANGES

* **index test1 test2 test3:** 其中输入对象中的数组长度全为 0 时，输出应为 []



<a name="1.2.5"></a>
## [1.2.5](https://github.com/vxhly/descartes-sku.js/compare/v1.2.3...v1.2.5) (2018-04-24)


### Bug Fixes

* **index test3:** 解决在删除空数组时，没有将对应的键删除 ([594b6a7](https://github.com/vxhly/descartes-sku.js/commit/594b6a7))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/vxhly/descartes-sku.js/compare/v1.2.1...v1.2.3) (2018-04-24)


### Bug Fixes

* **index test3:** 处理传入对象，若对象中含有空数组，输出有误 ([15e6aef](https://github.com/vxhly/descartes-sku.js/commit/15e6aef))


### BREAKING CHANGES

* **index test3:** 检测数组的长度，数组的长度等于 0 则不对该数组进行解析



<a name="1.2.1"></a>
## [1.2.1](https://github.com/vxhly/descartes-sku.js/compare/v1.1.1...v1.2.1) (2018-04-24)


### Features

* **index test3:** 支持传入对象 ([caefa40](https://github.com/vxhly/descartes-sku.js/commit/caefa40))


### Performance Improvements

* **bower.json:** 允许通过 bower i descartes-sku.js ([bd65909](https://github.com/vxhly/descartes-sku.js/commit/bd65909))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/vxhly/descartes-sku.js/compare/v1.0.1...v1.1.1) (2018-04-20)



<a name="1.0.1"></a>
## [1.0.1](https://github.com/vxhly/descartes-sku.js/compare/8daaa39...v1.0.1) (2018-04-20)


### Features

* **index.js test1.js test2.js:** 添加算法二，递归实现 ([c75d0b1](https://github.com/vxhly/descartes-sku.js/commit/c75d0b1))
* **实现算法:** 传入 [[Array1],[Array2],...] ([8daaa39](https://github.com/vxhly/descartes-sku.js/commit/8daaa39))



