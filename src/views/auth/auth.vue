<template>
    <div id="Auth">
        <Auth />
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue'
  
  export default {
    name: 'Auth Page',
    data() {
      return {
      }
    },
    components: {
    Auth: defineAsyncComponent(() => import('@/components/auth/auth.vue')),
  
    },
  
  }
  </script>
  