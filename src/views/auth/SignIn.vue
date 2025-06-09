<template>
    <div id="Auth">
        <SignIn />
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue'
  
  export default {
    name: 'Sign In Page',
    data() {
      return {
      }
    },
    components: {
      SignIn: defineAsyncComponent(() => import(/* webpackChunkName: "Login" */'@/components/auth/SignIn.vue')),
  
    },
  
  }
  </script>
  <style lang="scss">
  @import '../../assets/styles/varible';
  @import '../../assets/styles/pages/auth/sign-in.scss';
  </style>
  