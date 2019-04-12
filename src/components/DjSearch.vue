<template>
  <el-input placeholder="请输入内容"
            v-model="value"
            @keyup.enter.native.stop="search"
            class="input-with-select">
    <el-button slot="append"
               @click="search"
               icon="el-icon-search"></el-button>
  </el-input>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.value)
    }
  }
}
</script>

<style lang='stylus' scoped>
.input-with-select
  width 300px
</style>
