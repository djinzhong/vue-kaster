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
import { typeFormatter } from 'utils/formatter'
import { tableFilter } from 'utils/filter' // 类型过滤

const typeList = [
  { text: '马球运动详情', value: 1 },
  { text: '马术比赛详情', value: 2 },
  { text: '速度赛马', value: 3 },
  { text: '马业', value: 4 },
  { text: '速度赛马/马业详情', value: 5 }
]

const schoolTableList = [
  { prop: 'id', width: '50', label: 'ID' },
  { prop: 'title', width: null, label: '标题' },
  { prop: 'type', width: '200', label: '导航菜单', formatter: typeFormatter('type', typeList), filters: typeList, filterMethod: tableFilter('type') },
  { prop: 'code', width: '200', label: '图片菜单' },
  { prop: 'code', width: '100', label: 'code' },
  { prop: 'sort', width: '200', label: '优先级', sortable: true }
]

export {
  schoolTableList,
  typeList
}
