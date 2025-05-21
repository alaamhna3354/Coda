<template>
  <div id="home" v-if="Data">
      <HeroSection :hero_section="Data.hero_section[this.$i18n.locale]" />
      <About :about_section="Data.about_section[this.$i18n.locale]" />
      <Services :service_section="Data.our_service_section[this.$i18n.locale]" />
      <Projects :our_projects="Data.our_projects[this.$i18n.locale]" />
      <!-- <Clients :our_client="Data.our_client" /> -->
      <Contact />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'Home Page',
  data() {
    return {
      Data:null
    }
  },
  components: {
    HeroSection: defineAsyncComponent(() => import(/* webpackChunkName: "hero" */'@/components/Home/HeroSection.vue')),
    About: defineAsyncComponent(() => import(/* webpackChunkName: "About" */'@/components/Home/AboutUs.vue')),
    Services: defineAsyncComponent(() => import(/* webpackChunkName: "Services" */'@/components/Home/Services.vue')),
    Projects: defineAsyncComponent(() => import(/* webpackChunkName: "Projects" */'@/components/Home/Projects.vue')),
    // Clients: defineAsyncComponent(() => import(/* webpackChunkName: "Clients" */'@/components/Home/Clinets.vue')),
    Contact: defineAsyncComponent(() => import(/* webpackChunkName: "Contact" */'@/components/Home/Contact.vue')),

  },
  computed: {
    ...mapGetters(['getStaticContent']),
  },
  mounted() {
            this.$store.dispatch('GetData').then(() => {
            this.Data = this.getStaticContent;
      });
    },
}
</script>
