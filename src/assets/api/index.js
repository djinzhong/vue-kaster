import {
  post, login
} from './helpers'

const postNews = post('News')
const postVideo = post('Video')
const postSchool = post('School')
const postGame = post('Game')
const postOkami = post('Okami')
const postUser = post('User')
const postLogin = login()

export {
  postLogin, // 登录
  postNews, // 新闻
  postSchool, // 新手学堂
  postVideo, // 视频
  postGame, // 游戏
  postOkami, // 大神方案
  postUser // 用户中心管理
}
