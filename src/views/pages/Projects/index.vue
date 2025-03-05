<template>
    <div id="projects">
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="grid">
        <HeadSection :Title="$t('Our Projects')" />
        <Index v-if="ProjectsList" :ProjectsList="ProjectsList.projects[this.$i18n.locale]" />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'Projects Page',
  data(){
    return{
      ProjectsList:null
    }
  },
  components: {
    Index: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Pages/Projects/index.vue') ),
    HeadSection: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
  },
  computed: {
    ...mapGetters(['getProjectsList']),
  },
  mounted() {
    this.$store.dispatch('GetProjectsList').then(() => {
      this.ProjectsList = this.getProjectsList;
      console.log(`Projects List "${this.ProjectsList}"`);
      
    });
  },
}
</script>
