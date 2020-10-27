import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen:false,
  },
  getters:{
    sideBarIsOpen(state){
      return  this.state.isOpen;
    }
  },
  mutations: {
    switch_sideBar(){
      this.state.isOpen = !this.state.isOpen;
    }
  },
  actions: {
  },
  modules: {
  }
})
