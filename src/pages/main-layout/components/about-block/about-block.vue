<script setup lang="ts">
import {UserModel} from "@/pages";
import {computed, PropType, ref} from "vue";

/**
 * Входящт е пропсы
 */
const props =  defineProps({
  userData: {
    type: Object as PropType<UserModel>
  }
})

/**
 * Полное имя пользвателя
 */
const userFullName = computed(() => {
  if (props.userData?.Name ){
    return props.userData.Name + ' ' +  props.userData?.Surname
  } else {
    return props.userData?.Surname
  }
})
/**
 * Данные по пользователю кроме имени и фото
 */
const userInformation = ['Age', 'Education', 'Status', 'Occupation', 'Location', 'TechLiterate']
</script>

<template>
  <div class="about">
    <div class="about_name" v-if="userFullName">{{ userFullName}}</div>
    <div class="about_photo" v-if="userData.ImageUrl">
       <img class="about_photo-image" :src="userData.ImageUrl" alt="user photo"/>
    </div>
    <div class="about_information" v-for="info in userInformation">
      <div class="about_information-title"> {{ info == 'TechLiterate' ? 'Tech Literate' : info}}</div>
      <div class="about_information-data"> {{ userData[info] }} </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  padding: calc(var(--basic-padding)*1.5) var(--basic-padding);
  background-color: var(--background-color-block);
  border-radius: var(--border-radius-block);
  max-width: 619px;
}

.about_name {
  color: var(--accent-color);
  text-align: center;
  font-size: var(--font-size-48);
  font-weight: var(--fw-extraBold);
  font-family: var(--ff-extra-bold);
  margin-bottom: var(--basic-margin);
}

.about_photo {
  width: 409px;
  height: 409px;
  margin: 0 auto var(--basic-margin);

  &-image {
    width: 409px;
    height: 409px;
    object-fit: cover;
    border-radius: 100%;
  }
}

.about_information {
  display: flex;
  align-items: center;
  margin-bottom: var(--half-margin);
  font-size: var(--font-size-24);
  padding: 0 var(--basic-padding);

  &:last-of-type {
    margin-bottom: 0;
  }

  &-title {
    flex: 0 0 38%;
    font-weight: var(--fw-semiBold);
    font-family: var(--ff-semi-bold);
    color: var(--font-color-leight);
    text-transform: uppercase;
  }

  &-data {
    flex: 0 0 auto;
    font-weight: var(--fw-medium);
    font-family: var(--ff-medium);
    color: var(--font-color);
    font-size: var(--font-size-32);
  }
}

.tablet {
  .about {
    max-width: 100%;
  }

  .about_information {
    margin: 0 auto var(--half-margin);
  }
}

.mobile {
  .about_name {
    font-size: var(--font-size-32);
  }

  .about_photo {
    width: 259px;
    height: 259px;

    &-image {
      width: 259px;
      height: 259px;
    }
  }

  .about_information {
    display: block;
    font-size: var(--font-size-16);

    &-title {
      margin-bottom: var(--half-margin);
    }

    &-data {
      margin-bottom: var(--basic-margin);
      font-size: var(--font-size-24);
  }
  }
}
</style>
