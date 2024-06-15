<script lang="ts" setup>
import { AboutBlock, FavoriteQuoteBlock, PersonalityBlock, PersonDescriptionBlock } from "@/pages";

/** Биография */
const biography: string = 'She currenlty lives in Sydney. She finished her master in businesss and has just been promoted to Sales Manager. She is currently single and like to go out with friends on long holidays.'
/** Основные потребности */
const  coreNeedsList: string[] = [
    'Need to find people with similar skills that can help her tackle company goals.',
'View all her hirings in an overview ',
    'The price of the service is very important'
]
/** Список разочарований */
const frustrationsList: string[] = [
    'Price is high related to quality they provide',
    'Currently finds perect people from past work relations, family, friends and within my circle and online which is tedious',
    'Not much choice and comparison not available'
]
</script>

<template>
<main class="main-layout">
  <div class="left-section">
    <about-block class="left-section_block"/>
    <favorite-quote-block class="left-section_block"/>
    <personality-block class="left-section_block"/>
  </div>
  <div class="right-section">
    <person-description-block title="Bio" :text="biography"/>
    <person-description-block title="Core needs" :list="coreNeedsList"/>
    <person-description-block title="Frustrations" :list="frustrationsList"/>
  </div>
</main>
</template>

<style scoped lang="scss">
 .main-layout {
   background-color: var(--background-color);
   padding: var(--basic-padding);
   border-radius: 32px;
   display: flex;
 }

 .left-section {
    margin-right: var(--half-margin);
 }
 .left-section_block {
   margin-bottom: var(--half-margin);
 }
 .left-section_block:last-of-type {
   margin-bottom: 0;
 }
</style>
