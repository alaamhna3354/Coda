<template>
    <section class="partner box-animation">
        <h5 class="section-card-title mb-5" :class="[isArabic ? 'ar' : 'en']" style="margin-inline-start: 50px;">
            <span>//</span>
            <span> {{ $t('Our Clients') }}</span>
        </h5>
        <div class="content">
            <swiper class="swiper pb-5" 
                :autoplay="{ delay: 0, disableOnInteraction: false, reverseDirection: true }"
                :speed="8000"
                :freeMode="true"
                :freeModeMomentum="false"
                :loop="true"
                :allowTouchMove="false"
                :breakpoints="swiperOptions.breakpoints">
                <swiper-slide class="item" v-for="item in our_client" :key="item">
                    <img  class="w-100" :src="item" alt="our client">
                </swiper-slide>
            </swiper>
        </div>
        <!-- From Uiverse.io by ashwin_5681 -->
        <!-- <div class="slider" :style="{
    '--width': '150px',
    '--height': '150px',
    '--quantity': our_client.length
  }">
            <div class="list">
                <div class="item" :style="`--position: ${index}`"  v-for="(item,index) in our_client" :key="index">
                        <img class="w-100" :src="item" alt="our client">
                </div>
            </div>
        </div> -->

    </section>
</template>
<script>
import '@/assets/swiper/navigation.scss'
import '@/assets/swiper/pagination.scss'
import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from 'swiper/vue';

import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination,Autoplay]);
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
    components: {
        Swiper,SwiperSlide
    },
    props: {
        our_client: {
            type: Array,
            required: true
        }
    },
  computed: {
    isArabic() {
      return this.$i18n.locale === 'ar';
    }
  }

};
</script>
<style scoped>
/* From Uiverse.io by ashwin_5681 */

.slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
}

.slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
}

.slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 15s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1) - 10s) !important;
}

.slider .list .item img {
    width: 100%;
}

@keyframes autoRun {
    from {
        left: 100%;
    }

    to {
        left: calc(var(--width) * -1);
    }
}

.slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
}

.slider .item:hover {
    filter: grayscale(0);
}

.slider[reverse="true"] .item {
    animation: reversePlay 10s linear infinite;
}
@keyframes reversePlay {
    from {
        left: calc(var(--width) * -1);
    }

    to {
        left: 100%;
    }
}
</style>