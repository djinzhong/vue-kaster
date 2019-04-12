<template>
  <div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'gameProjectList'}, name: '即时比赛'
    },{
      router: {name: 'gameProjectDetails', query: {id: $route.query.id}}, name: '比赛详情'
    }]" />
    <el-table :data="tableData.list">
      <el-table-column type="expand">
        <template slot-scope="props">
          <game-details-table :data="props.row" :name="name"></game-details-table>
        </template>
      </el-table-column>
      <el-table-column type="index"
                       width="50" />
      <dj-table-column v-for="(item,index) in gameDetails"
                       :key="index"
                       :item="item" />
    </el-table>
  </div>
</template>

<script>
import { gameDetails } from '../config/project.config.js' // 表格基础数据配置
import gameDetailsTable from '../components/gameDetailsTable' // 马匹详情列表
export default {
  components: {
    gameDetailsTable
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    tableData: function () {
      // 根据id获取比赛详情信息
      let data = this.data.filter(data => data.id === this.$route.query.id)
      return data.length ? data[0] : {}
    },
    name: function () {
      let weekList = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let week = new Date(this.tableData.time * 1000)
      week = week.getDay()
      return `【${this.tableData.title}】 ${weekList[week]} ${this.tableData.title}${this.tableData.track}`
    }
  },
  data () {
    return {
      gameDetails: gameDetails
    }
  }
}
</script>

<style lang='stylus' scoped></style>
