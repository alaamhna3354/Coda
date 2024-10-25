<template>
    <div id="services">
      <Index />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Services Page',
  data(){
    return{
    }
  },
  components: {
    Index: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/Services/index.vue') ),

  },
 
}
</script>
