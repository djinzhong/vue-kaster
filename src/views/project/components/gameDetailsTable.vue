<template>
  <div>
    <el-table :data="data.scheduleDetails"
              ref="horseTable"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <dj-table-column v-for="(item,index) in horseTableList"
                       :key="index"
                       :item="item" />
    </el-table>
    <project-form @onSubmit="onSubmit" />
  </div>
</template>

<script>
import { horseTableList } from '../config/project.config.js'
import { postOkami } from 'api/index' // 请求接口
import projectForm from '../components/projectForm'
export default {
  components: {
    projectForm
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    name: String
  },
  data () {
    return {
      horseTableList: horseTableList, // 马匹表单配置
      horseSelection: [] // 选择马匹
    }
  },
  methods: {
    // 马匹勾选器
    handleSelectionChange (val) {
      console.log(val)
      this.horseSelection = val
    },
    // 创建方案
    onSubmit (form) {
      let idList = this.horseSelection.map(item => item.horse_id)
      let obj = {
        schedule_id: this.$route.query.id, // 比赛ID
        game_type: form.playMethod, // 玩法
        data: [
          {
            game_id: this.data.num, // 场次
            horse_id: idList.join('|') // 选中马匹
          }
        ],
        name: `${this.name} 场次${this.data.num}`,
        consume_type: '', // 奖励类型
        consume: '', // 奖励数量
        desc: form.desc, // 推荐理由
        audio_url: null // 语音
      }
      postOkami('createPlan', obj).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
