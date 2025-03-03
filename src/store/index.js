import { createStore } from 'vuex'
import Cookies from "universal-cookie"
const cookie = new Cookies();
import axios from 'axios';

export default createStore({
  state: {
   Lang: cookie.get('languages') || 'ar',
   OverLay:false,
   loader:true,
   Data : {},
   AboutData : {},
   ServicesData : {},
   ProjectsList : [],
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
    SET_StaticContent(state, data) {
      state.Data = data;
    },
     SET_StaticAbout(state, data) {
      state.AboutData = data;
    },
    SET_StaticServices(state, data) {
      state.ServicesData = data;
    },
    SET_ProjectsList(state, data) {
      state.ProjectsList = data;
    },
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
   
    async GetData({commit}) {
      try {
        const response = await axios.get('/data/home-page.json'); // Note the leading slash
        commit('SET_StaticContent', response.data); 
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    },
    // *********************** Get Static About us ***********************
    async GetAboutData({commit}) {
      try {
        const response = await axios.get('/data/about-page.json'); // Note the leading slash
        commit('SET_StaticAbout', response.data); 
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    },
     // *********************** Get Static Services ***********************
     async GetServicestData({commit}) {
      try {
        const response = await axios.get('/data/services-page.json'); // Note the leading slash
        commit('SET_StaticServices', response.data); 
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    },
     // *********************** Get Projects List ***********************
     async GetProjectsList({commit}) {
      try {
        const response = await axios.get('/data/projects-page.json'); // Note the leading slash
        commit('SET_ProjectsList', response.data); 
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    },
  },
  getters:{
    getStaticContent: (state) => state.Data,
    getStaticAboutData: (state) => state.AboutData,
    getStaticServicesData: (state) => state.ServicesData,
    getProjectsList: (state) => state.ProjectsList,
  }
 
})
