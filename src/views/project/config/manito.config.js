import { stringFormatter, typeFormatter } from 'utils/formatter' // 字符串拼接长度计算
import { sortNumber } from 'utils/sortMethod' // 数字大小排序
import { tableFilter } from 'utils/filter' // 类型过滤

const typeFiltersList = [
  { text: '民间大神', value: 1 },
  { text: '平台大神', value: 2 }
]

const statusList = [
  { text: '禁用', value: -1 },
  { text: '启用', value: 1 }
]

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

// 方案列表
const manitoTableList = [
  { prop: '_id', width: '180', label: 'ID' },
  { prop: 'name', width: '140', label: '名称' },
  { prop: 'fans', width: '100', label: '总关注数', sortable: true, sortMethod: sortNumber('fence') },
  { prop: 'record', width: '100', label: '方案数量', sortable: true, formatter: stringFormatter('record', '|', true) },
  { prop: 'sign', width: null, label: '简介' },
  { prop: 'tags', width: null, label: '标签' },
  { prop: 'hit', width: '120', label: '最近命中率', sortable: true, sortMethod: sortNumber('hit') },
  { prop: 'max', width: '100', label: '最近连红', sortable: true, sortMethod: sortNumber('max') },
  { prop: 'last', width: '100', label: '最近连红', sortable: true, sortMethod: sortNumber('last') },
  { prop: 'type', width: '120', label: '大神类型', sortable: true, formatter: typeFormatter('type', typeFiltersList), filters: typeFiltersList, filterMethod: tableFilter('type') },
  { prop: 'status', width: '100', label: '状态', sortable: true, formatter: typeFormatter('status', statusList), filters: statusList, filterMethod: tableFilter('status') }
]

export {
  manitoTableList
}
