import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from 'store/index'
import './plugins/element.js'
import 'font/iconfont.css'

import DjTableColumn from 'components/DjTableColumn'
import DjBreadcrumb from 'components/DjBreadcrumb'

Vue.component('DjTableColumn', DjTableColumn)
Vue.component('DjBreadcrumb', DjBreadcrumb)

Vue.config.productionTip = false

//  获取角色信息，根据用户权限动态加载路由
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    store.dispatch('setToken', store.getters.token)
    if (to.path === '/login') {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    }
    next({
      path: '/login'
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
