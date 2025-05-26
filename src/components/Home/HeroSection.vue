<template>
    <div class="hero-body">
        <div class="hero-body-item">
            <div class="shine"></div>
            <div class="background" :class="this.$i18n.locale">
                <div class="tiles">
                    <div class="tile tile-1">   </div>
                    <div class="tile tile-2"> </div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4">
                        <img width="826" height="463" v-show="isArabic" :src="images[1]" alt="hero-1">
                    </div>
                    <div class="tile tile-5">
                        <img width="826" height="463" v-show="isArabic" :src="images[1]" alt="hero-2">
                    </div>
                    <div class="tile tile-6">
                        <img width="600" height="280" :src="images[0]" alt="hero-3">
                    </div>
                    <div class="tile tile-7">
                        <img width="826" height="463" v-show="!isArabic" :src="images[1]" alt="hero-4">
                    </div>
                    <div class="tile tile-8">
                        <img width="800" height="446" v-show="!isArabic" :src="images[2]" alt="hero-5">
                    </div>
                    <div class="tile tile-9">
                        <img width="800" height="449" :src="images[3]" alt="hero-6">
                    </div>
                    <div class="tile tile-10">
                        <img width="800" height="449" v-show="!isArabic" :src="images[4]" alt="hero-7">
                    </div>
                </div>
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        </div>
        <section class="hero-section">
            <div class="row ">
                <div class="col-md-7 info">
                    <h1 class="title neon-text"> {{hero_section.title || "Coda" }}</h1>
                    <h2 class="description">
                        {{hero_section.description || "We provide web and app development solutions to help businesses thrive in the digital era." }}
                    </h2>
                    <div class="d-flex mt-5">
                        <router-link :to="hero_section.button_url">
                            <BtnElectric :Text="hero_section.button_title" />
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<script>
import BtnElectric from '@/components/Global/BtnElectric.vue';
export default {
    data() {
        return {
            show: false,
        };
    },
    components: {
        BtnElectric
    },
    methods: {
       
    },
    props:{
        hero_section:{
            type:Object,
            required: true
        }
    },
    computed: {
        images() {
            return this.hero_section.images || [];
        },
        isArabic() {
            return this.$i18n.locale === 'ar';
        }
}
}
</script>