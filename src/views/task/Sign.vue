<template>
  <div class="calendar">
    <div class="header">
      <el-button plain
                 @click="allHandle">{{allHandleText}}</el-button>
      <div class="global-allocation">
        <span class="allocation-name">名称</span>
        <input type="text"
               v-model="signName"
               class="allocation-value">
      </div>

      <div class="global-allocation">
        <span class="allocation-name">状态</span>
        <input type="text"
               v-model="status"
               class="allocation-value">
        <span class="allocation-label">1为启用，0为停止使用</span>
      </div>

      <div class="global-allocation">
        <span class="allocation-name">每天活跃点</span>
        <input type="text"
               v-model="globalActive"
               class="allocation-value">
        <el-button type="success"
                   size="mini"
                   icon="el-icon-check"
                   class="allocation-button"
                   @click="allocationActive"
                   circle></el-button>
      </div>

      <div class="global-allocation">
        <span class="allocation-name">每日积分数量</span>
        <input type="text"
               v-model="globalNum"
               class="allocation-value">
        <el-button type="success"
                   size="mini"
                   icon="el-icon-check"
                   class="allocation-button"
                   @click="allocationNum"
                   circle></el-button>
      </div>
    </div>
    <!-- 活跃点配置 -->
    <div class="active-allocation">
      <el-tag :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm">
      </el-input>
      <el-button v-else
                 class="button-new-tag"
                 size="small"
                 @click="showInput">+ 添加活跃点</el-button>
      <!-- 配置说明 -->
      <div>
        <span class="allocation-label">任务点配置说明</span>
        <span class="allocation-label">A 格式（活跃点|奖励类型|奖励id|奖励数量|宝箱顺序1,2,3）</span>
        <span class="allocation-label">B 奖励类型：1.积分，2：福利卡，3：劵</span>
        <span class="allocation-label">C 积分 id=0 ,其余奖励请参考具体奖励配置</span>
        <span class="allocation-label"
              style="color: red">D 切换月份并不保存前一月份信息</span>
      </div>
      <div class="allocation-submit">
        <el-button @click="onSubmit">立即创建</el-button>
        <span class="allocation-label"
              style="color: red">请确保信息填写完整，再提交</span>
        <download-btn :header="downloadHeader"
                      :data="downloadData"></download-btn>
      </div>
    </div>

    <!-- 时间显示 -->
    <div class="calendar-time">
      <i class="el-icon-arrow-left"
         @click="lastMonth"></i>
      <div class="header-month">{{year}}年{{month}}月</div>
      <i class="el-icon-arrow-right"
         @click="nextMonth"></i>
    </div>
    <!-- 星期 -->
    <div class="calendar-content week">
      <div class="calendar-item"
           v-for="(item,index) in week"
           :key="index">
        <div class="calendar-dar">{{item}}</div>
      </div>
    </div>
    <!-- 日历 -->
    <div class="calendar-content">
      <div class="calendar-item"
           v-for="(item,index) in day"
           :key="index">
        <!-- 日历天数 -->
        <div class="calendar-dar">{{item.day}}</div>
        <!-- 下拉配置 -->
        <el-collapse v-model="item.collapse"
                     v-if="item.day">
          <el-collapse-item title="奖励配置"
                            name="1">
            <div class="allocation">
              <div class="allocation-item">
                <span class="allocation-name">奖励类型:</span>
                <input type="text"
                       v-model="item.award.type"
                       class="allocation-value"
                       :class="{'value-success' : item.award.type != 1}">
              </div>
              <div class="allocation-item">
                <span class="allocation-name">奖励ID:</span>
                <input type="text"
                       v-model="item.award.id"
                       class="allocation-value"
                       :class="{'value-success' : item.award.id != 0}">
              </div>
              <div class="allocation-item">
                <span class="allocation-name">奖励数量:</span>
                <input type="text"
                       v-model="item.award.num"
                       class="allocation-value"
                       :class="{'value-success' : item.award.num != 0}">
              </div>
              <div class="allocation-item">
                <span class="allocation-name">活跃点:</span>
                <input type="text"
                       v-model="item.award.active"
                       class="allocation-value"
                       :class="{'value-success' : item.award.active != 0}">
              </div>
              <div class="allocation-item">
                <span class="allocation-name">特殊日:</span>
                <input type="text"
                       v-model="item.award.special"
                       class="allocation-value"
                       :class="{'value-success' : item.award.special != 0}">
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Collapse, CollapseItem } from 'element-ui'
import DownloadBtn from './components/exportCsv'

Vue.use(Collapse).use(CollapseItem)
export default {
  components: {
    DownloadBtn
  },
  data () {
    return {
      week: ['日', '一', '二', '三', '四', '五', '六'],
      year: '', // 年
      month: '', // 月份
      day: [], // 日历数
      list: [],
      allHandleText: '全部展开', // 切换配置展开、收起
      inputVisible: false, // 控制活跃点输入框显示
      inputValue: '', // 活跃点输入框内容
      globalActive: '', // 每日活跃点
      globalNum: '', // 每日积分数量
      signName: '签到领福利', // 签到名称
      dynamicTags: [], // 任务点配置
      status: 0, // 签到状态
      id: this.$route.query.id,
      // 导出csv文件头部信息
      downloadHeader: [
        { label: 'id', prop: 'id' },
        { label: 'name', prop: 'name' },
        { label: 'point', prop: 'point' },
        { label: 'status', prop: 'status' },
        { label: 'data', prop: 'data' },
        { label: 'code', prop: 'code' }
      ],
      downloadData: [
        { id: '月份id', name: '签到名称', point: '宝箱点数', status: '状态', data: '月份每天奖励数据', code: '标识' }
      ]
    }
  },
  created () {
    let date = new Date()
    // 初始化日历
    this.newCalendar(date)
  },
  methods: {
    // 新建日历
    newCalendar (date, daydata) {
      this.year = date.getFullYear()
      this.month = date.getMonth()
      let thisMonthEnd = new Date(this.year, this.month + 1, 0) // 本月末
      let thisDay = thisMonthEnd.getDate() // 月末号即这个月的天数
      this.month = ++this.month < 10 ? '0' + this.month : this.month
      date.setDate(1) // 重置时间对象为本月一号
      let week = date.getDay() // 这个月一号是周几
      this.day = []
      for (let i = 1; i <= 40; i++) {
        if (i <= week) {
          this.day.push({
            day: ''
          }) // 前几天都是上个月，置空
        } else {
          let day = i - week
          let time = day < 10 ? '0' + day : day
          let list = []
          if (daydata) {
            list = daydata[day - 1].split('|')
          }
          this.day.push({
            day: day,
            collapse: [],
            award: {
              time: this.month + time,
              type: list[1] ? list[1] : 1,
              id: list[2] ? list[2] : 0,
              num: list[3] ? list[3] : 0,
              active: list[4] ? list[4] : 0,
              special: list[5] ? list[5] : 0
            }
          })
          if (day === thisDay) {
            break // 如果填满这个月天数就结束
          }
        }
      }
    },
    // 下个月
    nextMonth () {
      let date = new Date(this.year, this.month)
      this.newCalendar(date)
    },
    // 上个月
    lastMonth () {
      let date = new Date(this.year, this.month - 1, 0)
      this.newCalendar(date)
    },
    // 全部展开与收起
    allHandle () {
      this.day.map(item => {
        if (item.day !== '') {
          if (this.allHandleText === '全部展开') {
            item.collapse = []
            item.collapse.push('1')
          } else {
            item.collapse = []
          }
        }
        return item
      })
      if (this.allHandleText === '全部展开') {
        this.allHandleText = '全部收起'
      } else {
        this.allHandleText = '全部展开'
      }
    },
    // 删除活跃点
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    // 显示输入框
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 输入框获得焦点事件
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    // 每天活跃点配置
    allocationActive () {
      this.day.map(item => {
        if (item.day !== '' && item.award) {
          item.award.active = this.globalActive
        }
        return item
      })
    },
    // 每日积分配置
    allocationNum () {
      this.day.map(item => {
        if (item.day !== '' && item.award) {
          item.award.num = this.globalNum
        }
        return item
      })
    },
    // 立即创建
    onSubmit () {
      if (this.signName === '') {
        this.$message.error('请填写签到名称')
        return false
      }

      let length = this.dynamicTags.length
      if (length === 0) {
        this.$message.error('不要这么抠门了，至少给一个活跃点吧')
        return false
      }
      let point = ''
      this.dynamicTags.map((item, index) => {
        point += item
        if (index !== length - 1) {
          point += '+'
        }
      })

      let dayData = ''
      let dayLength = this.day.length
      this.day.map((item, index) => {
        let d = item.award
        if (item.day !== '') {
          dayData += d.time + '|' + d.type + '|' + d.id + '|' + d.num + '|' + d.active + '|' + d.special

          if (index !== dayLength - 1) {
            dayData += '+'
          }
        }
      })
      let signData = {
        id: this.month,
        name: this.signName,
        point: point,
        status: this.status,
        data: dayData,
        code: this.year.toString() + this.month
      }
      this.downloadData.push(signData)
    }
  }
}
</script>

<style lang='stylus' scoped>
.calendar
  width 100%
  min-height calc(100% - 76px)
  background #59c651
  box-sizing border-box
  padding-bottom 40px
  .allocation-submit
    margin 10px
  .allocation-name
    margin-right 10px
  .allocation-label
    margin-left 10px
    font-size 12px
    color #b3b3b3
  .header
    display flex
    align-items center
    justify-content flex-start
    background #fff
    padding 20px 40px
    .global-allocation
      margin 0 20px
      .allocation-value
        width 100px
      .allocation-button
        margin-left 10px
  .active-allocation
    padding 20px 30px
    background #ffffff
    .active-label
      margin-left 20px
    .el-tag + .el-tag
      margin-left 10px
    .button-new-tag
      margin-left 10px
      height 32px
      line-height 30px
      padding-top 0
      padding-bottom 0
    .input-new-tag
      width 90px
      margin-left 10px
      vertical-align bottom
  .calendar-time
    display flex
    align-items center
    justify-content space-between
    text-align center
    font-size 24px
    padding 0 60px
    color #fff
    line-height 40px
    background #39a54d
  .calendar-content
    display flex
    justify-content flex-start
    flex-wrap wrap
    width 80%
    margin auto
    padding-top 5px
    color #ffffff
    box-sizing border-box
    .calendar-item
      width 14.2%
      text-align center
      font-size 20px
      .allocation
        font-size 12px
        text-align center
        .allocation-name
          display inline-block
          width 60px
        .allocation-value
          width 50px
        .value-success
          color red
  .week>.calendar-item
    height 40px
</style>
