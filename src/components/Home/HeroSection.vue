<template>
    <div class="hero-body">
        <div class="hero-body-item">
            <div class="shine"></div>
            <div class="background">
                <div class="tiles">
                    <div class="tile tile-1"></div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>
                    <div class="tile tile-5"></div>
                    <div class="tile tile-6">
                        <img :src="images[0]" alt="hero-2">
                    </div>
                    <div class="tile tile-7">
                        <img :src="images[1]" alt="hero-2">
                    </div>
                    <div class="tile tile-8">
                        <img :src="images[2]" alt="hero-3">
                    </div>
                    <div class="tile tile-9">
                        <img :src="images[3]" alt="hero-4">
                    </div>
                    <div class="tile tile-10">
                        <img :src="images[4]" alt="hero-5">
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
                    <h1 class="title neon-text"> {{hero_section.title || "T-Coda" }}</h1>
                    <h3 class="description">
                        {{hero_section.description || "We provide web and app development solutions to help businesses thrive in the digital era." }}
                    </h3>
                    <div class="d-flex mt-5">
                        <router-link :to="hero_section.button_url">
                            <BtnElctric :Text="hero_section.button_title" />
                        </router-link>
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
            show: false,
            images:this.hero_section.images
        };
    },
    components: {
        BtnElctric: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/BtnElctric.vue')),
    },
    methods: {
       
    },
    props:{
        hero_section:{
            type:Object,
            required: true
        }
    }
}
</script>