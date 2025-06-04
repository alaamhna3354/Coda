<template>
    <section class="about-us box-animation">
        <div class="card-content">
            <div class="section-card-title" :class="locale">
                <span>//</span>
                <span>{{ about_section.section_title }}</span>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-8 position-relative">
                    <img src="@/assets/img/home-page/about-us.avif" alt="about" class="cover"
                        :class="locale">
                </div>
            </div>
            <div class="content">
                <div class="row">
                    <!-- <div class="col-md-4 mb-3">
                        <img class="luminosity" src="@/assets/img/global/coda_logo_1.webp" alt="about-us">
                    </div> -->
                    <div class="col-12 mb-3">
                        <h2 class="title">
                            {{ about_section.title }}
                            <!-- <span class="neon-text">partners</span> -->
                        </h2>
                        <p>
                            {{ about_section.description }}
                        </p>
                        <ul>
                            <li v-for="(item, index) in about_section.list" :key="index">
                                <i class="fa-solid fa-bolt-lightning neon-text"></i>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <br>
                        <Btn style="padding: 10px 20px;" :Text="about_section.button_title" :Textcolor="`#b4d2f5`"
                            :TextcolorHover="`#fff`" :backgroundColor="`transparent`"
                            :backgroundColorHover="`#53b5ff`" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import '@/assets/fontawesome/css/fontawesome.css'
import '@/assets/fontawesome/css/brands.css'
import '@/assets/fontawesome/css/solid.css'
import Btn from '@/components/Global/Btn.vue';
export default {
    data() {
        return {

        };
    },
    components: {
        Btn
    },
    props: {
        about_section: {
            type: Object,
            required: true
        }
    },
    computed: {
        locale() {
            return this.$i18n.locale;
        }
    }
}
</script>