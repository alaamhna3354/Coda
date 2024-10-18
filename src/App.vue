<template>
  <Loader :class="[$store.state.loader ? 'open':'']" />
  <main id="main" :class="[Lang == 'en' ? 'dir-en' : 'dir-ar']">
    <Header />
    <Transition name="fade-page" mode="out-in">
      <router-view />
    </Transition>
    <Footer />
  </main>
</template>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import { defineAsyncComponent } from 'vue';
export default {
  name: 'App',
  components: {
    Loader: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/Loader.vue')),
    Header: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Common/Header.vue')),
    Footer: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Common/Footer.vue')),

  },
  computed: {
    Lang() {
      return this.$i18n.locale;
    }
  },
  mounted(){
    setTimeout(() => {
        this.$store.dispatch('SETLOADER',false);
    }, 3000);
  },
  watch: {
    $route() {
      $("html, body").animate({ scrollTop: 0 }, 500);
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
