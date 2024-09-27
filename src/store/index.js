import { createStore } from 'vuex'
import Cookies from "universal-cookie"
const cookie = new Cookies();
// import axios from 'axios';
export default createStore({
  state: {
   Lang: cookie.get('languages') || 'en',
   OverLay:false,
   loader:false
  },
  mutations: {
    SET_Lang(state, lang) {
      state.Lang = lang;
    },
    SET_OverLay(state, boolean) {
      state.OverLay = boolean;
    },
    SET_Loader(state, boolean) {
      state.loader = boolean;
    },
    
    // *********************** SET StaticContent ***********************
    // SET_StaticContent(state, data) {
    //   state.StaticContent = data;
    // },
    

  },
  actions: {
    // *********************** SET Languages  ***********************
    SETLang({ commit }, lang) {
      commit('SET_Lang', lang);
      cookie.set('languages', lang);

    },
    // *********************** SET OverLay  ***********************
    SETOverLay({ commit }, boolean) {
      commit('SET_OverLay', boolean);
    },
    // *********************** SET LOADER  ***********************
    SETLOADER({ commit }, boolean) {
      commit('SET_Loader', boolean);
    },
   
   
    // *********************** Get Static Content Data ***********************
    // async GetStaticContent({ commit }) {
    //   commit('SET_Loader', true);
    //   return await axios
    //     .get(`user/static-content`)
    //     .then((res) => {
    //       if (res.status == 200) {
    //         let Content = res.data.data;
    //         commit('SET_StaticContent', Content);
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log('Error: ', error);
    //     }).finally(function () {
    //       commit('SET_Loader', false);
    //     });
    // },
    
  },
  getters:{

  }
 
})
