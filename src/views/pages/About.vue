<template>
    <div id="about" class="position-relative">
      <!-- <img class="body-cover" src="@/assets/img/about-us/background-spline.webp" alt=""> -->
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="">
      <HeadSection :Title="`About Us`" />
      <br>
      <HoverList :Title="`Our Vision`" />
      <br>
      <br>
      <HoverList :Title="`Our Goals`" />
      <br>
      <br>
      <Clients v-if="Data" :our_client="Data.our_client" />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'About Page',
  data(){
    return{
      Data:null
    }
  },
  components: {
    HeadSection: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
    HoverList: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/AboutUs/HoverList.vue') ),
    Clients: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/Clinets.vue')),
  },
  computed: {
    ...mapGetters(['getStaticContent']),
  },
  mounted() {
            this.$store.dispatch('GetData').then(() => {
            this.Data = this.getStaticContent;
      });
    },
}
</script>
