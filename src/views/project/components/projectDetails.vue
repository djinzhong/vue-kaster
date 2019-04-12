<template>
  <el-form label-position="left"
           inline
           label-width="80px"
           class="demo-table-expand">
    <el-form-item v-for="(item,index) in data.data"
                  :key="index"
                  style="width: 50%"
                  label="场次名称">
      <span>{{item.describe}}</span>
      <div class="box">
        <span class="box-span">玩法</span>
        <span>{{data.game_type | playingFilter}}</span>
      </div>
      <div class="box">
        <span class="box-span">场次</span>
        <span>{{item.game_id}}</span>
      </div>
      <el-form label-position="left"
               v-for="(items,num) in item.horse"
               :key="num">
        <el-form-item label="马号" style="width: 40%">
          <span>{{items.fence}}</span>
        </el-form-item>
        <el-form-item label="马匹名称"
                      style="width: 60%">
          <span>{{items.name}}</span>
        </el-form-item>
      </el-form>
    </el-form-item>
    <el-form-item label="推荐理由"
                  style="width: 100%">
      <span>{{data.desc}}</span>
    </el-form-item>
    <el-form-item v-if="data.audio_url != ''"
                  label="推荐语音"
                  style="width: 100%">
      <audio :src="data.audio_url"
             controls></audio>
    </el-form-item>
  </el-form>
</template>

<script>
import { playList } from '../config/play.config.js'
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  filters: {
    playingFilter: function (value) {
      let list = playList.filter(item => item.id === +value)
      return list[0].name ? list[0].name : ''
    }
  }
}
</script>

<style lang='stylus' scoped>
.demo-table-expand
  font-size 0
  >>> .el-form-item__content
    width 50%
.demo-table-expand label
  width 90px
  color #99a9bf
.demo-table-expand .el-form-item
  margin-right 0
  margin-bottom 0
  width 50%
.box
  position relative
  .box-span
    position absolute
    left -80px
</style>
