<template>
    <div id="projects-details">
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="grid">
        <HeadSection :Title="$t('Project Details')" />
      <Details v-if="ProjectsList" :ProjectsList="ProjectsList.projects[this.$i18n.locale]" />
     </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Details from '@/components/Pages/Projects/Details/Details.vue';
import HeadSection from '@/components/Global/HeadSection.vue';
export default {
  name: 'Projects Details Page',
  data(){
    return{
      ProjectsList:null
    }
  },
  components: {
    Details,
    HeadSection
  },
  computed: {
    ...mapGetters(['getProjectsList']),
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
      console.log('Fetching data for locale:', this.$i18n.locale);
      this.$store.dispatch('GetProjectsList').then(() => {
      this.ProjectsList = this.getProjectsList;
    });
    }
  }
}
</script>
