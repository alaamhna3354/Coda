<template>
    <a id="whatsapp" href="https://wa.me/YOUR_PHONE_NUMBER" class="whatsapp-btn" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
</template>
<style lang="scss" scoped>
.whatsapp-btn {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 0 0 15px #5996f1;
    transition: all 0.3s ease-in-out;
    z-index: 100;
}

.whatsapp-btn:hover {
    box-shadow: 0 0 25px #5996f1, 0 0 50px #5996f1;
    transform: scale(1.1);
}

.whatsapp-btn i {
    color: #328af1;
    font-size: 30px;
    text-shadow:0 0 7px #328af1 ;
}

.dir-ar {
    .whatsapp-btn {
        left: auto;
        right: 20px;
    }
}


</style>