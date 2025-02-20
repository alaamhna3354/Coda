<template>
    <section class="box-animation">
        <footer v-if="Data">
            <img class="cover" src="@/assets/img/home-page/lary-footer.webp" alt="">
            <div class="row content">
                <div class="col-md-5 mb-3">
                    <h3 class="title">
                        {{ Data.info.brand_title }}
                    </h3>
                    <p>
                        {{ Data.info.description }}
                    </p>
                    <div class="mt-3 info-address">
                        <div class="d-flex align-items-center mb-3">
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
                    <ul class="d-flex align-items-center mt-5 social">
                        <li v-for="item in Data.info.social" :key="item">
                            <a href="" target="_blank">
                                <i :class="item"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-1 mb-3">
                </div>
                <div class="col-md-2 mb-3">
                    <h5>{{ Data.col_1.coltitle }}</h5>
                    <ul>
                        <li v-for="item in Data.col_1.list" :key="item">
                            <router-link :to="item.url">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5>{{ Data.col_2.coltitle }}</h5>
                    <ul>
                        <li v-for="item in Data.col_2.list" :key="item">
                            <router-link :to="item.url">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5>{{ Data.col_3.coltitle }}</h5>
                    <ul>
                        <li v-for="item in Data.col_3.list" :key="item">
                            <router-link :to="item.url">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="container">
                    <div class="bottom-footer pt-4">
                        <p>© {{ Data.created_by }} 2025. {{ $t('All rights reserved.') }} </p>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
    return {
        Data:null
    }
  },
  computed: {
    ...mapGetters(['getStaticContent']),
    
  },
    mounted() {
            this.$store.dispatch('GetData');
            this.$store.dispatch('GetData').then(() => {
            this.Data = this.getStaticContent.footer[this.$i18n.locale];
    });
    },
}
</script>