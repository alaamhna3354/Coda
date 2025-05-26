<template>
    <div class="projects-card-item">
        <span class="dot dot-1"></span>
        <span class="dot dot-2"></span>
        <span class="dot dot-3"></span>
        <span class="dot dot-4"></span>
            <div class="image">
                <img v-if="ProjectItem.details.seo.image" :src="ProjectItem.details.seo.image" :alt="ProjectItem.details.seo.alt">
                <img v-else src="https://placehold.co/600x400" alt="placehold project card">
            </div>
            <div class="content-card">
              <div class="d-flex">
                <div class="slug" v-for="item in ProjectItem.tags" :key="item">
                    {{ item }}
                </div>
              </div>
                <h3 class="title mb-3">
                   {{ ProjectItem.title }}
                </h3>
                <div class="d-flex justify-content-between align-items-center">
                    <router-link class="d-flex" :to="`/projects/details/${ProjectItem.slug}`">
                    <Btn 
                    :Text="$t('Discover More')"
                    :Icon="`fa-solid fa-eye`"
                    :Textcolor="`#b4d2f5`"
                    :TextcolorHover="`#fff`"
                    :backgroundColor="`transparent`"
                    :backgroundColorHover="`#53b5ff`"
                />
                </router-link>
                <a :href="ProjectItem.details.seo.url" target="_blank">
                    <BtnElectric :Text="$t('Visit Site')" />
                </a>
                </div>
            </div>
    </div>
</template>
<script>
import Btn from '@/components/Global/Btn.vue';
import BtnElectric from '@/components/Global/BtnElectric.vue';
export default {
    data() {
        return {
        };
    },
    components: {
        Btn,
        BtnElectric
    },
    props:{
        ProjectItem:Object
    },
}
</script>