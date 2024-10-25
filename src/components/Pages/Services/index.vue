<template>
    <section class="services-cards">
        <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="">
                <HeadSection :Title="`Services`" />
            <div class="list">
                <router-link to="/services/details/1" v-for="item in 8" :key="item">
                    <Card  />
                </router-link>
            </div>
    </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
        };
    },
    components: {
        Card: defineAsyncComponent(() => import('@/components/Pages/Services/Card.vue')),
        HeadSection: defineAsyncComponent(() => import('@/components/Global/HeadSection.vue')),
    }
}
</script>