<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  personality: {
    type: Array as PropType<string[]>
  }
})
</script>

<template>
<div class="personality" v-if="personality?.length">
  <h3 class="personality_title block-title">Personality</h3>
  <div class="personality_quality-wrapper">
  <div class="personality_quality" v-for="quality in personality">
    {{ quality }}
  </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.personality {
  padding: calc(var(--basic-padding)*1.5) var(--double-padding);
  background-color: var(--background-color-block);
  border-radius: var(--border-radius-block);
  max-width: 619px;
}

.personality_quality-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-right: calc(var(--double-padding));
}

.personality_quality {
  padding: var(--basic-padding) var(--double-padding);
  background: var(--background-tag);
  border-radius: 56px;
  color: var(--font-color-tag);
  font-weight: var(--fw-medium);
  font-family: var(--ff-medium);
  font-size: var(--font-size-34);
  width: max-content;
  margin-bottom: var(--half-margin);
  margin-right: var(--half-margin);
}

.tablet {
  .personality {
    max-width: 100%;
  }
}

.mobile {
  .personality_quality  {
    font-size: var(--font-size-18);
    padding: var(--half-padding) var(--basic-padding);
  }
}
</style>
