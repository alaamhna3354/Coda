<template>
    <section class="projects ">
      <div class="d-flex justify-content-between mb-3">
        <div class="section-card-title" :class="this.$i18n.locale">
            <span>//</span>
            <span> {{ $t('Our Projects') }}</span>
        </div>
        <router-link to="/projects">
            <Btn style="padding: 10px 20px;"
            :Text="$t('Show All')"
            :Icon="``"
            :Textcolor="`#b4d2f5`"
            :TextcolorHover="`#fff`"
            :backgroundColor="`transparent`"
            :backgroundColorHover="`#53b5ff`"
            />
        </router-link>
      </div>
        <div class="projects-content">
            <swiper class="swiper pb-5" :loop="true" :speed="1500" :autoplay="{
                delay: 5000,
            }" :navigation="{
                enabled: true,
                nextEl: '.myNext',
                prevEl: '.myPrev',
            }"
            :breakpoints="swiperOptions.breakpoints">
                <swiper-slide class="item box-animation" v-for="item in our_projects" :key="item.id">
                    <router-link :to="`/projects/details/${item.title}`">
                        <img v-if="item.image" :src="item.image" :alt="item.alt">
                        <img v-else src="https://placehold.co/600x400" alt="placehold projects">
                        <div class="overlay-box">
                            <div class="info">
                                <h3>{{ item.title }}</h3>
                                <div class="text text-white">{{ item.description }}</div>
                            </div>
                        </div>
                    </router-link>

                </swiper-slide>
                <div class="navigation">
                    <img class="myPrev" src="@/assets/img/global/left-arrow.png" alt="Prev">
                    <img class="myNext" src="@/assets/img/global/right-arrow.png" alt="Next">
                </div>
            </swiper>
        </div>
    </section>

</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    data() {
        return {
            swiperOptions: {
                breakpoints: {

                    300: {  // when window width from 300px to 576px
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    576: {  // when window width from 576px to 767px
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    767: { // when window width from 767px to 991px
                        slidesPerView: 1,
                        spaceBetween: 20
                    },

                    991: { // when window width from 991px to 1200px
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    1200: { // when window width from 1200px to higher
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                }
            }
        }
    },
    components: {
        Btn: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Global/Btn.vue') ),
    },
    props:{
        our_projects:{
            type:Array,
            required: true
        }
    }

};
</script>