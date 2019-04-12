import {
  post, login
} from './helpers'

const postNews = post('News')
const postGame = post('Game')
const postOkami = post('Okami')
const postLogin = login()

export {
  postLogin, // 登录
  postNews, // 新闻
  postGame, // 游戏
  postOkami // 大神方案
}
