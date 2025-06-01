<template>
  <main id="main" :class="directionClass">
    <Loader v-if="$store.state.loader" />
    <Header />
    <router-view />
    <Footer />
  </main>
</template>

<script>
// Required for snackbar background and text color

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
    Loader, Header, Footer
  },
  computed: {
    Lang() {
      return this.$i18n.locale;
    },
    directionClass() {
      return this.$i18n.locale === 'en' ? 'dir-en' : 'dir-ar';
    }
  },
  mounted() {
    this.$store.dispatch('SETLOADER', true); // إظهار اللودر مباشرة

    this.$router.isReady().then(() => {
      setTimeout(() => {
        this.$store.dispatch('SETLOADER', false); // إخفاؤه بعد التحميل
      }, 1000); // أو حسب زمن تحميل البيانات
    });
  },
  watch: {
    $route() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
  },
  
}
</script>