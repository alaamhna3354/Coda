<template>
    <section class="services blur">
      <div class="row">
        <div class="col-md-4 ">
        </div>
        <div class="col-md-8 position-relative">
                <img :class="[index == 1 ? 'show' : '']" class="cover" src="@/assets/img/home-page/services-1.svg" alt="">
                <img :class="[index == 2 ? 'show' : '']" class="cover" src="@/assets/img/home-page/services-2.svg" alt="">
                <img :class="[index == 3 ? 'show' : '']" class="cover" src="@/assets/img/home-page/services-3.svg" alt="">
                <img :class="[index == 4 ? 'show' : '']" class="cover" src="@/assets/img/home-page/services-4.svg" alt="">
        </div>
      </div>
       <div class="content">
       <div class="row">
        <div class="col-md-8">
            <h3>We Provide Exclusive <span class="neon-text">Digital</span> Service</h3>
            <p>
                Passkeys provide a simpler and more secure alternative to traditional passwords.
            </p>
            <Btn style="padding: 10px 20px;"
            :Text="$t('Play Video')"
            :Icon="`fa-solid fa-circle-play`"
            :Textcolor="`#b4d2f5`"
            :TextcolorHover="`#fff`"
            :backgroundColor="`transparent`"
            :backgroundColorHover="`#53b5ff`"
            />
        </div>
       </div>
       <div class="row mt-5">
        <div class="section-card-title">
            <span >//</span>
            <span>{{ $t('Offering Services') }}</span>
        </div>
        <div class="col-md-3 mb-3" @mouseenter="index = 1" >
            <router-link to="/" class="item" :class="[index == 1 ? 'active' : '']">
                <div class="title">Digital Marketing</div>
                <img src="@/assets/img/home-page/services-1.webp" alt="">
            </router-link>
        </div>
        <div class="col-md-3 mb-3" @mouseenter="index = 2">
            <router-link to="/" class="item" :class="[index == 2 ? 'active' : '']">
                <div class="title">Email Marketing</div>
                <img src="@/assets/img/home-page/services-2.webp" alt="">
            </router-link>
        </div>
        <div class="col-md-3 mb-3" @mouseenter="index = 3">
            <router-link to="/" class="item" :class="[index == 3 ? 'active' : '']">
                <div class="title">Social Media Strategy</div>
                <img src="@/assets/img/home-page/services-3.webp" alt="">
            </router-link>
        </div>
        <div class="col-md-3 mb-3" @mouseenter="index = 4">
            <router-link to="/" class="item" :class="[index == 4 ? 'active' : '']">
                <div class="title">Reporting & Analyisis.</div>
                <img src="@/assets/img/home-page/services-4.webp" alt="">
            </router-link>
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
            index : 1
        };
    },
    components: {
        Btn: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Global/Btn.vue') ),
       
    }
}
</script>