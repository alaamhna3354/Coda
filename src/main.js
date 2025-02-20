import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// *************** import style ***************
import './assets/styles/main.scss'
import './assets/fontawesome/css/fontawesome.css'
import './assets/fontawesome/css/brands.css'
import './assets/fontawesome/css/solid.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// *************** import Swiper ***************
import '../node_modules/intl-tel-input/build/css/intlTelInput.css'
import { Swiper, SwiperSlide } from "swiper/vue";
import './assets/swiper/navigation.scss'
import './assets/swiper/pagination.scss'
import "swiper/swiper.scss";
import SwiperCore, { Navigation, Pagination,Autoplay,Mousewheel } from "swiper";
SwiperCore.use([Navigation, Pagination,Autoplay,Mousewheel]);

// *************** import i18n ***************
// import Cookies 
import Cookies from "universal-cookie"
const cookie = new Cookies();
import ar from './assets/i18n/ar.json'
import en from './assets/i18n/en.json'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    messages: {
        ar: ar,
        en: en,
    },
    locale: cookie.get('languages'),
    fallbackLocale: 'ar' // set fallback locale
})

// *************** import axios ***************
// import axios from 'axios';
// axios.defaults.baseURL = '';
// axios.defaults.headers.common['language'] = cookie.get('lang')
// axios.defaults.headers.common['Authorization'] = "Bearer ";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// *************** import notifications ***************




createApp(App).component("Swiper", Swiper).component("SwiperSlide", SwiperSlide)
.component('font-awesome-icon',FontAwesomeIcon)
.use(store).use(router).use(i18n).mount('#app')
