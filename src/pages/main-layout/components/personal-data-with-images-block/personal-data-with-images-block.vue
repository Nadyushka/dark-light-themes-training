<script setup lang="ts">
import {PropType} from "vue";
import Belle from "@/assets/svg/belle.svg"
import Cash from "@/assets/svg/cash.svg"
import Facebook from "@/assets/svg/huawei.svg"
import Huawei from "@/assets/svg/nasa.svg"
import Instagram from "@/assets/svg/instagram.svg"
import Mobile from "@/assets/svg/mobile.svg"
import Nasa from "@/assets/svg/nasa.svg"
import Online from "@/assets/svg/online.svg"
import Website from "@/assets/svg/website.svg"
import Youtube from "@/assets/svg/facebook.svg"


defineProps({
  title: {
    type: String,
  },
  images: {
    type: Array as PropType<string[]>
  }
})

const  getImageComponent = (image: string) => {
  switch (image) {
    case 'Belle':
      return Belle;
    case 'Cash':
      return Cash;
    case 'Facebook':
      return Facebook;
    case 'Huawei':
      return Huawei;
    case 'Instagram':
      return Instagram;
    case 'Mobile':
      return Mobile;
    case 'Nasa':
      return Nasa;
    case 'Online':
      return Online;
    case 'Website':
      return Website;
    case 'Youtube':
      return Youtube;
    default:
      return null;
  }
}
</script>

<template>
  <div class="block">
    <div class="block_title block-title"> {{ title }} </div>
  <div>
        <component :is="Youtube" v-if="images.includes('Youtube')" />
  </div>
    <div>
        <component :is="Website" v-if="images.includes('Website')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.block {
  padding: calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 4.5);
  background-color: var(--background-color-block);
  border-radius: var(--border-radius-block);
  margin-bottom: var(--basic-margin);
  flex: 1 1 calc(50% - var(--basic-margin));
}
</style>
