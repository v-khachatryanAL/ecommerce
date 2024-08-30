<template>
  <div class="pt-20 lg:pt-10 sm:pt-5 pb-28 lg:pb-10">
    <div>
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
      <p class="text-[32px] sm:text-[24px] font-semibold font-secondary">
        4U Rack Server
      </p>
      <p class="font-primary pt-5 pb-16 sm:pb-8">
        GP0110G-D04R-G3 dual-socket GPU server supports 1 or 2 third-generation
        Intel® Xeon® Scalable processors, 16 DIMM DDR4 memory slots,
        integrated 1 M.2 interface, 2 Gigabit Ethernet ports, 1 RJ45 management
        network port, supports 10 double-width, full-height,
        full-lengthGPUslotsand 10 single-width, half-height PCIe expansion
        slots, which can be applied to big data analysis, 3d Graphics
        applications, video decoding, deep learning, scientific computing and
        other applications.
      </p>
      <img src="@/public/images/features.png" alt="" />
    </div>
    <div class="pt-24 sm:pt-8 flex flex-col gap-20 lg:gap-12">
      <ImageText
        v-for="(elm, index) in data"
        :key="index"
        :data="elm"
        :imgFirst="index % 2 == 0 ? true : false"
      />
    </div>
  </div>
</template>

<script setup>
import ImageText from '../imageText.vue';
const data = [
  {
    title: 'Lorem Ipsum Dolor',
    description: [
      {
        paragraph:
          'Lorem ipsum dolor sit amet consectetur. Eu ultricies tincidunt amet pharetra dui sollicitudin. Consequat gravida laoreet donec tincidunt sed ornare tristique eget. Viverra euismod fringilla diam enim tortor faucibus felis ornare ullamcorper. Augue a fermentum enim feugiat volutpat tristique mi. Urna enim porttitor nunc sit in commodo vulputate cras aliquet. Risus adipiscing id morbi quis phasellus sapien tempor vitae sem.'
      }
    ],
    img: 'features-server.png'
  },
  {
    title: 'Lorem Ipsum Dolor',
    description: [
      {
        paragraph:
          'Lorem ipsum dolor sit amet consectetur. Eu ultricies tincidunt amet pharetra dui sollicitudin. Consequat gravida laoreet donec tincidunt sed ornare tristique eget. Viverra euismod fringilla diam enim tortor faucibus felis ornare ullamcorper. Augue a fermentum enim feugiat volutpat tristique mi. Urna enim porttitor nunc sit in commodo vulputate cras aliquet. Risus adipiscing id morbi quis phasellus sapien tempor vitae sem.'
      }
    ],
    img: 'features-server.png'
  },
  {
    title: 'Lorem Ipsum Dolor',
    description: [
      {
        paragraph:
          'Lorem ipsum dolor sit amet consectetur. Eu ultricies tincidunt amet pharetra dui sollicitudin. Consequat gravida laoreet donec tincidunt sed ornare tristique eget. Viverra euismod fringilla diam enim tortor faucibus felis ornare ullamcorper. Augue a fermentum enim feugiat volutpat tristique mi. Urna enim porttitor nunc sit in commodo vulputate cras aliquet. Risus adipiscing id morbi quis phasellus sapien tempor vitae sem.'
      }
    ],
    img: 'features-server.png'
  }
];
</script>
