export default {
  actions: {
    async linkGenerate({ dispatch, state }, { dataReq }) {
      try {
        const auth = JSON.parse(localStorage.getItem(state.localStorageKey))

        const response = await dispatch('fetchRequest', {
          url: "http://localhost:3000/api/link/generate",
          method: "POST",
          dataReq,
          headers: {"Authorization": `Bearer ${auth.token}`}
        }) // к нам суда приходит json 
        return response

      } catch (e) {
        throw e;
      }
      
    },
    async getLinkById ({ dispatch, state }, linkId) {
      try {
        const auth = JSON.parse(localStorage.getItem(state.localStorageKey))

        const response = await dispatch('fetchRequest', {
          url: "http://localhost:3000/api/link/" + linkId,
          headers: {"Authorization": `Bearer ${auth.token}`}
        }) // к нам суда приходит json 
        return response
      } catch (e) {
        throw e;
      }
    },
    async getLinks ({ dispatch, state }) {
      try {
        const auth = JSON.parse(localStorage.getItem(state.localStorageKey))

        const response = await dispatch('fetchRequest', {
          url: "http://localhost:3000/api/link/",
          headers: {"Authorization": `Bearer ${auth.token}`}
        }) // к нам суда приходит json 
        return response
      } catch (e) {
        throw e;
      }
    }
  },
  state: {
    localStorageKey: 'SmallLinkUserData'
  },
};
