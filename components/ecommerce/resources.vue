<template>
  <div class="pb-4">
    <img
      src="../../public/images/ecommerce-details-shadow2.png"
      alt=""
      class="absolute -z-10 -left-72 top-[600px]"
    />
    <p
      class="text-[32px] sm:text-[24px] font-semibold font-secondary py-10 sm:py-6"
    >
      Manual & Documentation
    </p>
    <div
      v-for="(elm, index) in data"
      :key="index"
      class="border_top relative flex items-center justify-between py-4 pl-5 sm:pl-0 pr-14 sm:pr-4 gap-6 lg:gap-12 sm:flex-col sm:items-start sm:gap-5"
    >
      <div class="flex items-center gap-6 sm:gap-4">
        <NuxtImg :src="`/images/${elm.fileType}`" class="w-6 h-6" />
        <p class="text-lg sm:text-base">{{ elm.fileName }}</p>
      </div>

      <p class="sm:text-sm">{{ elm.description }}</p>
      <Button class="rounded-[61px] download">Download</Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../ui/button/Button.vue';

const data = [
  {
    fileType: 'doc.png',
    fileName: 'Lorem Ipsum.doc',
    description:
      'Figma ipsum component variant main layer. Text content create.'
  },
  {
    fileType: 'doc.png',
    fileName: 'Lorem Ipsum.doc',
    description:
      'Figma ipsum component variant main layer. Text content create.'
  },
  {
    fileType: 'doc.png',
    fileName: 'Lorem Ipsum.doc',
    description:
      'Figma ipsum component variant main layer. Text content create.'
  },
  {
    fileType: 'doc.png',
    fileName: 'Lorem Ipsum.doc',
    description:
      'Figma ipsum component variant main layer. Text content create.'
  },
  {
    fileType: 'doc.png',
    fileName: 'Lorem Ipsum.doc',
    description:
      'Figma ipsum component variant main layer. Text content create.'
  }
];
</script>

<style scoped>
.border_top::after {
  content: '';
  height: 1px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    85.25deg,
    #0142a6 35.2%,
    #81b2ff 73.23%,
    #0142a6 111.26%
  );
}
.download::after {
  border-radius: 61px;
}
</style>
