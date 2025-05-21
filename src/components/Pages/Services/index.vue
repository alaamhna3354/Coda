<template>
    <section class="services-cards">
        <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="grid">
                <HeadSection :Title="Content.title" :Description="Content.description" />
            <div class="list">
                <router-link :to="`/services/details/${item.slug}`" v-for="item in Content.cards" :key="item">
                    <Card :CardContent="item"  />
                </router-link>
            </div>
    </section>
</template>
<script>
import Card from '@/components/Pages/Services/Card.vue';
import HeadSection from '@/components/Global/HeadSection.vue';
export default {
    data() {
        return {
        };
    },
    components: {
        Card,
        HeadSection
    },
    props:{
        Content:{
            type:Object,
            required: true
        }
    }
}
</script>