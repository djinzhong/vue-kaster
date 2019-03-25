<template>
  <div>
    <h1 class="box">我是父组件</h1>
    <div class="box">{{message}}</div>
    <ul class="box"
        v-if="list.length">
      <li v-for="(item,index) in list"
          :key="index">{{item}}</li>
    </ul>
    <son v-bind="dataPoprs"
         @updata="updata" />
  </div>
</template>

<script>
const son = () => import('pages/sonToFather/son')
export default {
  components: {
    son: son
  },
  data () {
    return {
      message: '',
      list: []
    }
  },
  computed: {
    dataPoprs: function () {
      return {
        message: this.message,
        list: this.list
      }
    }
  },
  methods: {
    updata (newValue) {
      this.message = newValue.name
      this.list = newValue.type
    }
  }
}
</script>

<style lang='stylus' scoped>
.box
  margin 20px auto
</style>
