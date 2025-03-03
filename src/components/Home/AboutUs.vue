<template>
    <section class="about-us box-animation">
      <div class="card-content">
        <div class="section-card-title" :class="this.$i18n.locale">
            <span >//</span>
            <span>{{ about_section.section_title }}</span>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8 position-relative">
                <img  src="@/assets/img/home-page/about-us-cover.webp" alt="" class="cover" :class="this.$i18n.locale">
            </div>
        </div>
        <div class="content">
            <div class="row">
            <div class="col-md-4 mb-3">
                <img class="luminosity" src="@/assets/img/home-page/about-us.svg" alt="">
            </div>
            <div class="col-md-8 mb-3">
                <h2 class="title">
                    {{ about_section.title }}
                    <!-- <span class="neon-text">partners</span> -->
                </h2>
                <p>
                    {{ about_section.description }}
                </p>
                <ul>
                    <li v-for="(item,index) in about_section.list" :key="index">
                        <i class="fa-solid fa-bolt-lightning neon-text"></i>
                        <span>{{item}}</span>
                    </li>
                </ul>
                <br>
                <Btn style="padding: 10px 20px;"
            :Text="about_section.button_title"
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
    },
    props:{
        about_section:{
            type:Object,
            required: true
        }
    }
}
</script>