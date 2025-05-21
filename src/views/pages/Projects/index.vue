<template>
    <div id="projects">
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="grid">
        <HeadSection :Title="$t('Our Projects')" />
        <Index v-if="ProjectsList" :ProjectsList="ProjectsList.projects[this.$i18n.locale]" />
     </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Index from '@/components/Pages/Projects/index.vue';
import HeadSection from '@/components/Global/HeadSection.vue';
export default {
  name: 'Projects Page',
  data(){
    return{
      ProjectsList:null
    }
  },
  components: {
    Index,
    HeadSection
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
