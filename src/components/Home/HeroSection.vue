<template>
    <!-- <video class="hero-cover" autoplay loop>
                    <source src="@/assets/video/hero.mp4" type="video/mp4">
        </video> -->
    <section class="hero-section">
        <div class="row ">
            <div class="col-md-6 info">
                <h1 class="title neon-text">Lazurde</h1>
                <h3 class="description">
                    We Are Marketing The Avengers
                    Skilled enough to know better
                    Wild enough to think bigger!
                </h3>
                <div class="d-flex mt-5">
                    <router-links to="/">
                        <BtnElctric :Text="$t('Discover More')" />
                    </router-links>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    data() {
        return {
            show: false
        };
    },
    components: {
        BtnElctric: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/BtnElctric.vue')),
      
    },
    mounted() {


    }
}
</script>