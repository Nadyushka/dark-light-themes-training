<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  list: {
    type: Array as PropType<string[]>
  }
})
</script>

<template>
<div class="description">
  <div class="description_title block-title"> {{ title }} </div>
  <div class="description_text" v-if="text"> {{ text }}</div>
  <div class="description_list" v-if="list">
    <div v-for="item in list" class="description_item"> {{ item }}</div>
  </div>
</div>
</template>

<style scoped lang="scss">
.description {
  padding: calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 4.5);
  background-color: var(--background-color-block);
  border-radius: var(--border-radius-block);
}

.description_text,
.description_item {
  font-weight: var(--fw-medium);
  font-family: 'Manrope-Medium', sans-serif;
  color: var(--font-color);
  font-size: var(--font-size-32);
}

.description_item {
  margin-bottom: var(--half-margin);
  position: relative;
  padding-left: var(--double-padding);

  &::before{
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 0;
    border-radius: 100%;
    background-color: var(--accent-color);
  }
}

.mobile {
  .description {
    padding: var(--basic-padding) var(--double-padding);
  }

  .description_text,
  .description_item {
    font-size: var(--font-size-24);
  }

  .description_item {
    &::before {
      top: 10px;
    }
    }
}
</style>
