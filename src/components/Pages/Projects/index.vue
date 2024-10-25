<template>
    <section class="projects">
        <div class="filters">
            <div class="item" :class="[Filter == 'All' ? 'active' : '']" @click="Filtering('All')">All</div>
            <div class="item" :class="[Filter == 'Ai' ? 'active' : '']" @click="Filtering('Ai')">Ai</div>
            <div class="item" :class="[Filter == 'Sass' ? 'active' : '']" @click="Filtering('Sass')">Sass</div>
            <div class="item" :class="[Filter == 'Xr' ? 'active' : '']" @click="Filtering('Xr')">Xr</div>
            <div class="item" :class="[Filter == 'Ai 2' ? 'active' : '']" @click="Filtering('Ai 2')">Ai</div>
            <div class="item" :class="[Filter == 'Sass 2' ? 'active' : '']" @click="Filtering('Sass 2')">Sass</div>
            <div class="item" :class="[Filter == 'Xr 2' ? 'active' : '']" @click="Filtering('Xr 2')">Xr</div>
        </div>
        <div class="row">
            <div class="col-md-4 mb-3" v-for="item in 8" :key="item">
                <Card />
            </div>
        </div>
    </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            Filter: 'All'
        };
    },
    methods: {
        Filtering(Slug) {
            this.Filter = Slug;
        }
    },
    components: {
        Card: defineAsyncComponent(() => import('@/components/Pages/Projects/Card.vue')),
    }
}
</script>