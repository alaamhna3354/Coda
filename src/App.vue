<template>
  <main  id="main"  :class="[Lang == 'en' ? 'dir-en' : 'dir-ar']">
    <Loader v-if="$store.state.loader" />
    <Header />
    <Transition name="fade-page" mode="out-in">
      <router-view />
    </Transition>
    <Footer  />
  </main>
</template>

<script>
// Required for snackbar background and text color
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
import Loader from '@/components/Global/Loader.vue';
import Header from '@/components/Common/Header.vue';
import Footer from '@/components/Common/Footer.vue';
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Loader,Header,Footer
  },
  computed: {
    Lang() {
      return this.$i18n.locale;
    },
   
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('SETLOADER', false);
    }, 3000);
  },
  watch: {
    $route() {
      $("html, body").animate({ scrollTop: 0 }, 500);
      // this.$store.dispatch('SETLOADER', true);
      // setTimeout(() => {
      //   this.$store.dispatch('SETLOADER', false);
      // }, 2000);
    }
  },
}
</script>


<style>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: 1.5s ease;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;

}
</style>
