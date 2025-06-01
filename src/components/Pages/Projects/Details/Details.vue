<template>
  <section class="project-details">
    <div class="row">
      <!-- <div class="col-md-4">
            <SideBar />
        </div> -->
      <div class="col-md-12 col-12">
        <div class="content-details">
          <CardContent v-if="Project" :Project="Project" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  data() {
    return {
      Project: null,

    };
  },
  components: {
    // SideBar: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Pages/Projects/Details/SideBar.vue')),
    CardContent: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Pages/Projects/Details/CardContent.vue')),
  },
  props: {
    ProjectsList: Array
  },
  watch: {
    '$route.params.slug': {
      immediate: true,
      handler(newSlug) {
        this.updateProject(newSlug, this.ProjectsList);
      }
    },
    ProjectsList: {
      immediate: true,
      handler(newList) {
        this.updateProject(this.$route.params.slug, newList);
      }
    }
  },
  methods: {
    updateProject(slug, list) {
      const foundService = list?.find?.(element => element.slug === slug);
      this.Project = foundService || null;
    }
  }

}
</script>