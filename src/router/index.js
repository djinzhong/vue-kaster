import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import Login from 'views/Login'
import {
  addSubmoduleRoutes
} from 'utils/projectStartup'

import mediaRouter from 'router/media/index'
import projectRouter from 'router/project/index'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/exercise',
  name: 'exercise',
  component: () => import('views/exercise/exercise')
}]

addSubmoduleRoutes(routes, {
  '/media/': mediaRouter,
  '/godPlan/': projectRouter
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
