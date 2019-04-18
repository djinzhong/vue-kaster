import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: Cookies.getJSON('token')
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      Cookies.set('token', token, { expires: 1 / 24 })
    }
  },
  actions: {
    setToken (context, token) {
      return new Promise((resolve, reject) => {
        context.commit('setToken', token)
        resolve()
      })
    }
  },
  getters: {
    token: state => state.token,
    uid: state => state.token ? state.token.uid : null,
    ssid: state => state.token ? state.token.ss_id : null,
    group: state => state.token ? state.token.group : []
  }
})
