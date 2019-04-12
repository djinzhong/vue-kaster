<template>
  <div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'manitoList'}, name: '大神列表'
    },{
      router: {name: 'applyList'}, name: '大神申请列表'
    }]" />
  </div>
</template>

<script>
import { postOkami } from 'api/index'
export default {
  components: {
  },
  data () {
    return {

    }
  },
  created () {
    this._getList()
  },
  methods: {
    _getList () {
      postOkami('applyList').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
