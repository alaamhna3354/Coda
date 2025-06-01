<template>
    <section class="box-animation">
        <footer>
            <div v-if="!Data" class="footer-skeleton">
                <!-- Skeleton loader while data is loading -->
                <div class="row content">
                    <div class="col-md-5 mb-3 skeleton-block"></div>
                    <div class="col-md-2 mb-3 skeleton-block"></div>
                    <div class="col-md-3 mb-3 skeleton-block"></div>
                    <div class="col-md-2 skeleton-block"></div>
                </div>
            </div>
            <div v-else class="row content">
                <div class="col-md-5 mb-3">
                    <h3 class="title">
                        {{ Data.info.brand_title }}
                    </h3>
                    <p>
                        {{ Data.info.description }}
                    </p>
                    <div class="mt-3 info-address">
                        <div class="d-flex mb-3">
                            <i class="fa-solid fa-location-dot neon-text"></i>
                            <span>{{ Data.info.address }}</span>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="fa-solid fa-phone neon-text"></i>
                            <span>{{ Data.info.phone }}</span>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="fa-solid fa-envelope neon-text"></i>
                            <span>{{ Data.info.email }}</span>
                        </div>
                    </div>
                    <!-- <ul class="d-none d-md-flex align-items-center mt-3 social">
                        <li v-for="item in Data.info.social" :key="item">
                            <a href="" target="_blank">
                                <i :class="item"></i>
                            </a>
                        </li>
                    </ul> -->
                </div>

                <div class="col-md-2 mb-3">
                    <h4>{{ Data.col_1.coltitle }}</h4>
                    <ul>
                        <li v-for="item in Data.col_1.list" :key="item">
                            <router-link :to="item.url">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 mb-3">
                    <h4>{{ Data.col_2.coltitle }}</h4>
                    <ul>
                        <li v-for="item in Data.col_2.list" :key="item">
                            <router-link :to="item.url">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h4>{{ Data.col_3.coltitle }}</h4>
                    <ul>
                        <li v-for="item in Data.col_3.list" :key="item">
                            <router-link :to="item.url">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- <div class="col d-block d-md-none mb-2">
                    <ul class="d-flex align-items-center mt-3 social">
                        <li v-for="item in Data.info.social" :key="item">
                            <a href="" target="_blank">
                                <i :class="item"></i>
                            </a>
                        </li>
                    </ul>
                </div> -->
                <div class="container">
                    <div class="bottom-footer pt-2 mt-2">
                        <p>© {{ Data.created_by }} 2025. {{ $t('All rights reserved.') }} </p>
                    </div>
                </div>
            </div>
        </footer>
    </section>
    <Whatsapp v-if="Data" :PhoneNumber="Data.info.phone" />
</template>
<style scoped>
.skeleton-block {
    background: #f0f0f0;
    height: 200px;
    margin-bottom: 1rem;
    animation: pulse 1.5s infinite;
}

.min-height-300 {
    min-height: 300px;
}

.social-container {
    height: 60px;
    /* Fixed height for social media container */
}

@keyframes pulse {
    0% {
        opacity: 0.6;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.6;
    }
}
</style>

<script>
import '@/assets/fontawesome/css/fontawesome.css'
import '@/assets/fontawesome/css/brands.css'
import '@/assets/fontawesome/css/solid.css'
import { mapGetters } from 'vuex';
import Whatsapp from '@/components/Global/Whatsapp.vue';
export default {
    data() {
        return {
            Data: null
        }
    },
    components: {
        Whatsapp
    },
    computed: {
        ...mapGetters(['getStaticContent']),
    },
    watch: {
        '$i18n.locale'() {
            // أعد جلب البيانات من Vuex عند تغيير اللغة
            this.fetchData();
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.$store.dispatch('GetData').then(() => {
            this.Data = this.getStaticContent.footer[this.$i18n.locale];
        });
        }
    }
}
</script>