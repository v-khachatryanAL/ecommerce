<template>
  <div>
    <div class="relative flex items-center gap-11 sm:flex-col sm:gap-7">
      <img
        src="@/public/images/ecommerce-shadow.png"
        alt=""
        class="absolute w-full -z-10 -top-20 -right-72 sm:hidden"
      />
      <img
        src="@/public/images/ecommerce-shadow-mb1.png"
        alt=""
        class="hidden sm:block absolute -z-10 top-0 -right-28"
      />
      <img
        src="@/public/images/ecommerce-shadow-mb2.png"
        alt=""
        class="hidden sm:block absolute -z-10 top-48 -left-28"
      />

      <img
        src="@/public/images/ecommerce-bg.png"
        alt=""
        class="absolute bottom-[-190px] sm:bottom-[-100px] right-[-370px] lg:right-[-230px] -z-10 sm:-left-2"
      />
      <div class="flex flex-col gap-10 lg:gap-5 sm:gap-6 items-start sm:pt-14">
        <p
          class="font-semibold font-secondary text-2xl lg:text-xl sm:text-headerMb pb-5 lg:pb-2 sm:pb-0"
        >
          {{ productsStore.productsFeatures?.title }}
        </p>
        <p class="text-lg font-primary">
          {{ productsStore.productsFeatures?.description }}
        </p>
        <Button>{{ t('actions.learn-more') }}</Button>
      </div>
      <div class="w-full">
        <img
          v-if="!productsStore.productsFeatures?.image"
          src="@/public/images/ecommerce.png"
          alt=""
          class="w-full lg:min-w-[370px] sm:min-w-[200px]"
        />
        <img
          v-else
          :src="
            getImage(
              productsStore.productsFeatures?.image.data?.attributes?.url
            )
          "
          alt=""
          class="w-full lg:min-w-[370px] sm:min-w-[200px]"
        />
      </div>
    </div>
    <div class="flex flex-col gap-12 sm:gap-7 pt-20">
      <Product
        v-for="product in productsStore.productsData.data"
        :key="product.id"
        :data="product"
      />
    </div>
  </div>
</template>

<script setup>
import Product from '../../components/ecommerce/product.vue';
import Button from '../../components/ui/button/Button.vue';
import { useProductsStore } from '../stores/products';
import { getImage } from '~/helpers';

const { t, locale } = useI18n();

const productsStore = useProductsStore();

productsStore.getProductsFeature(locale.value);

productsStore.getProducts(locale.value);

console.log('productsStore', productsStore);

const data = [
  {
    img: 'ecommerce-product.png',
    title: '4U Rack Server',
    description: [
      '1 or 2 third-generation Intel® Xeon® Scalable processors. TDP up to 205W',
      '10 single-width, half-height PCIe expansion slots, providing rich expansion performance',
      '10 full-height, double-width high-performance GPUs for the needs of high computing power',
      '16 DDR4 memory slots, memory frequency support 2666/2933/3200MHz'
    ]
  },
  {
    img: 'ecommerce-product.png',
    title: '4U Rack Server',
    description: [
      '1 or 2 third-generation Intel® Xeon® Scalable processors. TDP up to 205W',
      '10 single-width, half-height PCIe expansion slots, providing rich expansion performance',
      '10 full-height, double-width high-performance GPUs for the needs of high computing power',
      '16 DDR4 memory slots, memory frequency support 2666/2933/3200MHz'
    ]
  },
  {
    img: 'ecommerce-product.png',
    title: '4U Rack Server',
    description: [
      '1 or 2 third-generation Intel® Xeon® Scalable processors. TDP up to 205W',
      '10 single-width, half-height PCIe expansion slots, providing rich expansion performance',
      '10 full-height, double-width high-performance GPUs for the needs of high computing power',
      '16 DDR4 memory slots, memory frequency support 2666/2933/3200MHz'
    ]
  },
  {
    img: 'ecommerce-product.png',
    title: '4U Rack Server',
    description: [
      '1 or 2 third-generation Intel® Xeon® Scalable processors. TDP up to 205W',
      '10 single-width, half-height PCIe expansion slots, providing rich expansion performance',
      '10 full-height, double-width high-performance GPUs for the needs of high computing power',
      '16 DDR4 memory slots, memory frequency support 2666/2933/3200MHz'
    ]
  },
  {
    img: 'ecommerce-product.png',
    title: '4U Rack Server',
    description: [
      '1 or 2 third-generation Intel® Xeon® Scalable processors. TDP up to 205W',
      '10 single-width, half-height PCIe expansion slots, providing rich expansion performance',
      '10 full-height, double-width high-performance GPUs for the needs of high computing power',
      '16 DDR4 memory slots, memory frequency support 2666/2933/3200MHz'
    ]
  }
];
</script>

<style scoped></style>
