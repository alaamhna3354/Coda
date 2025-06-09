<template>
    <div class="card-content mt-5">
        <div class="content">
            <div class="row">
                <div class="col-md-7 mb-3 info">
                    <h1 v-if="Project?.details?.seo?.h1" class="title">
                        <span class="neon-text">{{ Project.details.seo.h1 }}</span>
                    </h1>
                    <h2 class="title" v-else>
                        <span class="neon-text">{{ Project?.details?.title || "......" }}</span>
                    </h2>
                    <p>
                        {{ Project?.details?.description || "......" }}
                    </p>
                    <a target="_blank" :href="Project?.details?.seo.url">
                        <Btn 
                            style="padding: 10px 20px;"
                            :Text="$t('Visit Site')"
                            :Textcolor="`#b4d2f5`"
                            :TextcolorHover="`#fff`"
                            :backgroundColor="`transparent`"
                            :backgroundColorHover="`#53b5ff`"
                        />
                    </a>
                    <br>
                    <ul>
                        <li v-for="item in Project?.details?.list" :key="item">
                            <i class="fa-solid fa-bolt-lightning neon-text"></i>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-5 mb-3 img-content">
                    <img class="img-fluid"  width="400" height="200"
                        :src="Project?.details?.seo.image" 
                        :alt="Project?.details?.seo?.alt || 'Default image description'" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/fontawesome/css/fontawesome.css'
import '@/assets/fontawesome/css/brands.css'
import '@/assets/fontawesome/css/solid.css'
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Btn: defineAsyncComponent(() => import('@/components/Global/Btn.vue')),
    },
    props: {
        Project:{
            type:Object,
            required: true
        }
    },
    
    watch: {
        Project: {
            handler(newVal) {
                if (newVal?.details?.seo) {
                    this.setSEO(newVal.details.seo);
                }
            },
            immediate: true
        }
    },
    methods: {
        setSEO(seo) {
            if (seo) {
                document.title = seo.title || 'Default Title';
                this.updateMeta('description', seo.description || 'Default description');
                this.updateMeta('keywords', seo.keywords || 'default, keywords');
                this.updateMeta('og:title', seo.ogTitle || seo.title || 'Default OG Title');
                this.updateMeta('og:description', seo.ogDescription || seo.description || 'Default OG Description');
                this.updateMeta('og:image', seo.ogImage || seo.image || '/default-image.png');
                this.updateMeta('og:url', seo.ogUrl || seo.url || window.location.href);
                this.updateMeta('og:type', seo.ogType || 'website');
                this.updateMeta('og:locale', seo.ogLocale || 'en_US');
            }
        },
        updateMeta(name, content) {
            let metaTag = document.querySelector(`meta[name="${name}"]`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('name', name);
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
        }
    }
}
</script>