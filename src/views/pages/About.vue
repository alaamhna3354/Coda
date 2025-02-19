<template>
    <div id="about" class="position-relative">
      <!-- <img class="body-cover" src="@/assets/img/about-us/background-spline.webp" alt=""> -->
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="">
      <HeadSection :Title="`About Us`" />
      <br>
      <HoverList :Title="`Our Vision`" />
      <br>
      <br>
      <HoverList :Title="`Our Goals`" />
      <br>
      <br>
      <Clients  />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'About Page',
  data(){
    return{
    }
  },
  components: {
    HeadSection: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
    HoverList: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/AboutUs/HoverList.vue') ),
    Clients: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/Clinets.vue')),
  },
 
}
</script>
