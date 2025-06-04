import Cookies from "universal-cookie"
const cookie = new Cookies();

export default {
  state: {
    Lang: cookie.get('languages') || 'en',
  
  },
  mutations: {
    // Language
    SET_Lang(state, lang) {
      state.Lang = lang;
      cookie.set('languages', lang);
    },
   
  },
  actions: {
    // Language
    SETLang({ commit }, lang) {
      commit('SET_Lang', lang);
    },

  },
  getters: {
    getLang: (state) => state.Lang,
  }
}