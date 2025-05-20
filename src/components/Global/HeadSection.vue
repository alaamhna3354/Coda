<template>
    <div class="head-section">
        <div class="content">
            <img src="@/assets/img/global/laravel-icon.svg" alt="laravel-icon">
            <h1 class="title">{{ Title }}</h1>
            <h2>{{ Description }}</h2>
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