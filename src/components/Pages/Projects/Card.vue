<template>
    <div class="projects-card-item">
        <span class="dot dot-1"></span>
        <span class="dot dot-2"></span>
        <span class="dot dot-3"></span>
        <span class="dot dot-4"></span>
            <div class="image">
                <img src="@/assets/img/projects/projects-card.webp" alt="">
            </div>
            <div class="content-card">
                <div class="slug">
                    Ai
                </div>
                <h3 class="title mb-5">
                    The AI Revolution
                </h3>
                <router-link class="d-flex" to="/projects/details/1">
                    <Btn 
                    :Text="$t('Discover More')"
                    :Icon="`fa-solid fa-eye`"
                    :Textcolor="`#b4d2f5`"
                    :TextcolorHover="`#fff`"
                    :backgroundColor="`transparent`"
                    :backgroundColorHover="`#53b5ff`"
                />
                </router-link>
            </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    data() {
        return {
        };
    },
    components: {
        Btn: defineAsyncComponent(() => import('@/components/Global/Btn.vue')),
    },
    mounted() {
   
    }
}
</script>