import { createStore } from 'vuex'
import lang from './modules/lang'
import fetchData from './modules/fetchData'
export default createStore({
  modules: {
    lang,
    fetchData
  },
  state: {
    OverLay: false,
    loader: true,
  },
  mutations: {
    // OverLay
    SET_OverLay(state, boolean) {
      state.OverLay = boolean;
    },
    // LOADER
    SET_Loader(state, boolean) {
      state.loader = boolean;
    },
  },
  actions: {
    // OverLay
    SETOverLay({ commit }, boolean) {
      commit('SET_OverLay', boolean);
    },
    // LOADER
    SETLOADER({ commit }, boolean) {
      commit('SET_Loader', boolean);
    },

  },
})
