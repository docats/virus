// basic
import Vue from 'vue'
import Vuex from 'vuex'
// values
import isDrawerOpen from './modules/isDrawerOpen'


Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    isDrawerOpen,

    
  }
})

export default store