<template>
  <div id="about" class="position-relative">
    <!-- <img class="body-cover" src="@/assets/img/about-us/background-spline.webp" alt="spline"> -->
    <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="grid">
    <HeadSection v-if="AboutData" 
    :Title="AboutData.about_page[this.$i18n.locale].title"
    :Description="AboutData.about_page[this.$i18n.locale].description" />
    <br>
    <div v-if="AboutData">
      <div v-for="item in AboutData.about_page[this.$i18n.locale].sections" :key="item">
      <HoverList :Content="item" />
      <br>
      <br>
    </div>
    </div>
    <!-- <Clients v-if="Data" :our_client="Data.our_client" /> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'About Page',
  data() {
    return {
      Data: null,
      AboutData: null
    }
  },
  components: {
    HeadSection: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
    HoverList: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Pages/AboutUs/HoverList.vue')),
    // Clients: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Home/Clinets.vue')),
  },
  computed: {
    ...mapGetters(['getStaticContent', 'getStaticAboutData']),
  },
  mounted() {
    this.$store.dispatch('GetData').then(() => {
      this.Data = this.getStaticContent;
    });
    this.$store.dispatch('GetAboutData').then(() => {
      this.AboutData = this.getStaticAboutData;
    });
  },
}
</script>
