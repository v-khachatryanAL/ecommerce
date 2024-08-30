<template>
  <div
    class="home-about w-full flex flex-row lg:flex-col-reverse items-center lg:items-start gap-6"
  >
    <div class="home-about__content w-7/12 lg:w-full flex flex-col">
      <div class="text-base lg:text-lg mb-1.5 font-secondary">
        {{ homeData?.subtitle }}
      </div>
      <div
        class="text-xl lg:text-headerMb mb-16 lg:mb-4 font-secondary font-semibold"
      >
        {{ homeData?.title }}
      </div>
      <div
        class="flex flex-col gap-7 lg:gap-4 font-primary leading-8 mb-16 lg:mb-5"
      >
        <div v-for="desc in homeData?.description" :key="desc?.id">
          {{ desc?.paragraph }}
        </div>
      </div>
      <div class="explore-btn w-1/3 lg:w-[45%]">
        <Button>{{ t('actions.learn-more') }}</Button>
      </div>
    </div>
    <div class="hero-image" v-if="homeData?.image">
      <img
        :src="getImage(homeData?.image?.data?.attributes?.url)"
        alt="Nordbucket"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
import Button from '../ui/button/Button.vue';
import { getImage } from '~/helpers';

const { t } = useI18n();

const props = defineProps({
  homeData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped></style>
