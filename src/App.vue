<template>
  <main id="main" :class="[Lang == 'en' ? 'dir-en' : 'dir-ar']">
    <Loader v-if="$store.state.loader" />
    <Header />
    <Transition name="fade-page" mode="out-in">
      <router-view />
    </Transition>
    <Footer :Data="Footer_Data[this.$i18n.locale] ? Footer_Data[this.$i18n.locale] : Footer_Data['en'] " />
    <Whatsapp />
  </main>
</template>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import { defineAsyncComponent } from 'vue';
export default {
  name: 'App',
  data(){
    return{
      Footer_Data:this.$store.state.Data.footer,
    }
  },
  components: {
    Loader: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/Loader.vue')),
    Header: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Common/Header.vue')),
    Footer: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Common/Footer.vue')),
    Whatsapp: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/Whatsapp.vue')),
  },
  computed: {
    Lang() {
      return this.$i18n.locale;
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('SETLOADER', false);
    }, 3000);
  },
  watch: {
    $route() {
      $("html, body").animate({ scrollTop: 0 }, 500);
      this.$store.dispatch('SETLOADER', true);
      setTimeout(() => {
        this.$store.dispatch('SETLOADER', false);
      }, 2000);
    }
  },
}
</script>


<style>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: 0.6s ease;
}

.fade-page-enter-from,
.fade-page-leave-to {
  transform: translateY(-100px);

}
</style>
