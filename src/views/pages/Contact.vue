<template>
    <div id="contact">
      <Contact />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Contact Page',
  data(){
    return{
    }
  },
  components: {
    Contact: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Home/Contact.vue') ),
  },
 
}
</script>
