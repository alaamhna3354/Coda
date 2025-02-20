<template>
  <div id="home">
      <HeroSection :hero_section="getStaticContent.hero_section[this.$i18n.locale]" />
      <About :about_section="getStaticContent.about_section[this.$i18n.locale]" />
      <Services :service_section="getStaticContent.our_service_section[this.$i18n.locale]" />
      <Projects :our_projects="getStaticContent.our_projects[this.$i18n.locale]" />
      <Clients :our_client="getStaticContent.our_client" />
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
      
    }
  },
  components: {
    HeroSection: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/HeroSection.vue')),
    About: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/AboutUs.vue')),
    Services: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/Services.vue')),
    Projects: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/Projects.vue')),
    Clients: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/Clinets.vue')),
    Contact: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/Contact.vue')),

  },
  computed: {
    ...mapGetters(['getStaticContent']),
  },
}
</script>
