<template>
    <div class="card-content">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8 position-relative">
                <img :src="ServicesDetails?.image" alt="cover" class="cover" :class="this.$i18n.locale">
            </div>
        </div>
        <div class="content">
            <div class="row">
            <div class="col-md-8 mb-3">
                <h1 v-if="ServicesDetails?.seo?.h1" class="title">
                       {{ ServicesDetails?.seo?.h1 }}
                    </h1>
                <h2 class="title"  v-else>
                  {{ ServicesDetails.title }}
                </h2>
                <p>
                    {{ ServicesDetails.description }}
                </p>
                <ul v-if="ServicesDetails.features">
                    <li v-for="item in ServicesDetails.features" :key="item">
                        <i class="fa-solid fa-bolt-lightning neon-text"></i>
                        <span>{{ item }}</span>
                    </li>
                </ul>
                <Btn style="padding: 10px 20px;"
            :Text="$t('Show More')"
            :Textcolor="`#b4d2f5`"
            :TextcolorHover="`#fff`"
            :backgroundColor="`transparent`"
            :backgroundColorHover="`#53b5ff`"
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
export default {
    data() {
        return {
        };
    },
    props:{
        ServicesDetails:{
            type:Object,
            required: true
        }
    },
    watch: {
        ServicesDetails: {
            handler(newVal) {
                if (newVal?.seo) {
                    this.setSEO(newVal.seo);
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