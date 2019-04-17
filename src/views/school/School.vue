<template>
  <router-view v-if="data"
               @renewalSchool="renewalSchool"
               :data="data"></router-view>
</template>

<script>
import { postSchool } from 'api/index'
export default {
  components: {

  },
  data () {
    return {
      data: null
    }
  },
  created () {
    this._getList()
  },
  methods: {
    _getList () {
      postSchool('list').then(res => {
        if (res) this.data = res
      })
    },
    renewalSchool () {
      this.data = null
      this._getList()
    }
  }
}
</script>

<style lang='stylus' scoped></style>
