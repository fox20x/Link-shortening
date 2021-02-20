export default {
  actions: {
    async register({dispatch, commit, state}, dataReq) {
      try {
        const response = await dispatch("fetchRequest", {
          url: "http://localhost:3000/api/register",
          method: "POST",
          dataReq,
        })
        if (response) {
          localStorage.setItem(state.localStorageKey, JSON.stringify({token: response.token, userId: response.userId}))
          commit('setUser', {userId: response.userId})
        }
        return true
      } catch (e) {throw e}
    },
    async login({ dispatch, commit, state }, dataReq) {
      const response = await dispatch("fetchRequest", {
        url: "http://localhost:3000/api/login",
        method: "POST",
        dataReq,
      })
      if (response) {
        localStorage.setItem(state.localStorageKey, JSON.stringify({token: response.token, userId: response.userId}))
        commit('setUser', {userId: response.userId})
      }
      return true
    },
    async logout({ commit, state }) {
      localStorage.removeItem(state.localStorageKey)
      commit('cleanUser')
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    cleanUser(state) {
      state.user = {}
    }
  },
  state: {
    localStorageKey: 'SmallLinkUserData'
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getStorageKey(state) {
      return state.localStorageKey
    }
  },
};
