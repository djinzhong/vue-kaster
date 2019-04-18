import Vue from 'vue'
import vueResource from 'vue-resource'
import Cookies from 'js-cookie'
import store from 'store/index'
import {
  message
} from 'element-ui'

Vue.use(vueResource)

const urlMap = {
  development: 'http://120.78.174.28/',
  production: 'https://api.dongmadi.com.cn/'
}

export const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 1
const ERR_LOGIN = 997 // 登录信息有误
const ERR_VERIFY = 999 // 权限问题或者提交信息有误

/**
 * 获取信息接口
 *
 * @export
 * @param {String} cData 新闻（News）,视频（Video）
 * @param {String} aData 列表（list/lists），新增修改(set)，删除(del)
 * @param {Object} user  登录信息
 * @param {Object} params 其他信息
 * @returns {Function} 返回一个回调函数
 */
export function post (cData) {
  return function (aData, params = {}) {
    // 后台约定请求信息格式
    let user = {
      uid: store.getters.uid,
      ssid: store.getters.ssid
    }
    let obj = Object.assign(user, params)
    let sendData = {
      c: cData,
      a: aData,
      data: obj
    }
    return Vue.http.post(
      `${baseUrl}api.php`, {
        data: JSON.stringify(sendData)
      }, {
        emulateJSON: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(
      (res) => {
        let resData = res.data
        switch (resData.code) {
          case ERR_OK:
            return resData.data
          case ERR_LOGIN:
            message({
              showClose: true,
              message: resData.data,
              type: 'error'
            })
            Cookies.remove('token')
            location.reload()
            break
          case ERR_VERIFY:
            message({
              showClose: true,
              message: resData.data,
              type: 'error'
            })
            break
          default:
            message({
              showClose: true,
              message: resData.data,
              type: 'error'
            })
            break
        }
      },
      (err) => {
        message({
          showClose: true,
          message: err.data,
          type: 'error'
        })
      }
    )
  }
}

/**
 *登录接口
 *
 * @export
 * @param {Object} params 登录表单信息
 */
export function login () {
  return function (params = {}) {
    let sendData = {
      c: 'User',
      a: 'login',
      data: params
    }
    return Vue.http.post(
      `${baseUrl}api.php`, {
        data: JSON.stringify(sendData)
      }, {
        emulateJSON: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(
      res => {
        let resData = res.data
        if (resData.code === 1) {
          return resData.data
        } else {
          message({
            showClose: true,
            message: resData.data,
            type: 'error'
          })
        }
      },
      err => {
        message({
          showClose: true,
          message: err,
          type: 'error'
        })
      }
    )
  }
}
