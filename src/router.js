import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    components: {
      default: Home
    }
  }, {
    path: '/fatherToSon',
    name: 'fatherToSon',
    components: {
      default: () => import('pages/fatherToSon/Father')
    }
  }, {
    path: '/sonToFather',
    name: 'sonToFather',
    components: {
      default: () => import('pages/sonToFather/Father')
    }
  }]
})