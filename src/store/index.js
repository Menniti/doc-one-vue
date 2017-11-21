import Vuex from 'vuex'
import Vue from 'vue'
import document from './document'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    document: document
  }
})
