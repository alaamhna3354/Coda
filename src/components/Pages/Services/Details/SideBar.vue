<template>
    <div class="services-sidebar">
        <div class="row">
            <div class="col-md-7">
                <h3>Other services</h3>
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
                <li><router-link to="/services/details/1">
                   <span> Consumer Product</span>
                   <i class="fas fa-arrow-right"></i>
                </router-link></li>
                <li><router-link to="/services/details/1">
                   <span> Marketing Analysis</span>
                   <i class="fas fa-arrow-right"></i>
                </router-link></li>
                <li><router-link to="/services/details/1">
                   <span>Speed Optimization</span>
                   <i class="fas fa-arrow-right"></i>
                </router-link></li>
                <li><router-link to="/services/details/1">
                   <span>Email Marketing</span>
                   <i class="fas fa-arrow-right"></i>
                </router-link></li>
                <li><router-link to="/services/details/1">
                   <span>Marketing Analysis</span>
                   <i class="fas fa-arrow-right"></i>
                </router-link></li>
               
            </ul>
        </div>
    </div>
    <div class="services-sidebar">
        <div class="row">
            <div class="col-md-7">
                <h3>Opening Hours</h3>
                <h6>Competitive Prices</h6>
                <h6>24 hours a day</h6>
            </div>
            <div class="col-md-5">
                <img class="img-sidebar" src="@/assets/img/projects/services-sidebar-2.webp" alt="">
            </div>
            <ul class="time-list mt-3">
                <li>
                   <span><i class="fa-solid fa-clock"></i> Monday - Friday</span>
                   <span>  9.00 - 20.00</span>
                </li>
                <li>
                   <span><i class="fa-solid fa-clock"></i> Saturday</span>
                   <span> 10.00 - 16.00</span>
                </li>
                <li>
                   <span><i class="fa-solid fa-clock"></i> Sunday</span>
                   <span>  9.30 - 18.00</span>
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
}
</script>