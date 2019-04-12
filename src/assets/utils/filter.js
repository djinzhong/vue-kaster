/*
*
* 过滤函数
*
*/

/**
 *表格用于筛选过滤
 *
 * @param {String} key
 * @returns {Function}
 */
const tableFilter = function (key) {
  return function (value, row) {
    return +row[key] === value
  }
}

export {
  tableFilter
}
