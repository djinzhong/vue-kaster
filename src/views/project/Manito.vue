<template>
  <router-view v-if="list" :data="list" @renewal="_getList"></router-view>
</template>

<script>
import { postOkami } from 'api/index'
export default {
  data () {
    return {
      list: null
    }
  },
  created () {
    this._getList()
  },
  methods: {
    _getList () {
      postOkami('lists').then(res => {
        this.list = res
      })
    }
  }
}
</script>
