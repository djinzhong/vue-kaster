import {
  post, login
} from './helpers'

const postNews = post('News')
const postVideo = post('Video')
const postSchool = post('School')
const postGame = post('Game')
const postHorse = post('Horse')
const postTj = post('Tj')
const postSchedule = post('Schedule')
const postDraw = post('Draw')
const postOkami = post('Okami')
const postUser = post('User')
const postLogin = login()

export {
  postLogin, // 登录
  postNews, // 新闻
  postSchool, // 新手学堂
  postVideo, // 视频
  postGame, // 游戏
  postHorse, // 马匹
  postTj, // 骑师练马师
  postSchedule, // 比赛列表
  postDraw, // 场地列表
  postOkami, // 大神方案
  postUser // 用户中心管理
}
