import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	title: 'Supreme Title',
  	links: [
  		'google.com',
  		'youtube.com',
  		'uic.edu'
  	]
  },
  getters: {
    linkCount(state) {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK(state, link) {
      return state.links.push(link)
    },
    REMOVE_LINK(state, link) {
      return state.links.splice(link, 1)
    },
    REMOVE_All(state) {
      state.links = []
    }
  },
  actions: {
    removeLink(context, link) {
      context.commit('REMOVE_LINK', link)
    },
    removeAll({commit}) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          commit('REMOVE_All')
          res()
        }, 1500);
      })
    }
  }
})
