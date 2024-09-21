<template>
    <div class="overlay" @click="close" :class="[Show ? 'open':'']"></div>
</template>
<script>
export default {
    computed: {
        Show () {
            return this.$store.state.OverLay;
        }
    },
    methods: {
        close(){
            this.$emit('hide')
        }
    },
}
</script>