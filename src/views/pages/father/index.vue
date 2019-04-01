<template>
  <div class="secret">
    <h2>特性继承</h2>
    <p>在组件上绑定的属性，如果没有在组件内部用Props声明，会默认绑定到组件的根元素上</p>
    <p>例如:</p>
    <p>子组件模板是这样的：</p>
    <div class="code">
      <textarea disabled>
        <input type="text" value="我是子组件">
      </textarea>
    </div>
    <p>父组件中调用：</p>
    <div class="code">
      <textarea disabled>
        <son value="我是父组件" class="father"></son>
      </textarea>
    </div>
    <p>对于绝大多数特性来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 value="我是父组件"" 就会替换掉 value="我是子组件 并把它破坏！庆幸的是，class 和 style 特性会稍微智能一些，即两边的值会被合并起来，从而得到最终的值</p>
    <Son value="我是父组件"
         class="son" />
    <h2>禁用特性继承</h2>
    <p>如果不希望组件的根元素继承特性，你可以在组件的选项中设置 inheritAttrs: false ,但是不会影响 style 和 class 的绑定</p>
    <Son1 value="我是父组件"
          class="son" />
  </div>
</template>

<script>
const Son = () => import('pages/father/components/son')
const Son1 = () => import('pages/father/components/son1')
export default {
  components: {
    Son, Son1
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
.secret
  margin-top 20px
  text-align left
  padding 20px
  line-height 2
  p
    text-indent 24px
  .code
    width 80%
    margin 10px auto
    background #f8f8f8
    textarea
      width 60%
      line-height 1
      height 100%
      margin 20px auto
      border none
      resize none
      background #f8f8f8
</style>
