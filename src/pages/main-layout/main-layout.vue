<script lang="ts" setup>
import {
  AboutBlock,
  FavoriteQuoteBlock,
  PersonalityBlock,
  PersonDescriptionBlock,
  PersonalDataWithImagesBlock,
} from "@/pages";
import {computed, onMounted, ref} from "vue";
import {
  personalDataWithImagesBlocks,
  personality,
  personDescriptionBlocks,
  quote,
  userData,
} from "@/shared";

/**
 * Активирована ли темная тема
 */
const darkTheme = ref(true);

/** Имеет ли окно мобильный размер */
const isTablet = ref(false);

/** Имеет ли окно мобильный размер */
const isMobile = ref(false);

/** Стили для переключателя тем */
const changeThemeStyles = computed(() => ({
  backgroundColor: darkTheme.value ? '#ccc' : '#2196f3',
  '--background': darkTheme.value
      ? `white url('./night.png') no-repeat center`
      : `white url('./sunny.png') no-repeat center`,
  '--translateX': darkTheme.value ? 0 : 'translateX(24px)',
}))

/** после монтирования компонента */
onMounted(() => {
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});

/** Проверка ширины окна */
const checkWindowSize = () => {
  isTablet.value = window.innerWidth < 1400;
  isMobile.value = window.innerWidth < 800;
};
</script>

<template>
  <main class="main-layout">
    <div class="main-layout__switch-wrapper">
      <label class="main-layout__switch">
        <input
          v-model="darkTheme"
          type="checkbox"
        />
        <span
          class="main-layout__slider main-layout__round"
          :style="changeThemeStyles"
        />
      </label>
    </div>
    <div
      :data-theme="darkTheme"
      class="main-layout__body"
      :class="{ tablet: isTablet, mobile: isMobile }"
    >
      <div class="left-section">
        <about-block class="left-section_block" :user-data="userData" />
        <favorite-quote-block class="left-section_block" :quote="quote" />
        <personality-block
          class="left-section_block"
          :personality="personality"
        />
      </div>
      <div class="right-section">
        <person-description-block
          v-for="(block, index) in personDescriptionBlocks"
          :key="index"
          class="right-section_block"
          :title="block.Title"
          :text="block.Text"
          :list="block.List"
        />

        <div class="right-section_bottom">
          <personal-data-with-images-block
            v-for="(data, index) in personalDataWithImagesBlocks"
            :title="data.Title"
            :images="data.Images"
            :key="index"
            :style="{
              gridColumn:
                index == 0
                  ? 'span 2'
                  : personalDataWithImagesBlocks.length > 2
                  ? 'span 1'
                  : 'span 2',
              marginRight:
                index == 1 &&
                personalDataWithImagesBlocks.length > 2 &&
                'var(--basic-margin)',
            }"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main-layout__switch-wrapper {
  position: absolute;
  top: 32px;
  right: 32px;
}

.main-layout__switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.main-layout__switch input {
  opacity: 0;
}

.main-layout__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.main-layout__slider:before {
  position: absolute;
  content: "";
  height: 40px;
  width: 40px;
  left: 0;
  top: -3px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0 0px 15px #2020203d;
  background: var(--background);
}

.main-layout__round {
  border-radius: 34px;
}

.main-layout__round:before {
  border-radius: 50%;
}

input:focus + .main-layout__slider {
  box-shadow: 0 0 1px #2196f3;
}

.main-layout__slider:before {
  -webkit-transform: var(--translateX);
  -ms-transform: var(--translateX);
  transform: var(--translateX);
  background: var(--background);
}

.main-layout__body {
  background-color: var(--background-color);
  padding: calc(var(--double-padding) * 3) var(--double-padding)
    var(--double-padding);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
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
