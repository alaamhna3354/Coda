<template>
  <HeroSection
    v-if="Data?.hero_section?.[this.$i18n.locale]"
    :hero_section="Data.hero_section[this.$i18n.locale]"
  />
  <!-- About -->
  <Suspense v-if="Data?.about_section?.[this.$i18n.locale]">
    <template #default>
      <About :about_section="Data.about_section[this.$i18n.locale]" />
    </template>
    <template #fallback>
      <div class="loader-fallback fallback-about">
        <div class="skeleton-line w-80" />
        <div class="skeleton-line w-60" />
        <div class="skeleton-box" />
      </div>
    </template>
  </Suspense>

  <!-- Services -->
  <Suspense v-if="Data?.our_service_section?.[this.$i18n.locale]">
    <template #default>
      <Services :service_section="Data.our_service_section[this.$i18n.locale]" />
    </template>
    <template #fallback>
      <div class="loader-fallback fallback-services">
        <div class="skeleton-line w-90" />
        <div class="skeleton-line w-70" />
        <div class="skeleton-box" />
      </div>
    </template>
  </Suspense>

  <!-- Projects -->
  <Suspense v-if="Data?.our_projects?.[this.$i18n.locale]">
    <template #default>
      <Projects :our_projects="Data.our_projects[this.$i18n.locale]" />
    </template>
    <template #fallback>
      <div class="loader-fallback fallback-projects">
        <div class="skeleton-line w-100" />
        <div class="skeleton-line w-80" />
        <div class="skeleton-grid">
          <div class="skeleton-box" />
          <div class="skeleton-box" />
          <div class="skeleton-box" />
        </div>
      </div>
    </template>
  </Suspense>

  <!-- Contact -->
  <Suspense v-if="Data">
    <template #default>
      <Contact />
    </template>
    <template #fallback>
      <div class="loader-fallback fallback-contact">
        <div class="skeleton-line w-60" />
        <div class="skeleton-box" />
      </div>
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
export default {
  name: 'Home Page',
  data() {
    return {
      Data: null
    }
  },
  components: {
    HeroSection: defineAsyncComponent(() => import(/* webpackChunkName: "HeroSection" */ '@/components/Home/HeroSection.vue')),
    About: defineAsyncComponent(() => import(/* webpackChunkName: "About" */ '@/components/Home/AboutUs.vue')),
    Services: defineAsyncComponent(() => import(/* webpackChunkName: "Services" */ '@/components/Home/Services.vue')),
    Projects: defineAsyncComponent(() => import(/* webpackChunkName: "Projects" */ '@/components/Home/Projects.vue')),
    // Clients: defineAsyncComponent(() => import(/* webpackChunkName: "Clients" */ '@/components/Home/Clinets.vue')),
    Contact: defineAsyncComponent(() => import(/* webpackChunkName: "Contact" */ '@/components/Home/Contact.vue')),
  },
  computed: {
    ...mapGetters(['getStaticContent']),
  },
  watch: {
    '$i18n.locale'() {
      // أعد جلب البيانات من Vuex عند تغيير اللغة
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch('GetData')
      .then(() => {
        this.Data = this.getStaticContent;
      })
      .catch((err) => {
        console.error('error GetData :', err);
       
      });
    }
  }
}
</script>

<style scoped>
.loader-fallback {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 10px;
}

/* Heights per section */
.fallback-about {
  min-height: 400px;
}

.fallback-services {
  min-height: 450px;
}

.fallback-projects {
  min-height: 600px;
}

.fallback-contact {
  min-height: 300px;
}

/* Skeleton basic style */
.skeleton-line {
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.6s infinite ease-in-out;
}

.skeleton-box {
  width: 100%;
  height: 200px;
  background-color: #ddd;
  border-radius: 8px;
  animation: pulse 1.6s infinite ease-in-out;
}

.skeleton-grid {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.skeleton-grid .skeleton-box {
  width: 150px;
  height: 120px;
}

.w-100 {
  width: 100%;
}

.w-90 {
  width: 90%;
}

.w-80 {
  width: 80%;
}

.w-70 {
  width: 70%;
}

.w-60 {
  width: 60%;
}

/* Skeleton animation */
@keyframes pulse {
  0% {
    background-color: #eee;
  }

  50% {
    background-color: #ddd;
  }

  100% {
    background-color: #eee;
  }
}
</style>
