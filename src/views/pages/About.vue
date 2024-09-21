<template>
    <div id="home">
      <About />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Home Page',
  data(){
    return{
    }
  },
  components: {
    About: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Home/AboutUs.vue') ),

  },
 
}
</script>
