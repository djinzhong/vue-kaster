<template>
  <div>
    <script id="container"
            name="content"
            type="text/plain">
      这里写你的初始化内容
        </script>
  </div>
</template>
<script>
import '../plugins/ueditor/ueditor.config.js'
import '../plugins/ueditor/ueditor.all.min'
import '../plugins/ueditor/lang/zh-cn/zh-cn'
export default {
  name: 'UE',
  data () {
    return {
      editor: null
    }
  },
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object
    },
    id: {
      type: String
    },
  },
  //此时--el挂载到实例上去了,可以初始化对应的编辑器了
  mounted () {
    this.initEditor()
  },
  beforeDestroy () {
    // 组件销毁的时候，要销毁 UEditor 实例
    if (this.editor !== null && this.editor.destroy) {
      this.editor.destroy();
    }
  },
  methods: {
    initEditor () {
      //dom元素已经挂载上去了
      this.$nextTick(() => {
        // eslint-disable-next-line no-undef
        this.editor = UE.getEditor(this.id, this.config);
        // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
        this.editor.addListener('ready', () => {
          this.$emit('ready', this.editor);
        });
      });
    },
    getUEContent () { // 获取内容方法
      return this.editor.getContent()
    },
    getUEContentTxt () { // 获取纯文本内容方法
      return this.editor.getContentTxt()
    }
  }
}
</script>
