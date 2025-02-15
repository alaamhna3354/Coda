<template>
    <div id="Auth">
        <SignUp />
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue'
  
  export default {
    name: 'Sign Up Page',
    data() {
      return {
      }
    },
    components: {
      SignUp: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/auth/SignUp.vue')),
    },
  
  }
  </script>
  