<template>
    <div id="services-details">
      <img class="body-cover absolute" src="@/assets/img/global/grid.svg" alt="">
        <HeadSection :Title="`Services Details`" />
      <Details />
     </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Services Details Page',
  data(){
    return{
    }
  },
  components: {
    Details: defineAsyncComponent( () => import('@/components/Pages/Services/Details/Details.vue') ),
    HeadSection: defineAsyncComponent(() => import('@/components/Global/HeadSection.vue')),

  },
 
}
</script>
