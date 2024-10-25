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
    HeroSection: defineAsyncComponent(() => import('@/components/Home/HeroSection.vue')),
    About: defineAsyncComponent(() => import('@/components/Home/AboutUs.vue')),
    Services: defineAsyncComponent(() => import('@/components/Home/Services.vue')),
    Projects: defineAsyncComponent(() => import('@/components/Home/Projects.vue')),
    Clients: defineAsyncComponent(() => import('@/components/Home/Clinets.vue')),
    Contact: defineAsyncComponent(() => import('@/components/Home/Contact.vue')),

  },

}
</script>
