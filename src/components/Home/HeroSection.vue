<template>
    <div class="hero-body">
        <div class="hero-body-item">
            <div class="shine"></div>
            <div class="background">
                <div class="tiles">
                    <div class="tile tile-1">
                    </div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>

                    <div class="tile tile-5">
                      
                    </div>
                    <div class="tile tile-6">
                        <img src="@/assets/img/home-page/hero-tile-2.jpg" alt="">
                    </div>
                    <div class="tile tile-7">
                        <img src="@/assets/img/home-page/hero-tile-1.webp" alt="">
                    </div>
                    <div class="tile tile-8">
                        <img src="@/assets/img/home-page/hero-tile-3.jpg" alt="">
                    </div>
                    <div class="tile tile-9">
                        <img src="@/assets/img/home-page/hero-tile-4.webp" alt="">
                    </div>
                    <div class="tile tile-10">
                        <img src="@/assets/img/home-page/hero-tile-2.jpg" alt="">
                    </div>
                </div>
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        </div>
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
    </div>

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