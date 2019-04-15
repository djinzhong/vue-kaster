import {
  post, login
} from './helpers'

const postNews = post('News')
const postVideo = post('Video')
const postGame = post('Game')
const postOkami = post('Okami')
const postLogin = login()

export {
  postLogin, // 登录
  postNews, // 新闻
  postVideo, // 视频
  postGame, // 游戏
  postOkami // 大神方案
}
