<template>
    <div id="projects">
      <Index />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Projects Page',
  data(){
    return{
    }
  },
  components: {
    Index: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/Projects/index.vue') ),

  },
 
}
</script>
