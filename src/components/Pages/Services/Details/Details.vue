<template>
    <section class="services-details" v-if="ServicesDetails">
      <div class="row">
        <div class="col-md-8">
            <div class="content-details" style="">
                <CardContent :ServicesDetails="ServicesDetails" />
            </div>
        </div>
        <div class="col-md-4">
            <SideBar :Services="Services" />
        </div>
      </div>
    </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            ServicesDetails:null,
        };
    },
   
    components: {
        SideBar: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Pages/Services/Details/SideBar.vue')),
        CardContent: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Pages/Services/Details/CardContent.vue')),
    },
    props:{
        Services:{
            type:Object,
            required: true
        }
    },
    watch: {
    '$route.params.slug': {
      immediate: true, // Trigger the watcher immediately on component creation
      handler(newSlug) {
        const foundService = this.Services.cards.find(element => element.slug === newSlug);
        if (foundService) {
          this.ServicesDetails = foundService;
        } else {
          this.ServicesDetails = null; // or set to a default value
          console.warn(`Service with slug "${newSlug}" not found.`);
        }
      }
    }
  },
   
}
</script>