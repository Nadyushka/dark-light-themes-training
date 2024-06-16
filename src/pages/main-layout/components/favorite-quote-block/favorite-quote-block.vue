<script setup lang="ts">
import Qoute from '@/assets/svg/quote.svg'

defineProps({
  quote: {
    type: String
  }
})
</script>

<template>
  <div class="quote" v-if="quote">
    <Qoute class="quote_svg"/>
    {{ quote }}
  </div>
</template>

<style scoped lang="scss">
 .quote {
   padding: calc(var(--basic-padding) * 1.5) calc(var(--basic-padding) * 4.5);
   background-color: var(--background-color-block);
   border-radius: var(--border-radius-block);
   max-width: 619px;
   font-weight: var(--fw-medium);
   font-family: var(--ff-medium);
   font-size: var(--font-size-34);
   color: var(--font-color);
   position: relative;

   &_svg {
     position: absolute;
     width: 38px;
     height: 33px;
     top: 35px;
     left: 20px;
     color: var(--accent-color)
   }
 }

 .tablet {
   .quote {
     max-width: 100%;
   }
 }

 .mobile {
   .quote {
     font-size: var(--font-size-24);

     &_svg {
      scale: 0.6;
       top: 15px;
     }
   }
 }
</style>
