<template>
    <div class="services-sidebar">
        <div class="row">
            <div class="col-md-7">
                <h3>{{ $t('Other services') }}</h3>
                <div class="d-flex align-items-center justify-content-between mt-4">
                    <div>
                        <h3 class="text-center mb-0">15</h3>
                        <h6 class="text-center">Customers</h6>
                    </div>
                    <div>
                        <h3 class="text-center mb-0">20</h3>
                        <h6 class="text-center">Services</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <img class="img-sidebar" src="@/assets/img/projects/services-sidebar.webp" alt="">
            </div>
            <ul class="service-list mt-3">
                <li v-show="item.slug != $route.params.slug" v-for="item in Services.cards" :key="item"><router-link :to="`/services/details/${item.slug}`">
                   <span> {{ item.title }}</span>
                   <i class="fas fa-arrow-right"></i>
                </router-link></li>
            </ul>
        </div>
    </div>
    <div class="services-sidebar">
        <div class="row">
            <div class="col-md-7">
                <h3>{{ $t('Opening Hours') }}</h3>
                <h6>{{ Services.openingHours.description1 }}</h6>
                <h6>{{ Services.openingHours.description2 }}</h6>
            </div>
            <div class="col-md-5">
                <img class="img-sidebar" src="@/assets/img/projects/services-sidebar-2.webp" alt="">
            </div>
            <ul class="time-list mt-3">
                <li v-for="(time, day) in Services.openingHours.hours" :key="day">
                    <span><i class="fa-solid fa-clock"></i> {{ day }}</span>
                    <span>{{ time }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    props:{
        Services:{
            type:Object,
            required: true
        }
    }
}
</script>