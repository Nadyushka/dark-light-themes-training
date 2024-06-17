<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  title: {
    type: String,
  },
  images: {
    type: Array as PropType<string[]>
  }
})

const  getImageComponent = (imageName: string) => {
  switch (imageName) {
    case 'Belle':
      return './belle.png';
    case 'Cash':
      return './cash.png';
    case 'Facebook':
      return './facebook.png';
    case 'Huawei':
      return './huawei.png';
    case 'Instagram':
      return './instagram.png';
    case 'Mobile':
      return './mobile.png';
    case 'Nasa':
      return './nasa.png';
    case 'Online':
      return './digital.png';
    case 'Website':
      return './website.png';
    case 'Youtube':
      return './youtube.png';
    case 'hp':
      return './hp.png';
    default:
      return null;
  }
}
</script>

<template>
  <div class="block">
    <div class="block_title block-title"> {{ title }} </div>
    <div class="block_images">
      <img class="block_image" v-for="image in images" :src="getImageComponent(image)"
           :style="{
        height: title == 'Brands' ? '95px' : '125px'
      }"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.block {
  padding: calc(var(--basic-padding) * 2) calc(var(--basic-padding) *2) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 4.5);
  background-color: var(--background-color-block);
  border-radius: var(--border-radius-block);
  margin-bottom: var(--basic-margin);
  flex: 1 1 50% ;
}
.block_image {
  margin-right: var(--basic-margin);
}

.tablet {
  .block {
    grid-column: span 2 !important;
    margin-right: 0 !important;
  }
}
</style>
