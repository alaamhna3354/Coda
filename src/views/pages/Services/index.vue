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
    Index: defineAsyncComponent( () => import('@/components/Pages/Services/index.vue') ),

  },
 
}
</script>
