/*
* 格式化工厂
* 负责进行表格数据格式化
*/
import { dataFormat } from 'utils/dataFormatter' // 时间格式器

/**
 * 时间格式函数
 *
 * @param {String} key 表格中具体时间变量名
 * @param {String} type 需要格式化时间的类型
 * @returns {Function}
 */
const dataFormatter = function (key, type) {
  return function (row) {
    return dataFormat(row[key], type)
  }
}

/**
 * 字符串拼接长度计算
 *
 * @param {String} key 表格中数据变量名
 * @param {String} string 字符串分隔符
 * @param {Boolean} last 字符串尾是否含有分隔符
 * @returns {Function}
 */
const stringFormatter = function (key, string, last) {
  return function (row) {
    let number = row[key].split(string).length
    return last ? number - 1 : number
  }
}

/**
 *
 *
 * @param {String} key 变量名
 * @param {Array} arr 所有状态
 * @returns {Function}
 */
const typeFormatter = function (key, arr) {
  return function (row) {
    let list = arr.filter(item => item.value === +row[key])
    return list[0].text ? list[0].text : '未知'
  }
}

export {
  dataFormatter,
  stringFormatter,
  typeFormatter
}
