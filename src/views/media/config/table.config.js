import { typeFormatter, dataFormatter } from 'utils/formatter' // 时间格式化函数
import { tableFilter } from 'utils/filter' // 类型过滤

const typeList = [
  { text: '单张封面', value: 1 },
  { text: 'banner新闻', value: 2 },
  { text: '三张封面', value: 3 }
]

const statusList = [
  { text: '停用', value: 0 },
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

const newsTableList = [
  { prop: 'id', width: '50', label: 'ID' },
  { prop: 'title', width: null, label: '标题' },
  { prop: 'sort', width: '90', label: '优先级', sortable: true },
  { prop: 'author', width: '60', label: '作者' },
  { prop: 'views', width: '90', label: '阅读量', sortable: true },
  { prop: 'praise', width: '90', label: '点赞数', sortable: true },
  { prop: 'type', width: '100', label: '类型', formatter: typeFormatter('type', typeList), filters: typeList, filterMethod: tableFilter('type') },
  { prop: 'tags', width: '80', label: '标签' },
  { prop: 'create_time', width: '160', label: '创建时间', sortable: true, formatter: dataFormatter('create_time') },
  { prop: 'status', width: '80', label: '状态', formatter: typeFormatter('status', statusList), filters: statusList, filterMethod: tableFilter('status') }
]

const videoTableList = [
  { prop: 'id', width: '50', label: 'ID' },
  { prop: 'title', width: null, label: '标题' },
  { prop: 'views', width: '90', label: '播放量', sortable: true },
  { prop: 'praise', width: '90', label: '点赞数', sortable: true },
  { prop: 'comment', width: '90', label: '评论数', sortable: true },
  { prop: 'sort', width: '90', label: '排序', sortable: true },
  { prop: 'create_time', width: '160', label: '创建时间', sortable: true, formatter: dataFormatter('create_time') },
  { prop: 'status', width: '80', label: '状态', formatter: typeFormatter('status', statusList), filters: statusList, filterMethod: tableFilter('status') }
]

const detailsNewsForm = {
  title: '',
  author: '',
  sort: '1',
  views: '100',
  praise: '100',
  desc: '',
  status: '1',
  type: '1',
  tags: '',
  cover_1: '', // 封面图
  cover_2: '',
  cover_3: '',
  content: null
}

export {
  newsTableList,
  typeList,
  detailsNewsForm,
  videoTableList
}
