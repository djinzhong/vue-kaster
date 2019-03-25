<template>
  <div>
    <h3>我是子组件2</h3>
    <div class="value"
         v-if="form.name">对象传值：{{form.name}}</div>
    <ul v-if="list.length">
      <li v-for="(item,index) in list"
          :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {}
      }
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.value
  margin 20px
</style>
