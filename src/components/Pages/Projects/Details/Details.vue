<template>
    <section class="project-details">
      <div class="row">
        <!-- <div class="col-md-4">
            <SideBar />
        </div> -->
        <div class="col-md-12 col-12">
            <div class="content-details">
                <CardContent v-if="Project" :Project="Project"  />
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
            Project:null,

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
      immediate: true, // Trigger the watcher immediately on component creation
      handler(newSlug) {
        const foundService = this.ProjectsList.find(element => element.slug === newSlug);
        if (foundService) {
          this.Project = foundService;
        } else {
          this.Project = null; // or set to a default value
        }
    }
    }
  },
}
</script>