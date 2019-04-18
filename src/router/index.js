import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import Login from 'views/Login'
import {
  addSubmoduleRoutes
} from 'utils/projectStartup'

import mediaRouter from 'router/media/index'
import projectRouter from 'router/project/index'
import schoolRouter from 'router/school/index'
import tashRouter from 'router/task/index'
import jurisdictionRouter from 'router/jurisdictionRouter/index'
import gameRouter from 'router/game/index'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/login',
  name: 'login',
  component: Login
}
]

addSubmoduleRoutes(routes, {
  '/media/': mediaRouter, // 新闻视频
  '/godPlan/': projectRouter, // 大神方案
  '/school/': schoolRouter, // 学堂
  '/task/': tashRouter, // 任务配置
  '/jurisdiction/': jurisdictionRouter, // 权限配置
  '/game/': gameRouter // 比赛配置
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
