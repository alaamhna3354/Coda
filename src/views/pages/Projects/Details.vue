<template>
    <div id="projects-details">
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="grid">
        <HeadSection :Title="$t('Project Details')" />
      <Details v-if="ProjectsList" :ProjectsList="ProjectsList.projects[this.$i18n.locale]" />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'Project Details Page',
  data(){
    return{
      ProjectsList:null
    }
  },
  components: {
    Details: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/Projects/Details/Details.vue') ),
    HeadSection: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),

  },
  computed: {
    ...mapGetters(['getProjectsList']),
  },
  mounted() {
    this.$store.dispatch('GetProjectsList').then(() => {
      this.ProjectsList = this.getProjectsList;
    });
  },
}
</script>
