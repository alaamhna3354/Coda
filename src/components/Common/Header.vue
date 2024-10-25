<template>
    <OverLay @hide="Hide" />
    <header class="blur">
        <div class="row">
            <div class="col-md-3 col-3">
                <div class="logo">
                    <router-link to="/" >
                        <img src="@/assets/img/global/logo.svg" alt="logo">
                    </router-link>
                </div>
            </div>
            <div class="col-md-6 d-none d-md-block">
                <div class="links">
                    <ul>
                        <li v-for="item in menu" :key="item.id">
                            <router-link :to="item.path">
                                {{ this.$i18n.locale == 'en' ? item.titleEn : item.titleAr }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-9">
                <div class="d-flex align-items-center justify-content-end">
                    <span class="search">
                        <i class="fa-brands fa-searchengin"></i>
                    </span>
                    <span class="languages" >
                        <i class="fa-solid fa-earth-europe" @click="ShowMenuLang"></i>
                        <ul class="menu-lang" :class="[showMenuLang ? 'open':'']">
                            <li v-for="item in menuLang" :key="item.id" @click="changeLang(item.value)">
                               <span> {{ item.title }}</span>
                            </li>
                        </ul>
                    </span>
                    <router-link to="/auth" >
                        <Btn class="d-none d-md-flex"
                        :Text=" $t('Sign In')" 
                        :Textcolor="`#b4d2f5`"
                        :TextcolorHover="`#fff`"
                        :backgroundColor="`transparent`"
                        :backgroundColorHover="`#53b5ff`"
                        />
                    </router-link>
                   
                  <span class="search d-grid d-md-none" @click="ShowMenu = !ShowMenu">
                    <i class="fa-solid fa-bars-staggered"></i>
                  </span>
                </div>
            </div>
            <div class="mobile-menu d-grid d-md-none" :class="[ShowMenu ? 'opne':'']">
                <div class="d-flex align-items-center justify-content-end"  @click="ShowMenu = !ShowMenu">
                    <span class="search"><i class="fa-solid fa-xmark"></i></span>
                </div>
                <ul class="mt-5 mb-5 mobile-links">
                    <li v-for="item in menu" :key="item.id">
                        <router-link :to="item.path">
                                {{ this.$i18n.locale == 'en' ? item.titleEn : item.titleAr }}
                        </router-link>
                    </li>
                </ul>
                <div class="d-flex align-items-center justify-content-around auth-links">
                    <router-link to="/auth" >
                                {{ $t('Sign In') }}
                    </router-link>
                    <router-link to="/auth">
                                {{ $t('Sign Up') }}
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    data() {
        return {
            ShowMenu:false,
            menu: [
                {
                    id: 1,
                    titleEn: 'Home',
                    titleAr: 'الرئيسية',
                    path: '/'
                },
                {
                    id: 2,
                    titleEn: 'About',
                    titleAr: 'من نحن',
                    path: '/about'
                },
                {
                    id: 3,
                    titleEn: 'Services',
                    titleAr: 'خدماتنا',
                    path: '/services'
                },
                {
                    id: 4,
                    titleEn: 'Projects',
                    titleAr: 'مشاريعنا',
                    path: '/projects'
                },
                {
                    id: 5,
                    titleEn: 'Contact',
                    titleAr: 'تواصل معنا',
                    path: '/contact'
                },
            ],
            showMenuLang:false,
            menuLang:[
                {
                    id:1,
                    title:'English',
                    value:'en'
                },
                {
                    id:2,
                    title:'العربية',
                    value:'ar'
                }
            ]
        };
    },
    components:{
        Btn: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Global/Btn.vue') ),
        OverLay: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Global/OverLay.vue') ),
    },
    methods:{
        ShowMenuLang(){
            this.$store.dispatch('SETOverLay',true);
            this.showMenuLang = true;
        },
        Hide(){
            this.showMenuLang = false;
            this.$store.dispatch('SETOverLay',false);
        },
        changeLang(val){
            this.Hide();
            this.$store.dispatch('SETLang',val);
            this.$i18n.locale = val;
           
        },
        
    }
}
</script>