// 重置排序，按数字大小
const sortNumber = function (key) {
  return function (a, b) {
    return a[key] - b[key]
  }
}

export {
  sortNumber
}
