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
      SignUp: defineAsyncComponent(() => import(/* webpackChunkName: "SignUp" */'@/components/auth/SignUp.vue')),
    },
  
  }
  </script>
   <style lang="scss">
   @import '../../assets/styles/varible';
   @import '../../assets/styles/pages/auth/sign-up.scss';
   </style>
  