/*
*混入
*
*data 新闻数据
*tagList 标签列表
*page allPage 页码信息
*/

export const mixin = {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    tagList: {
      type: Array,
      default: () => {
        return []
      }
    },
    page: Number,
    allPage: Number
  },
  computed: {
    tagsList: function () {
      return this.tagList.map(item => {
        return {
          text: item.name,
          value: item.id
        }
      })
    }
  }
}
