<template>
  <el-table-column :prop="item.prop"
                   align="center"
                   :width="item.width"
                   :sortable="item.sortable"
                   :formatter="item.formatter"
                   :sort-method="item.sortMethod"
                   :filters="item.filters"
                   :filter-method="item.filterMethod"
                   :label="item.label" />
</template>

<script>
import Vue from 'vue'
import { scrollbar } from 'element-ui'
Vue.use(scrollbar)
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
