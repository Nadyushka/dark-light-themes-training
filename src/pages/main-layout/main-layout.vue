<script lang="ts" setup>
import {
  AboutBlock,
  FavoriteQuoteBlock,
  PersonalityBlock,
  PersonDescriptionBlock,
  PersonalDataWithImagesBlock
} from "@/pages";
import {onMounted, ref} from "vue";
import {
  brandImages,
  paymentImages,
  personality,
  personDescriptionBlocks,
  platformImages,
  quote,
  userData
} from "@/shared";


/** Имеет ли окно мобильный размер */
const isTablet = ref(false)

/** Имеет ли окно мобильный размер */
const isMobile = ref(false)

/** после монтирования компонента */
onMounted(() => {
  checkWindowSize()
  window.addEventListener('resize', checkWindowSize)
})

/** Проверка ширины окна */
const checkWindowSize = () => {
 isTablet.value = window.innerWidth < 1400
  isMobile.value = window.innerWidth < 800
}
</script>

<template>
<main class="main-layout" :class="{ 'tablet': isTablet, 'mobile': isMobile }">
  <div class="left-section">
    <about-block class="left-section_block" :user-data="userData"/>
    <favorite-quote-block class="left-section_block" :quote="quote"/>
    <personality-block class="left-section_block" :personality="personality"/>
  </div>
  <div class="right-section">
    <person-description-block
        v-for="block in personDescriptionBlocks"
        class="right-section_block"
        :title="block.Title"
        :text="block.Text"
        :list="block.List"
    />

    <div class="right-section_bottom">
      <personal-data-with-images-block title="Brands" :images="brandImages"/>
      <personal-data-with-images-block title="Payment medium" :images="paymentImages"/>
      <personal-data-with-images-block title="Platform" :images="platformImages"/>
    </div>
  </div>
</main>
</template>

<style scoped lang="scss">
 .main-layout {
   background-color: var(--background-color);
   padding: var(--double-padding);
   border-radius: 32px;
   display: flex;
 }

 .left-section {
    margin-right: var(--basic-margin);
   flex: 1 1 619px;
   max-width: 619px;
 }

 .right-section {
   flex: 1 1 calc(100% - 619px);
 }

 .left-section_block,
 .right-section_block {
   margin-bottom: var(--basic-margin);
 }

 .left-section_block:last-of-type,
 .right-section_block:last-of-type {
   margin-bottom: 0;
 }

 .right-section_bottom {
   display: flex;
   flex-wrap: wrap;
 }

 .tablet {
     display: block;

   .left-section {
     flex: 1 1 100%;
     max-width: 100%;
     width: 100%;
     margin-bottom: var(--basic-margin);
   }
 }
</style>
