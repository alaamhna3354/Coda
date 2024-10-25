<template>
    <section class="hover-list">
     <div class="row">
        <div class="col-md-6">
            <h1 class="title neon-text">{{ Title }}</h1>
            <h3> We Are Marketing The Avengers
                Skilled enough to know better
                Wild enough to think bigger!</h3>
        </div>
        <div class="col-md-6"></div>
     </div>
     <div class="about-list">
        <ul>
            <li>
                <span class="dot"></span> 
                <span>We Are Marketing The Avengers Skilled enough to know better</span>
                <img src="@/assets/img/about-us/our-vision.webp" alt="">
            </li>
            <li>
                <span class="dot"></span>
                <span>We Are Marketing The Avengers Skilled enough to know better</span>
                <img src="@/assets/img/about-us/our-vision-2.webp" alt="">
            </li>
            <li>
                <span class="dot"></span>
                <span>We Are Marketing The Avengers Skilled enough to know better</span>
                <img src="@/assets/img/about-us/our-vision-3.webp" alt="">
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
        Title:String
    }
}
</script>