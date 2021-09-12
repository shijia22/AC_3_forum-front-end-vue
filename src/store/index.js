import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // data，每個 Vue 元件都可以使用
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  // 用來修改 state 的資料
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },
  },
  // 設定其他的非同步函式，例如發送 API 請求
  actions: {},
  modules: {},
})
