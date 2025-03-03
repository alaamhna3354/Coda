<template>
    <section class="hover-list">
     <div class="row">
        <div class="col-md-6">
            <h1 class="title neon-text">{{ Content.title }}</h1>
            <h3>{{ Content.description }}</h3>
        </div>
        <div class="col-md-6"></div>
     </div>
     <div class="about-list">
        <ul>
            <li v-for="item in Content.list" :key="item">
                <span class="dot"></span> 
                <span>{{ item.text }}</span>
                <img :class="this.$i18n.locale" :src="item.img" alt="">
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
    props:{
        Content:{
            type:Object,
            required: true
        }
    }
}
</script>