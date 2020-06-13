/* Vuex 集中式状态管理容器 它的作用是管理共享状态，我们可以把需要共享通信的数据放到这里 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* 全局共享的状态，类似于组件中的data */
  state: {
    user: JSON.parse(window.localStorage.getItem('user'))
  },

  /* Vuex的使用规则：使用 mutation 来修改 state 的状态 */
  /* mutation 都是函数，函数中第一个参数是state 对象，其他的都是参数 */
  mutations: {
    setUser(state, user) {
      state.user = user
      // 为了防止刷新页面丢失用户登录状态，我们应该将数据持久化
      // 使用本地存储，将数据持久化
      // 注意：本地存储只能存储字符串，所以需要用 JSON.stringify 方法将对象转为字符串
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {},
  modules: {}
})