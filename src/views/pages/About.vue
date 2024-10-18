<template>
    <div id="about" class="position-relative">
      <img class="about-cover" src="@/assets/img/about-us/background-spline.webp" alt="">
      <HoverList :Title="`Our Vision`" />
      <br>
      <br>
      <HoverList :Title="`Our Goals`" />
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
    HoverList: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/AboutUs/HoverList.vue') ),
  },
 
}
</script>
