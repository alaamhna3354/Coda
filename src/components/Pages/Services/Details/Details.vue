<template>
  <section class="services-details" v-if="ServicesDetails">
    <div class="row">
      <div class="col-md-8">
        <div class="content-details">
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
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      ServicesDetails: null
    };
  },
  components: {
    SideBar: defineAsyncComponent(() =>
      import('@/components/Pages/Services/Details/SideBar.vue')
    ),
    CardContent: defineAsyncComponent(() =>
      import('@/components/Pages/Services/Details/CardContent.vue')
    )
  },
  props: {
    Services: {
      type: Object,
      required: true
    }
  },
  watch: {
    '$route.params.slug': {
      immediate: true,
      handler(newSlug) {
        this.updateServiceDetails(newSlug, this.Services);
      }
    },
    Services: {
      immediate: true,
      handler(newServices) {
        this.updateServiceDetails(this.$route.params.slug, newServices);
      }
    }
  },
  methods: {
    updateServiceDetails(slug, services) {
      const foundService = services?.cards?.find?.(el => el.slug === slug);
      this.ServicesDetails = foundService || null;
      if (!foundService) {
        console.warn(`Service with slug "${slug}" not found.`);
      }
    }
  }
};
</script>
