import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    aumentarContador(self) {
      self.counter++;
    },
    bajarContador(self) {
      self.counter--;
    }
  },
  actions: {
  },
  modules: {
  }
})
