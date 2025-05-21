<template>
    <div id="services" v-if="ServicesData">
      <Index :Content="ServicesData.services_page[this.$i18n.locale]" />
     </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Index from '@/components/Pages/Services/index.vue';
export default {
  name: 'Services Page',
  data(){
    return{
      ServicesData:null
    }
  },
  components: {
    Index
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
