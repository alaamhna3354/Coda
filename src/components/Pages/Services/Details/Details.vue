<template>
    <section class="services-details">
      <div class="row">
        <div class="col-md-8">
            <div class="content-details">
                <CardContent />
                <CardContent />
            </div>
        </div>
        <div class="col-md-4">
            <SideBar />
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
        SideBar: defineAsyncComponent(() => import('@/components/Pages/Services/Details/SideBar.vue')),
        CardContent: defineAsyncComponent(() => import('@/components/Pages/Services/Details/CardContent.vue')),
    }
}
</script>