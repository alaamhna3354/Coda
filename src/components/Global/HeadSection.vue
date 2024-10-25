<template>
    <div class="head-section">
        <div class="content">
            <img src="@/assets/img/global/laravel-icon.svg" alt="">
            <h1 class="title">{{ Title }}</h1>
            <p>There's a difference between knowing the path, and walking the path.</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Title:String,
    }
    
   
}
</script>