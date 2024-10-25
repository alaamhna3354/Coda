<template>
    <section class="hero-section">
        <!-- <img class="hero-cover" src="@/assets/img/home-page/hero-cover.jpg" alt=""> -->
        <video class="hero-cover" autoplay loop>
                    <source src="@/assets/video/hero-video.mp4" type="video/mp4">
                </video>
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
                <img src="@/assets/img/home-page/lary-footer.webp" alt="">

            </div>
            <div class="col-md-5 position-relative">
                <img src="@/assets/img/home-page/hero-side.png" alt="">
                <!-- <div class="gears">
                    <div class="oil">
                        <div class="oil-bg">
                            <span>
                                <i class="fa-solid fa-oil-can fa-shake"></i>
                            </span>
                        </div>
                        <div class="drops">
                            <div class="drop1"></div>
                            <div class="drop2"></div>
                        </div>
                    </div>
                    <i class="gear-1 fa-solid fa-gear fa-spin fa-spin-reverse"></i>
                    <i class="gear-2 fa-solid fa-gear fa-spin"></i>
                </div> -->
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
        BtnElctric: defineAsyncComponent(() => import('@/components/Global/BtnElctric.vue')),
    },
    mounted() {


    }
}
</script>