<template>
    <div class="services-card-item" :class="[isArabic ? 'ar' : 'en']">
        <!-- <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
            </svg>
        </span> -->
        <h4>{{ CardContent.title }}</h4>
        <p>{{ CardContent.description }} </p>
        <div class="shine"></div>
        <div class="background">
            <div class="tiles">
                <div class="tile tile-1"></div>
                <div class="tile tile-2"></div>
                <div class="tile tile-3"></div>
                <div class="tile tile-4"></div>

                <div class="tile tile-5"></div>
                <div class="tile tile-6"></div>
                <div class="tile tile-7"></div>
                <div class="tile tile-8"></div>

                <div class="tile tile-9"></div>
                <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    props: {
        CardContent: {
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