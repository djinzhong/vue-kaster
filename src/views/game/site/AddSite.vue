<template>
  <div>
    <el-breadcrumb style="padding:0 0 40px 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{name: 'site'}">场地</el-breadcrumb-item>
      <el-breadcrumb-item>场地配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="名称"
                    class="inline-block">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="长度"
                    class="inline-block">
        <el-input v-model="form.length"></el-input>
      </el-form-item>
      <el-form-item label="类型"
                    class="inline-block">
        <el-select v-model="form.type"
                   style="width: 182px"
                   placeholder="请选择场地类型">
          <el-option label="跑马地"
                     value="1"></el-option>
          <el-option label="沙田（草地）"
                     value="2"></el-option>
          <el-option label="沙田(全天候)"
                     value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="栏位1"
                    class="inline-block">
        <el-input v-model="form.draw1"></el-input>
      </el-form-item>
      <el-form-item label="栏位2"
                    class="inline-block">
        <el-input v-model="form.draw2"></el-input>
      </el-form-item>
      <el-form-item label="栏位3"
                    class="inline-block">
        <el-input v-model="form.draw3"></el-input>
      </el-form-item>
      <el-form-item label="栏位4"
                    class="inline-block">
        <el-input v-model="form.draw4"></el-input>
      </el-form-item>
      <el-form-item label="栏位5"
                    class="inline-block">
        <el-input v-model="form.draw5"></el-input>
      </el-form-item>
      <el-form-item label="栏位6"
                    class="inline-block">
        <el-input v-model="form.draw6"></el-input>
      </el-form-item>
      <el-form-item label="栏位7"
                    class="inline-block">
        <el-input v-model="form.draw7"></el-input>
      </el-form-item>
      <el-form-item label="栏位8"
                    class="inline-block">
        <el-input v-model="form.draw8"></el-input>
      </el-form-item>
      <el-form-item label="栏位9"
                    class="inline-block">
        <el-input v-model="form.draw9"></el-input>
      </el-form-item>
      <el-form-item label="栏位10"
                    class="inline-block">
        <el-input v-model="form.draw10"></el-input>
      </el-form-item>
      <el-form-item label="栏位11"
                    class="inline-block">
        <el-input v-model="form.draw11"></el-input>
      </el-form-item>
      <el-form-item label="栏位12"
                    class="inline-block">
        <el-input v-model="form.draw12"></el-input>
      </el-form-item>
      <el-form-item label="栏位13"
                    class="inline-block">
        <el-input v-model="form.draw13"></el-input>
      </el-form-item>
      <el-form-item label="栏位14"
                    class="inline-block">
        <el-input v-model="form.draw14"></el-input>
      </el-form-item>
      <el-form-item label="排序"
                    class="inline-block">
        <el-input v-model="form.sort"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">{{submitText}}</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postDraw } from 'api/index'
export default {
  data () {
    return {
      form: {
        name: '',
        length: '',
        type: '',
        draw1: '',
        draw2: '',
        draw3: '',
        draw4: '',
        draw5: '',
        draw6: '',
        draw7: '',
        draw8: '',
        draw9: '',
        draw10: '',
        draw11: '',
        draw12: '',
        draw13: '',
        draw14: '',
        sort: ''
      },
      submitText: '立即创建',
      id: this.$route.query.id
    }
  },
  created () {
    if (this.$route.query.id > 0) {
      this.submitText = '立即修改'
      this._getSite()
    }
  },
  methods: {
    _getSite () {
      this.form.id = this.id
      postDraw('info', this.form).then(res => {
        if (res) this.getSite(res)
      })
    },
    getSite (res) {
      this.form = res
    },
    _postSite () {
      postDraw('set', this.form).then(res => {
        if (res) this.postSite(res)
      })
    },
    postSite (res) {
      this.$message({
        type: 'success',
        message: res
      })
      this.$router.push({ name: 'site' })
    },
    onSubmit () {
      this._postSite()
    }
  }
}
</script>

<style lang="stylus" scoped>
.inline-block
  display inline-block
</style>
