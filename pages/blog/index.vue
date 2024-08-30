<template>
  <div>
    <p
      class="text-[64px] lg:text-xl sm:text-headerMb font-secondary font-semibold text-center sm:text-left pt-20 lg:pt-12"
    >
      {{ blogStore?.blogPageData?.attributes?.title }}
    </p>
    <p
      class="text-lg sm:text-base font-primary text-center sm:text-left pt-11 lg:pt-7 sm:pt-2"
    >
      {{ blogStore?.blogPageData?.attributes?.description }}
    </p>
    <div class="relative pt-20 lg:pt-12 sm:pt-7 pb-24 lg:pb-16">
      <img
        src="@/public/images/latest-articles-shadow.png"
        alt="shadow"
        class="absolute w-[1300px] h-[1050px] left-0 right-0 top-32 -z-10"
      />
      <div
        v-if="blogs[0]"
        class="rounded-[20px] bg-[#0142A633] flex items-center gap-5 lg:gap-9 sm:gap-4 lg:flex-col lg:items-start"
      >
        <div
          v-if="blogs[0]?.attributes?.cover_image?.data"
          class="lg:w-full min-w-[430px] sm:min-w-full h-[100%]"
        >
          <img
            :src="
              getImage(blogs[0]?.attributes?.cover_image?.data?.attributes.url)
            "
            alt="discover"
            class="rounded-l-[20px] min-h-[400px] lg:min-h-full lg:rounded-t-[20px] lg:rounded-b-[0px] max-w-[430px] w-full h-full lg:max-w-full lg:w-full lg:h-[300px] object-cover"
          />
        </div>

        <div
          class="flex flex-col gap-3 sm:gap-2 items-start pr-12 pl-8 lg:px-8 sm:px-4 lg:pb-8 sm:pb-5 lg:pt-0 py-5"
        >
          <div class="flex gap-2">
            <p class="tech text-xs">
              <span>{{ blogs[0]?.attributes?.tags[0]?.name }} </span>
            </p>
            <p v-if="blogs[0]?.attributes?.tags?.length > 1">
              + {{ blogs[0]?.attributes?.tags?.length - 1 }}
            </p>
          </div>
          <p
            v-if="blogs[0]?.attributes?.title"
            class="text-[32px] sm:text-[22px] font-secondary font-semibold sm:pt-1"
          >
            {{ blogs[0]?.attributes?.title }}
          </p>
          <p
            v-if="blogs[0]?.attributes?.description"
            class="leading-[26px] font font-primary text_ellipsis"
          >
            {{ blogs[0]?.attributes?.description }}
          </p>
          <div class="pt-4 sm:pt-2">
            <Button @click="localeNavigateTo(`/blog/${blogs[0]?.id}`)"
              >Read more</Button
            >
          </div>
        </div>
      </div>
      <div class="flex gap-3 sm:gap-7 pt-10 sm:flex-col">
        <div
          v-if="blogs[1]"
          class="rounded-[20px] w-[50%] sm:w-full bg-[#0142A633] flex flex-col gap-3 sm:gap-2 items-start py-14 px-10 lg:py-9 sm:py-5 lg:px-7 sm:px-4"
        >
          <div v-if="blogs[1]?.attributes?.tags[0]?.name" class="flex gap-2">
            <p class="tech text-xs">
              <span>{{ blogs[1]?.attributes?.tags[0]?.name }} </span>
            </p>
            <p v-if="blogs[1]?.attributes?.tags?.length > 1">
              + {{ blogs[1]?.attributes?.tags?.length - 1 }}
            </p>
          </div>
          <p
            v-if="blogs[1]?.attributes?.title"
            class="text-[32px] lg:text-headerMb sm:text-[22px] font-secondary font-semibold"
          >
            {{ blogs[1]?.attributes?.title }}
          </p>
          <p
            v-if="blogs[1]?.attributes?.description"
            class="leading-[26px] font font-primary mb-auto text_ellipsis"
          >
            {{ blogs[1]?.attributes?.description }}
          </p>
          <div class="pt-4 sm:pt-2">
            <Button @click="localeNavigateTo(`/blog/${blogs[1].id}`)"
              >Read more</Button
            >
          </div>
        </div>
        <div
          v-if="blogs[2]"
          class="rounded-[20px] bg-[#0142A633] w-[50%] sm:w-full flex flex-col gap-3 sm:gap-2 items-start py-14 lg:py-9 sm:py-5 px-10 lg:px-7 sm:px-4"
        >
          <div v-if="blogs[2]?.attributes?.tags[0]?.length" class="flex gap-2">
            <p class="tech text-xs">
              <span>{{ blogs[2]?.attributes?.tags[0]?.name }}</span>
            </p>
            <p v-if="blogs[2]?.attributes?.tags?.length > 1">
              + {{ blogs[2]?.attributes?.tags?.length - 1 }}
            </p>
          </div>
          <p
            v-if="blogs[2]?.attributes?.title"
            class="text-[32px] lg:text-headerMb sm:text-[22px] font-secondary font-semibold"
          >
            {{ blogs[2]?.attributes?.title }}
          </p>
          <p
            v-if="blogs[2]?.attributes?.description"
            class="leading-[26px] font font-primary mb-auto text_ellipsis"
          >
            {{ blogs[2]?.attributes?.description }}
          </p>
          <div class="pt-4 sm:pt-2">
            <Button @click="localeNavigateTo(`/blog/${blogs[2].id}`)"
              >Read more</Button
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <p
        class="text-2xl lg:text-xl sm:text-headerMb font-semibold font-secondary"
      >
        {{ blogStore?.blogPageData?.attributes?.articles_title }}
      </p>
      <div class="flex flex-col items-center gap-20 sm:hidden">
        <div
          class="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 pt-16 lg:pt-10 sm:pt-7 relative"
        >
          <LatestArticle
            v-for="data in blogs?.slice(3)"
            :key="data?.id"
            :data="data?.attributes"
            @click="localeNavigateTo(`/blog/${data.id}`)"
          />
          <img
            v-if="blogs.length > 3"
            src="@/public/images/latest-articles-shadow.png"
            alt="shadow"
            class="absolute w-[1300px] h-[1050px] -left-96 -bottom-64 -z-10"
          />
        </div>
      </div>
      <div class="relative flex-col gap-7 pt-7 hidden sm:flex">
        <LatestArticle
          v-for="(blog, index) in showAll
            ? blogs?.slice(3)
            : blogs?.slice(3, 6)"
          :key="index"
          :data="blog?.attributes"
          @click="localeNavigateTo(`/blog/${blog?.id}`)"
        />
        <img
          src="@/public/images/latest-articles-shadow.png"
          alt="shadow"
          class="absolute w-[1300px] h-[1050px] -left-96 -bottom-64 -z-10"
        />
        <Button @click="showAll = !showAll">{{
          showAll ? 'Close' : 'View more'
        }}</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../../components/ui/button/Button.vue';
import { useBlogsStore } from '~/stores/blogs';
import { useTranslation } from '~/composables/useTranslation';
import LatestArticle from '../../components/blog/latestArticle.vue';

import { getImage } from '~/helpers';
const { localeNavigateTo } = useTranslation();
const showAll = ref(false);

const blogs = ref([]);
const { locale } = useI18n();

const blogStore = useBlogsStore();
blogStore.getBlogs(locale.value).then((res) => {
  blogs.value = res;
});

blogStore.getBlogPageData(locale.value);
</script>

<style scoped>
.tech {
  position: relative;
  padding: 3px 15px;
}

.tech span {
  position: relative;
  z-index: 2;
}

.tech::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #071746;
  border-radius: 6px;
  z-index: 1;
}

.tech::after {
  content: '';
  position: absolute;
  left: -1px;
  right: -1px;
  top: -1px;
  bottom: -1px;
  z-index: -2;
  border-radius: 6px;
  background: linear-gradient(
    85.25deg,
    #0142a6 35.2%,
    #81b2ff 73.23%,
    #0142a6 111.26%
  );
}
.text_ellipsis {
  display: -webkit-box; /* Display as a flexbox with a block-like behavior */
  -webkit-line-clamp: 3; /* Limit the block to 4 lines */
  -webkit-box-orient: vertical; /* Set the box orientation to vertical */
  overflow: hidden; /* Hide any overflowing content */
  text-overflow: ellipsis; /* Show ellipsis (...) when the content overflows */
  max-height: 6em; /* (Optional) max height to match 4 lines of content */
}
</style>
