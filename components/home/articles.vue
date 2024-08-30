<template>
  <div
    v-if="homeData?.articles.length"
    class="articles flex flex-col gap-5 items-center justify-center"
  >
    <div class="text-base mb-1.5 lg:font-medium font-secondary">
      {{ homeData?.articlesSubtitle }}
    </div>
    <div
      class="text-xl lg:text-headerMb px-28 lg:px-0 text-center font-secondary font-semibold"
    >
      {{ homeData?.articlesTitle }}
    </div>
    <div
      class="grid grid-cols-5 lg:flex lg:flex-col grid-rows-3 grid-flow-row gap-5 mt-5"
    >
      <cardWithImage
        :article="homeData?.articles[0]"
        class="card-border col-span-3 lg:col-span-1 row-span-2 lg:row-span-1 justify-end"
        :gradient="true"
      ></cardWithImage>
      <cardWithImage
        :article="homeData?.articles[1]"
        class="card-border col-span-2 lg:col-span-1 row-span-1"
      ></cardWithImage>
      <cardWithImage
        :article="homeData?.articles[2]"
        class="card-border col-span-2 lg:col-span-1 row-span-1"
      ></cardWithImage>
      <cardWithImage
        :article="homeData?.articles[3]"
        class="card-border col-span-2 lg:col-span-1 row-span-1"
      ></cardWithImage>
      <cardWithImage
        :article="homeData?.articles[4]"
        class="card-border col-span-3 lg:col-span-1 row-span-1"
      ></cardWithImage>
    </div>
  </div>
</template>

<script setup>
import cardWithImage from '../components/cart/cardWithImage.vue';

const props = defineProps({
  homeData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.card-border {
  border-radius: 7px;
  position: relative;
  padding: 1.5px;
  background: linear-gradient(
    85.25deg,
    rgba(145, 40, 30, 0) 35.2%,
    #91281e 73.23%,
    #91281e 111.26%
  );
}
</style>
