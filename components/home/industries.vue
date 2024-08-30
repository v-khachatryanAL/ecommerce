<template>
  <div class="home-industries" v-if="homeData?.industries.length">
    <div
      class="text-xl lg:text-headerMb font-semibold test-center text-secondary"
    >
      {{ homeData?.industriesTitle }}
    </div>
    <div class="shadow -z-10">
      <img
        src="@/public/images/industries-shadow.svg"
        alt="Shadow"
        class="sm:hidden"
      />
      <img
        src="@/public/images/industries-shadow-mb.svg"
        alt="Shadow"
        class="hidden sm:block w-full"
      />
    </div>
    <Carousel
      class="relative w-full min-w-sm"
      :opts="{
        align: 'start'
      }"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(industry, index) in homeData?.industries"
          :key="index"
          class="basis-1/3 sm:basis-full lg:basis-1/2"
        >
          <div class="p-1">
            <IndustryCard :industry="industry"></IndustryCard>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<script setup>
import IndustryCard from '../components/cart/industry.vue';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const props = defineProps({
  homeData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.home-industries {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.shadow {
  position: absolute;
  top: -155px;
}

@media (max-width: 640px) {
  .home-industries {
    gap: 16px;
  }

  .shadow {
    top: -54%;
    height: 100%;
    width: 100vw;
  }
}
</style>
