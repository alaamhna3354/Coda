<template>
    <div id="services" v-if="ServicesData">
      <Index :Content="ServicesData.services_page[this.$i18n.locale]" />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'Services Page',
  data(){
    return{
      ServicesData:null
    }
  },
  components: {
    Index: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/Services/index.vue') )
  },
  computed: {
    ...mapGetters(['getStaticServicesData']),
  },
  mounted() {
    this.$store.dispatch('GetServicestData').then(() => {
      this.ServicesData = this.getStaticServicesData;
      
    });
  },
 
}
</script>
