<template>
    <section class="projects ">
        <div class="section-card-title">
            <span >//</span>
            <span> {{ $t('Our Projects') }}</span>
        </div>
        <div class="projects-content">
            <swiper class="swiper pb-5" 
            :space-between="20"
            :loop="true"
            :speed="1500"
            :navigation="{
                            enabled: true,
                            nextEl: '.myNext',
                            prevEl: '.myPrev',
                        }"
        >
            <swiper-slide class="item" v-for="item in 3" :key="item.id">
                <img class="w-100" src="https://sanawebsolution.com/assets/images/gallery/1.jpg" alt="">
                <div class="overlay-box">
                    <div class="info">
                        <h3>Social Media Marketing</h3>
                        <div class="text">Ready to expand and market to your audiences on social media</div>
                    </div>
                </div>
                
            </swiper-slide>
            <div class="navigation">
                <img class="myPrev" src="@/assets/img/global/left-arrow.png" alt="">
                <img class="myNext" src="@/assets/img/global/right-arrow.png" alt="">
            </div>
        </swiper>
        </div>
    </section>

</template>
<script>
export default {
    data() {
        return {
          
        }
    },
    components: {
    },
    methods: {
    },
    computed:{
    },
   
};
</script>