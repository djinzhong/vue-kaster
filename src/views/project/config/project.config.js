import { dataFormatter } from 'utils/formatter'
import { sortNumber } from 'utils/sortMethod' // 数字大小排序

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
*
*/

// 方案列表
const projectTableList = [
  { prop: '_id', width: '200', label: 'ID' },
  { prop: 'name', width: null, label: '比赛名称' },
  { prop: 'game_title', width: null, label: '比赛场地' },
  { prop: 'time', width: '200', label: '方案创建时间', sortable: true, formatter: dataFormatter('time') }
]

// 即时比赛列表
const gameTableList = [
  { prop: 'id', width: '80', label: 'ID' },
  { prop: 'track', width: null, label: '赛事名称' },
  { prop: 'title', width: null, label: '赛事地址' },
  { prop: 'time', width: '200', label: '赛事时间', sortable: true, formatter: dataFormatter('time', 'day') }
]

// 比赛详情列表
const gameDetails = [
  { prop: 'num', width: '80', label: '场次顺序' },
  { prop: 'id', width: null, label: '场次ID' },
  { prop: 'describe', width: null, label: '场次名称' },
  { prop: 'distance', width: null, label: '比赛距离' },
  { prop: 'horseClass', width: '80', label: '班次' },
  { prop: 'time', width: '200', label: '赛事时间', sortable: true, formatter: dataFormatter('time') }
]

// 比赛马匹列表
const horseTableList = [
  { prop: 'sort', width: '80', label: '#' },
  { prop: 'horse_id', width: '80', label: 'ID' },
  { prop: 'name', width: null, label: '马匹名称' },
  { prop: 'knight.name', width: null, label: '骑师' },
  { prop: 'traniner.name', width: null, label: '练马师' },
  { prop: 'fence', width: '80', label: '档位', sortable: true, sortMethod: sortNumber('fence') },
  { prop: 'weight', width: '80', label: '负重', sortable: true, sortMethod: sortNumber('fence') }
]

export {
  projectTableList,
  gameTableList,
  gameDetails,
  horseTableList
}
