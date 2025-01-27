<template>
    <section class="partner box-animation">
        <h5 class="section-card-title mb-5" style="margin-inline-start: 50px;">
            <span >//</span>
            <span> {{ $t('Our Clinets') }}</span>
        </h5>
        <div class="content">
            <swiper class="swiper pb-5" @swiper="onSwiper"
        :speed="10000"
        :loop="true"
        :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection:true
        }" 
        :breakpoints="swiperOptions.breakpoints">
            <swiper-slide class="item" v-for="item in 8" :key="item">
                <img class="w-100" src="@/assets/img/home-page/about-us.svg" alt="">
            </swiper-slide>
        </swiper>
        </div>

    </section>

</template>
<script>
export default {
    data() {
        return {
            swiperOptions: {
                breakpoints: {

                    300: {  // when window width from 300px to 576px
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    576: {  // when window width from 576px to 767px
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    767: { // when window width from 767px to 991px
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                    991: { // when window width from 991px to 1200px
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1200: { // when window width from 1200px to higher
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                }
            }
        }
    },
    methods: {
    },
   
};
</script>