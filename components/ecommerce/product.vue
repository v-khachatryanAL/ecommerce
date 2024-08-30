<template>
  <div
    class="max-h-[451px] py-[60px] pr-12 pl-8 gap-16 sm:gap-6 bg-[#0142A633] rounded-[20px] flex justify-start items-center lg:flex-col sm:py-5 sm:px-4"
  >
    <div class="w-1/3">
      <NuxtImg
        :src="data.thumbnail"
        alt="product-image"
        class="w-full sm:max-w-60 object-contain sm:h-auto"
      />
    </div>
    <div>
      <p
        class="text-l sm:text-lg font-semibold text-nordbucket pb-4 font-secondary"
      >
        {{ data?.title }}
      </p>
      <ul
        v-if="data?.description_options"
        class="flex flex-col gap-4 list-disc pl-5 font-primary"
      >
        <li v-for="desc in data?.description_options" :key="desc.id">
          {{ desc.text }}
        </li>
      </ul>
      <NuxtLink :to="localePath(`/ecommerce/${data.id}`)">
        <Button class="mt-8 sm:w-full">{{ t('actions.details') }}</Button>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import Button from '../ui/button/Button.vue';
const { t } = useI18n();

const props = defineProps({
  data: Object
});

console.log('props', props.data);
</script>

<style scoped></style>
