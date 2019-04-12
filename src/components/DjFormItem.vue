<template>
<el-form-item :label="item.label">
  <!-- 输入框形式 -->
  <el-input v-if="!item.type" />
  <!-- 开关选择 -->
  <el-switch v-if="item.type === 'switch'" />
  <!-- 单选 -->
  <el-radio-group v-if="item.type === 'radio'">
    <el-radio>{{}}</el-radio>
  </el-radio-group>
</el-form-item>
</template>

<script>
export default {
  components: {

  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>

</style>
