<template>
  <div>
    <h3>我是子组件1</h3>
    <div class="value">通过字符串传值：{{name}}</div>
    <div class="value"
         v-if="form.name">通过对象传值：{{form.name}}</div>
    <div class="value"
         v-if="newObj.name">新创建的对象：{{newObj.name}}</div>
    <div class="value">
      <ul v-if="form.type.length">
        <li v-for="(item,index) in form.type"
            :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="value">
      <ul v-if="list.length">
        <li v-for="(item,index) in list"
            :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    form: {
      type: Object,
      default: () => {
        return {}
      }
    },
    newObj: {
      type: Object,
      required: true,
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
