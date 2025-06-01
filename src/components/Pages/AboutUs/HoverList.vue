<template>
    <section class="hover-list">
        <div class="row">
            <div class="col-md-7">
                <div class="title neon-text">{{ Content.title }}</div>
                <div class="description mb-3">{{ Content.description }}</div>
            </div>
            <div class="col-md-6"></div>
        </div>
        <div class="about-list">
            <ul>
                <li v-for="item in Content.list" :key="item">
                    <span class="dot"></span>
                    <span>{{ item.text }}</span>
                    <img :class="[isArabic ? 'ar' : 'en']" :src="item.img" alt="about list">
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    props: {
        Content: {
            type: Object,
            required: true
        }
    },
    computed: {
        isArabic() {
            return this.$i18n.locale === 'ar';
        }
    }
}
</script>