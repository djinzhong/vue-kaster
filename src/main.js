import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from './store'
import './plugins/element.js'
import 'font/iconfont.css'

import DjTableColumn from 'components/DjTableColumn'
import DjBreadcrumb from 'components/DjBreadcrumb'

// 引入全局过滤器
import 'utils/filter.js'

Vue.component('DjTableColumn', DjTableColumn)
Vue.component('DjBreadcrumb', DjBreadcrumb)

Vue.config.productionTip = false

router.beforeEach(
  (to, from, next) => {
    if (to.name === 'login') {
      next()
    } else {
      if (localStorage.getItem('isLogin')) {
        next()
      } else {
        next({ name: 'login' })
      }
    }
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
