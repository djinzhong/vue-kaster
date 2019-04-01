import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import {
  addSubmoduleRoutes
} from 'utils/projectStartup'

//组件通信
import communicationRoutes from 'router/communication/router'
import componentsRouter from 'router/components/router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}]

addSubmoduleRoutes(routes, {
  '/communication/': communicationRoutes,
  '/components/':  componentsRouter
})


export default new Router({
  routes: routes
})