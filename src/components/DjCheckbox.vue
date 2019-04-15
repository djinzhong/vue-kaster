<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate"
                 v-model="checkAll"
                 @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0"></div>
    <el-checkbox-group v-model="checkedCities"
                       @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities"
                   :label="city.value"
                   :key="city.value">{{city.text}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  props: {
    // 默认选择
    checkedDetails: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 选择列表
    cityOptions: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    cities: function () {
      return this.cityOptions
    }
  },
  data () {
    return {
      checkAll: false,
      checkedCities: this.checkedDetails, // 当前选中
      isIndeterminate: true
    }
  },
  methods: {
    // 全选
    handleCheckAllChange (val) {
      this.checkedCities = val ? this.cityOptions.map(item => item.value) : []
      this.isIndeterminate = false
    },
    // 是否有元素选中
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style lang='stylus' scoped></style>
