<template>
    <section class="about-us">
      <div class="card-content">
        <div class="section-card-title">
            <span >//</span>
            <span>{{ $t('About Our Agency') }}</span>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8 position-relative">
                <img src="@/assets/img/home-page/about-us-cover.webp" alt="" class="cover">
            </div>
        </div>
        <div class="content">
            <div class="row">
            <div class="col-md-4 mb-3">
                <img class="luminosity" src="@/assets/img/home-page/about-us.svg" alt="">
            </div>
            <div class="col-md-8 mb-3">
                <h2 class="title">
                    Your Trusted 
                    <span class="neon-text">partners</span>
                    For Business Success
                </h2>
                <p>
                    Our team of experienced professionals combines creativity with technical expertise to deliver cutting-edge solutions that align with your business objectives. 
                </p>
                <ul>
                    <li>
                        <i class="fa-solid fa-bolt-lightning neon-text"></i>
                        <span>Personalized Customer Engagement</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-bolt-lightning neon-text"></i>
                        <span>Proactive Support Services</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-bolt-lightning neon-text"></i>
                        <span>Continuous Improvement</span>
                    </li>
                </ul>
                <Btn style="padding: 10px 20px;"
            :Text="$t('Show More')"
            :Textcolor="`#b4d2f5`"
            :TextcolorHover="`#fff`"
            :backgroundColor="`transparent`"
            :backgroundColorHover="`#53b5ff`"
            />
            </div>
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

        };
    },
    components: {
        Btn: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Global/Btn.vue') ),
    }
}
</script>