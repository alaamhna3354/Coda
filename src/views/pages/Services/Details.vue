<template>
    <div id="services-details">
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="grid">
        <HeadSection :Title="$t('Services Details')" />
        <Details v-if="Services" :Services="Services"  />
     </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Details from '@/components/Pages/Services/Details/Details.vue';
import HeadSection from '@/components/Global/HeadSection.vue';
export default {
  name: 'Services Details Page',
  data(){
    return{
      Services:null
    }
  },
  components: {
    Details,
    HeadSection
  },
  computed: {
    ...mapGetters(['getStaticServicesData']),
  },
 
  watch: {
    '$i18n.locale'() {
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch('GetServicestData').then(() => {
        this.Services = this.getStaticServicesData.services_page[this.$i18n.locale];
    });
    }
  }
}
</script>
<style lang="scss">
@import '../../../assets/styles/varible';
@import '../../../assets/styles/pages/services/services.scss';
</style>