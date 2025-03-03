<template>
    <button :class="this.$i18n.locale" class="btn-main" :style="styleButton">
        <i :class="Icon"></i>
        <span> {{ Text }}</span>
        <div class="liquid"></div>
    </button>
</template>
<script>
export default {
    computed: {
        styleButton: function () {
            return {
                '--TextColor': this.Textcolor ,
                '--TextColor-hover': this.TextcolorHover ,
                '--backgroundColor': this.backgroundColor ,
                '--backgroundColor-hover': this.backgroundColorHover,
                '--FontSize': this.FontSize ,
            }
        }
    },
    props: {
        Text:String,
        Icon:String,
        Textcolor:String,
        TextcolorHover:String,
        backgroundColor:String,
        backgroundColorHover:String,
        FontSize:{
            type:String,
            default:'15px'
        },
    }
}
</script>
<style lang="scss">
@import '../../assets/styles/_varible.scss';
.btn-main{
    border-radius: 14px;
    min-height: 40px;
    padding: 10px;
    transition: .5s;
    background-color:  var(--backgroundColor);
    border: 2px solid var(--TextColor);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    i{
        position: relative;
        z-index: 2;
        margin-inline-end: 5px;
        color: var(--TextColor);
    }
    &:hover{
        border: 2px solid var(--backgroundColor-hover);
        &::after{
            width: 100%;
        }
        span,i{
            color: var(--TextColor-hover);
        }
    }
    span{
        font-weight: 601;
        font-size: var(--FontSize);
        color: var(--TextColor);
        transition: .5s;
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &::after{
        content: '';
        position: absolute;
        transition: .5s;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        background-color:  var(--backgroundColor-hover);
        z-index: 1;
    }
    &.ar{
        &::after{
        left: auto;
        right: 0;
    }
    }
}
</style>