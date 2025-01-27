<template>
  <div id="home">
    
      
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

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

}
</script>
