<template>
    <section class="services box-animation" style="overflow: hidden;">
        <div class="row">
            <div class="col-md-4 ">
            </div>
            <div class="col-md-8 position-relative">
                <img v-for="(item, j) in service_section.services" :key="j"
                :class="['cover', activeIndex == j ? 'show' : '']" 
                :src="item.preview_image" class="img-fluid"  
                width="400" height="200" loading="lazy"
                alt="preview image">
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-md-8">
                    <h3>{{ service_section.title }}</h3>
                    <p>
                        {{ service_section.subtitle }}
                    </p>
                    <router-link to="/services">
                        <Btn style="padding: 10px 20px;" :Text="service_section.button_title" :Icon="``"
                            :Textcolor="`#b4d2f5`" :TextcolorHover="`#fff`" :backgroundColor="`transparent`"
                            :backgroundColorHover="`#53b5ff`" />
                    </router-link>

                </div>
            </div>
            <div class="row mt-5">
                <div class="section-card-title" :class="locale">
                    <span>//</span>
                    <span>{{ $t('Offering Services') }}</span>
                </div>
                <div class="col-md-3 mb-3" v-for="(item, j) in service_section.services" :key="j"
                    @mouseenter="activeIndex = j">
                    <router-link :to="`/services/${item.slug}`" class="item"
                        :class="[activeIndex == j ? 'active' : '']">
                        <div class="title">{{ item.title }}</div>
                        <img :src="item.image" alt="service image" 
                        width="200" height="225" loading="lazy">
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Btn from '@/components/Global/Btn.vue';
export default {
    data() {
        return {
            activeIndex: 0
        };
    },
    components: {
        Btn
    },
    props: {
        service_section: {
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