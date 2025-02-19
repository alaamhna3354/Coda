<template>
  <div id="home">
      <HeroSection :hero_section="Home_Data.hero_section[this.$i18n.locale]" />
      <About :about_section="Home_Data.about_section[this.$i18n.locale]" />
      <Services :service_section="Home_Data.our_service_section[this.$i18n.locale]" />
      <Projects :our_projects="Home_Data.our_projects[this.$i18n.locale]" />
      <Clients :our_client="Home_Data.our_client" />
      <Contact />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Home Page',
  data() {
    return {
      Home_Data:this.$store.state.Data,
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

}
</script>
