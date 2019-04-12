<template>
  <div class="table-header">
    <dj-data-picker @dataChang="dataChang" />
  </div>
</template>

<script>
import DjDataPicker from 'components/DjDataPicker'
export default {
  components: {
    DjDataPicker
  },
  methods: {
    dataChang (data1, data2) {
      this.$emit('dataChang', data1, data2)
    }
  }
}
</script>

<style lang='stylus' scoped>
.table-header
  display flex
  justify-content flex-end
</style>
