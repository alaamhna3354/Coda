<template>
    <div class="head-section">
        <div class="content">
            <img src="@/assets/img/global/laravel-icon.svg" alt="laravel-icon">
            <h1 class="title">{{ Title }}</h1>
            <p>{{ Description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Title:String,
        Description:String,
    }
    
   
}
</script>