/*
* @配合el-table组件进行表格数据渲染
*
* 必填参数
* prop {String} 表格列属性名
* width {String} 表格列宽
* label {String} 表格表头名称
* 以下非必填
* sortable {Boolean} 列排序
* formatter {Function} 表格列数据格式化函数
* filters {Array} 过滤状态数组
* filterMethod {Function} 过滤方法
*
*/
import { typeFormatter, dataFormatter } from 'utils/formatter' // 时间格式化函数
import { tableFilter } from 'utils/filter' // 类型过滤

const statusList = [
  { text: '停用', value: 0 },
  { text: '启用', value: 1 }
]

const groupList = [
  { text: '新闻', value: 101 },
  { text: '新手学堂', value: 102 },
  { text: '视频', value: 103 },
  { text: '比赛', value: 104 },
  { text: '方案', value: 109 },
  { text: '大神', value: 110 },
  { text: '系统', value: 111 },
  { text: '信息处理', value: 112 }
]

const groupFormatter = function (key, arr) {
  return function (row) {
    let data = row[key].map(a => {
      let list = arr.filter(b => b.value === +a)
      return list[0].text
    })
    return data.join(' | ') || []
  }
}

const groupFilter = function (key) {
  return function (value, row) {
    return row[key].some(a => +a === value)
  }
}

const userTableList = [
  { prop: 'id', width: '90', label: 'ID' },
  { prop: 'nickname', width: '120', label: '用户名' },
  { prop: 'group', width: null, label: '用户权限', formatter: groupFormatter('group', groupList), filters: groupList, filterMethod: groupFilter('group') },
  { prop: 'reg_time', width: '140', label: '创建时间', sortable: true, formatter: dataFormatter('reg_time') },
  { prop: 'last_login_time', width: '140', label: '最后登录时间', sortable: true, formatter: dataFormatter('last_login_time') },
  { prop: 'status', width: '90', label: '状态', formatter: typeFormatter('status', statusList), filters: statusList, filterMethod: tableFilter('status') }
]

export {
  userTableList, groupList
}
