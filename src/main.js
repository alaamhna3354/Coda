import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// *************** import style ***************
import './assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Cookies 
import Cookies from "universal-cookie"
const cookie = new Cookies();
// *************** import i18n ***************
import ar from '../public/data/i18n/ar.json'
import en from '../public/data/i18n/en.json'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    messages: {
        ar: ar,
        en: en,
    },
    locale: cookie.get('languages'),
    fallbackLocale: 'ar' // set fallback locale
})

router.beforeEach((to, from, next) => {
    store.dispatch('SETLOADER', true);
    next();
  });
  
  router.afterEach(() => {
    setTimeout(() => {
      store.dispatch('SETLOADER', false);
    }, 1000); // حسب سرعة تحميلك
  });
  

createApp(App).use(store).use(router).use(i18n).mount('#app')
