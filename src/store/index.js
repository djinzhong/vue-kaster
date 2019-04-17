import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    group: []
  },
  mutations: {
    setGroup (state, res) {
      state.group = res
    }
  },
  actions: {

  }
})
