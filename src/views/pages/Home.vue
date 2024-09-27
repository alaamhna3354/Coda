<template>
  <div id="home">
    <div class="video-cover">
      <video class="m-auto mt-0" autoplay loop>
          <source src="@/assets/video/hero-video.mp4" type="video/mp4">
        </video>
    </div>
    <swiper class="swiper" :slidesPerView="1" :spaceBetween="30" :mousewheel="true" :space-between="30" :speed="1000">
      
      <swiper-slide><HeroSection /></swiper-slide>
      <swiper-slide><About /></swiper-slide>
      <swiper-slide><Services /></swiper-slide>
      <swiper-slide><Projects /></swiper-slide>
      <swiper-slide><Clients /></swiper-slide>
      <swiper-slide><Contact /></swiper-slide>
    </swiper>
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
