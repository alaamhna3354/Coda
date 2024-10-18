<template>
    <section class="services-cards">
            <div class="list">
                <Card v-for="item in 8" :key="item" />
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
        Card: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Pages/Services/Card.vue')),
    }
}
</script>