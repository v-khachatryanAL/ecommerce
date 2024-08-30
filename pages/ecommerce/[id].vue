<template>
  <div class="pt-28">
    <div class="relative flex gap-7 lg:flex-col">
      <img
        src="@/public/images/ecommerce-details-shadow.png"
        alt=""
        class="absolute -z-10 right-[-350px] -top-64"
      />
      <div class="shrink-0 mt-14">
        <NuxtImg
          :src="`/images/${chosenImage}`"
          class="w-[550px] h-[280px] sm:w-[390px] sm:h-[190px]"
        />
        <div
          class="grid grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 items-center justify-items-center mt-3"
        >
          <div
            v-for="img in images"
            :class="{ chosenImage: img == chosenImage }"
          >
            <NuxtImg
              :src="`/images/${img}`"
              class="w-32 h-20 cursor-pointer"
              @click="changeChosenImage(img)"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 pt-3">
        <p class="text-xl font-semibold font-secondary sm:text-headerMb">
          4U Rack Server
        </p>
        <p class="font-primary">
          GP0110G-D04R-G3 dual-socket GPU server supports 1 or 2
          third-generation Intel® Xeon® Scalable processors, 16 DIMM DDR4
          memory slots, integrated 1 M.2 interface, 2 Gigabit Ethernet ports, 1
          RJ45 management network port, supports 10 double-width, full-height,
          full-lengthGPUslotsand 10 single-width, half-height PCIe expansion
          slots, which can be applied to big data analysis, 3d Graphics
          applications, video decoding, deep learning, scientific computing and
          other applications.
        </p>
        <ul class="font-primary list-disc pl-5 flex flex-col gap-6">
          <li class="">
            1 or 2 third-generation Intel® Xeon® Scalable processors. TDP up
            to 205W
          </li>
          <li>
            10 single-width, half-height PCIe expansion slots, providing rich
            expansion performance
          </li>
          <li>
            10 full-height, double-width high-performance GPUs for the needs of
            high computing power
          </li>
          <li>
            16 DDR4 memory slots, memory frequency support 2666/2933/3200MHz
          </li>
        </ul>
        <div class="flex gap-12 pt-5">
          <p class="font-semibold font-primary text-headerMb sm:text-[26px]">
            $0.0
          </p>
          <Button>Buy now</Button>
        </div>
      </div>
    </div>
    <div
      class="bg-[#0142A633] rounded-[20px] px-9 sm:px-4 pt-6 mt-44 lg:mt-24 sm:mt-12"
    >
      <Tabs default-value="Features">
        <TabsList
          class="tabs text-l lg:text-lg font-secondary font-semibold flex justify-between gap-6 px-24 lg:px-12 sm:px-3 pb-5"
        >
          <TabsTrigger
            value="Features"
            class="px-4"
            @click="changeActiveTab('Features')"
            :class="{ active: activeTab == 'Features' }"
          >
            Features
          </TabsTrigger>
          <TabsTrigger
            value="Tech Specifications"
            class="px-4"
            :class="{ active: activeTab == 'Tech Specifications' }"
            @click="changeActiveTab('Tech Specifications')"
          >
            Tech Specifications</TabsTrigger
          >
          <TabsTrigger
            value="Resources"
            class="px-4"
            :class="{ active: activeTab == 'Resources' }"
            @click="changeActiveTab('Resources')"
          >
            Resources</TabsTrigger
          >
        </TabsList>
        <TabsContent value="Features"> <Features /> </TabsContent>
        <TabsContent value="Tech Specifications">
          <TechSpecifications />
        </TabsContent>
        <TabsContent value="Resources"> <Resources /> </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Features from '~/components/ecommerce/features.vue';
import Resources from '~/components/ecommerce/resources.vue';
import TechSpecifications from '~/components/ecommerce/techSpecifications.vue';
import Button from '~/components/ui/button/Button.vue';
const images = ['product-details.png', 'product-details2.png'];
const activeTab = ref('Features');
const changeActiveTab = (tab) => {
  activeTab.value = tab;
};
const chosenImage = ref('product-details.png');
const changeChosenImage = (img) => {
  chosenImage.value = img;
};

import { useProductsStore } from '../stores/products';
const { t, locale } = useI18n();

const productsStore = useProductsStore();
const route = useRoute();

productsStore.getProductById(route.params.id, locale.value);

console.log('productData', productsStore.productData);
</script>

<style scoped>
.chosenImage {
  padding: 32px 4px;
  background: radial-gradient(
    121.49% 277.08% at 0% 0%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 6px;
}
@media screen and (max-width: 640px) {
  .chosenImage {
    padding: 28px 4px;
    border-radius: 6px;
  }
}
.tabs {
  position: relative;
}
.tabs::after {
  content: '';
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  background: linear-gradient(
    85.25deg,
    #0142a6 35.2%,
    #81b2ff 73.23%,
    #0142a6 111.26%
  );
}
.active {
  position: relative;
}
.active::after {
  content: '';
  height: 4px;
  width: 100%;
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  background: linear-gradient(
    85.25deg,
    #0142a6 35.2%,
    #81b2ff 73.23%,
    #0142a6 111.26%
  );
}
@media screen and (max-width: 640px) {
  .tabs {
    max-width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  .tabs::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .tabs::after {
    width: 545px;
  }
}
</style>
