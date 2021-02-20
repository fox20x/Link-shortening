import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'
import Links from './link'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
  },
  actions: {
    async fetchRequest({ dispatch, commit }, { url, method = 'GET', dataReq, headers = {} }) {
      try {
        let body;
        if (dataReq && method === 'POST') {
          headers['Content-Type'] = 'application/json'
          body = JSON.stringify(dataReq)
        }
        const response = await fetch(url, { method, body, headers }); // к нам суда приходит json  
        if (response.ok) {
          return response.json()
        } else {
          throw new Error((await data).message || 'Чтото пошло не так')
        }
      } catch (e) {
        throw e;
      }
    },
  },
  modules: {
    Auth, Links
  }
})
