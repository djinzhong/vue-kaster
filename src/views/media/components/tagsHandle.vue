<template>
  <div class='tags-handle'>
    <i class='el-icon-setting tag-setting'
       @click='dialogFormVisible = true'></i>
    <el-dialog title='修改标签'
               :visible.sync='dialogFormVisible'>
      <!-- 修改标签 -->
      <el-form v-for='(item,index) in tagsList'
               :key='index'
               :inline='true'
               :model='item'
               label-width="80px"
               class='demo-form-inline'>
        <el-form-item label='标签名称'>
          <el-input v-model='item.name'
                    class='input-50'></el-input>
        </el-form-item>
        <el-form-item label='状态'>
          <el-input v-model='item.status'
                    class='input-50'></el-input>
        </el-form-item>
        <el-form-item label='优先级'>
          <el-input v-model='item.sort'
                    class='input-50'></el-input>
        </el-form-item>
        <el-button type='primary'
                   icon='el-icon-edit'
                   circle
                   size="mini"
                   @click='editTag(item)'
                   class='margin-left'></el-button>
        <el-button type='danger'
                   icon='el-icon-delete'
                   circle
                   size="mini"
                   @click='delTag(item.id)'
                   class='margin-left'></el-button>
      </el-form>
      <!-- 新增标签 -->
      <el-form :inline='true'
               :rules='addTagRules'
               ref='formInline'
               :model='formInline'
               label-width="80px"
               class='demo-form-inline'>
        <el-form-item label='标签名称'
                      prop='name'>
          <el-input v-model='formInline.name'
                    class='input-50'></el-input>
        </el-form-item>
        <el-form-item label='状态'
                      prop='status'>
          <el-input v-model='formInline.status'
                    class='input-50'></el-input>
        </el-form-item>
        <el-form-item label='优先级'
                      prop='sort'>
          <el-input v-model='formInline.sort'
                    class='input-50'></el-input>
        </el-form-item>
        <el-button type='primary'
                   size="mini"
                   icon='el-icon-circle-plus-outline'
                   class='margin-left'
                   @click='addTag'>添加</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { postNews } from 'api/index'
import { Dialog } from 'element-ui'

Vue.use(Dialog)
export default {
  props: {
    tagsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      dialogFormVisible: false, // 是否显示弹窗
      // 新增标签表单
      formInline: {
        type: '1',
        name: '',
        status: '',
        sort: ''
      },
      // 新增标签表单
      addTagRules: {
        name: [
          { required: true, message: '请输入标签名称', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请输入标签状态', trigger: 'blur' }
        ],
        sort: [
          { required: true, message: '请输入标签优先级', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 修改标签内容
    editTag (item) {
      item.type = '2'
      postNews('typeOperate', item).then(res => {
        this.$message.success('修改成功')
        this.renewalTag()
      })
    },
    // 删除标签
    delTag (id) {
      postNews('typeOperate', {
        type: '3',
        id: id
      }).then(res => {
        this.$message.success('删除成功')
        this.renewalTag()
      })
    },
    // 新增标签
    addTag () {
      postNews('typeOperate', this.formInline).then(res => {
        this.$message.success('添加成功')
        this.renewalTag()
      })
    },
    renewalTag () {
      this.$emit('renewalTag')
    }
  }
}
</script>

<style lang='stylus' scoped>
.tags-handle
  margin-left 20px
  .tag-setting
    font-size 20px
    vertical-align middle
    cursor pointer
.input-50
  width 100px
.demo-form-inline
  margin 10px 0
</style>
