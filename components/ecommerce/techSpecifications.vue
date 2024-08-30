<template>
  <div class="pb-6">
    <img
      src="../../public/images/ecommerce-details-shadow2.png"
      alt=""
      class="absolute -z-10 -left-72 top-[600px]"
    />
    <img
      src="../../public/images/ecommerce-details-shadow2.png"
      alt=""
      class="absolute -z-10 -right-72 bottom-0"
    />
    <div
      v-for="(elm, index) in data"
      :key="index"
      class="specifications relative py-6 sm:py-5 grid grid-cols-2 sm:flex sm:flex-col gap-20 sm:gap-3 text-lg sm:text-base font-primary"
      :class="{ border_bottom: index != data.length - 1 }"
    >
      <p>{{ elm.title }}</p>
      <div>
        <p
          v-for="(text, index) in elm.description"
          :key="index"
          class="leading-[30px]"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  { title: 'Product Series', description: ['GP0110G-D04R-G3'] },
  { title: 'Product Type', description: ['4U 4-bay 10-GPU rack-mount server'] },
  { title: 'Size', description: ['790 mm * 433 mm * 176.5 mm (D * W * H)'] },
  {
    title: 'PCIe Expansion Specification',
    description: [
      'Front: 10 double-width, full-length, full-height PCIe 3.0 expansion slots',
      'Rear: 4 half-height PCIe 3.0x8 (in PCIe 3.0x16 slot) and 3 half-height PCIe 4.0x16',
      'Optional support for 2 half-height PCIe 3.0x8 (in PCIe 3.0x16 slot), 1 half-height PCIe 3.0x16, and 3 '
    ]
  }
];
</script>

<style scoped>
.specifications {
  grid-template-columns: 15% 70%;
}
.border_bottom::after {
  content: '';
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    85.25deg,
    #0142a6 35.2%,
    #81b2ff 73.23%,
    #0142a6 111.26%
  );
}

button {
  border-radius: 61px !important;
}
</style>
