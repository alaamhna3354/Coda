<template>
    <footer class="box-animation">
        <div class="row content" v-show="Data">
            <div class="col-md-5 mb-3">
                <h3 class="title">
                    {{ Data?.info?.brand_title }}
                </h3>
                <p>
                    {{ Data?.info?.description }}
                </p>
                <div class="mt-3 info-address">
                    <div class="d-flex mb-3">
                        <i class="fa-solid fa-location-dot neon-text"></i>
                        <span>{{ Data?.info?.address }}</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-phone neon-text"></i>
                        <span>{{ Data?.info?.phone }}</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-envelope neon-text"></i>
                        <span>{{ Data?.info?.email }}</span>
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
                <h4>{{ Data?.col_1?.coltitle }}</h4>
                <ul>
                    <li v-for="item in Data?.col_1?.list" :key="item">
                        <router-link :to="item.url">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 mb-3">
                <h4>{{ Data?.col_2?.coltitle }}</h4>
                <ul>
                    <li v-for="item in Data?.col_2?.list" :key="item">
                        <router-link :to="item.url">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-2">
                <h4>{{ Data?.col_3?.coltitle }}</h4>
                <ul>
                    <li v-for="item in Data?.col_3?.list" :key="item">
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
                    <p>© {{ Data?.created_by }} 2025. {{ $t('All rights reserved.') }} </p>
                </div>
            </div>
        </div>
        <div v-show="!Data" class="row content">
            <!-- عنصر placeholder بسيط أو حتى فراغ -->
            <div class="col-12 text-center py-5 text-muted">Loading footer...</div>
        </div>
    </footer>

    <Whatsapp v-show="Data" :PhoneNumber="Data?.info?.phone" />


</template>

<script>
import '@/assets/fontawesome/css/fontawesome.css'
import '@/assets/fontawesome/css/brands.css'
import '@/assets/fontawesome/css/solid.css'
import { mapGetters } from 'vuex';
import Whatsapp from '@/components/Global/Whatsapp.vue';
export default {
    data() {
        return {
            Data: {
                info: {
                    brand_title: "اسم الماركة",
                    description: "وصف ثابت هنا",
                    address: "عنوان ثابت",
                    phone: "123456",
                    email: "email@example.com"
                },
                col_1: { coltitle: "روابط", list: [{ title: "الرئيسية", url: "/" }] },
                col_2: { coltitle: "خدمات", list: [{ title: "خدمة 1", url: "/service1" }] },
                col_3: { coltitle: "تواصل", list: [{ title: "اتصل بنا", url: "/contact" }] },
                created_by: "الشركة"
            }
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