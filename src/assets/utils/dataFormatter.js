const week = ['日', '一', '二', '三', '四', '五', '六']

/**
 * 时间格式化工厂
 *
 * @export
 * @param {Number} timestamp 时间戳
 * @param {String} type 时间格式
 * @returns {String}
 */
export function dataFormat (timestamp, type) {
  timestamp += ''
  let date = 0
  if (timestamp.length === 13) {
    date = new Date(+timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  } else if (timestamp.length < 13) {
    date = new Date(timestamp * 1000)
  }
  let Y = date.getFullYear()
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  // let s = date.getSeconds()
  // alert(timestamp)
  if (timestamp === '' || timestamp === undefined) {
    return
  }
  switch (type) {
    case 'day':
      return Y + '/' + M + '/' + D
    case 'week':
      return Y + '/' + M + '/' + D + ' 星期' + week[date.getDay()]
    case 'time':
      return h + ':' + m
    case 'slash':
      return Y + '/' + M + '/' + D
    case 'mouth':
      return M + '/' + D
    default:
      return Y + '/' + M + '/' + D + ' ' + h + ':' + m
  }
}
