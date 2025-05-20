<template>
    <section class="projects">
        <div class="filters">
            <div class="item mb-2" :class="[Filter == 'All' ? 'active' : '']" @click="Filtering('All')">{{ $t('All') }}</div>
            <div class="item mb-2" v-for="tag in uniqueTags" :key="tag" :class="[Filter == tag ? 'active' : '']"
                @click="Filtering(tag)">
                {{ tag }}
            </div>
        </div>
        <div class="row">
            <TransitionGroup name="list">
                <div v-show="(item.tags.includes(Filter) || Filter === 'All')" class="col-12 col-sm-6 col-md-4 mb-3"
                    v-for="item in ProjectsList" :key="item">
                    <Card :ProjectItem="item" />
                </div>
            </TransitionGroup>
        </div>
    </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
    data() {
        return {
            Filter: 'All',
        };
    },
    methods: {
        Filtering(Slug) {
            this.Filter = Slug;
            console.log(this.Filter)
        },
        updateFilterFromQuery() {
            const tagFromQuery = this.$route.query.tag;
            if (tagFromQuery && this.uniqueTags.includes(tagFromQuery)) {
                this.Filter = tagFromQuery;
            } else {
                this.Filter = 'All';
            }
        }
    },
    props: {
        ProjectsList: Array
    },
    computed: {
        uniqueTags() {
            const allTags = this.ProjectsList.flatMap(item => item.tags);
            return [...new Set(allTags)];
        },
    },
    mounted() {
        this.updateFilterFromQuery(); // عند تحميل الصفحة
    },
    watch: {
        '$route.query.tag': function () {
            this.updateFilterFromQuery(); // عند تغيّر الكويري
        }
    },
    components: {
        Card: defineAsyncComponent(() => import('@/components/Pages/Projects/Card.vue')),
    }
}
</script>
<style scoped>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

</style>
