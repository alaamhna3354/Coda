<template>
    <div id="services-details">
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="">
        <HeadSection :Title="$t('Services Details')" />
        <Details v-if="Services" :Services="Services"  />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'Services Details Page',
  data(){
    return{
      Services:null
    }
  },
  components: {
    Details: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/Services/Details/Details.vue') ),
    HeadSection: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
  },
  computed: {
    ...mapGetters(['getStaticServicesData']),
  },
  mounted() {
    this.$store.dispatch('GetServicestData').then(() => {
        this.Services = this.getStaticServicesData.services_page[this.$i18n.locale];
    });
  },
 
}
</script>
