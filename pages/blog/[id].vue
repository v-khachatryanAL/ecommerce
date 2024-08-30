<template>
  <div v-if="blog">
    <div
      class="flex flex-col justify-center items-center sm:items-start gap-5 pt-12"
    >
      <div class="flex gap-6 sm:justify-between sm:w-full">
        <p>{{ formattedDate(blog?.createdAt) }}</p>
        <div v-if="blog?.tags?.length" class="flex gap-2 items-center">
          <p class="tech text-xs">
            <span>{{ blog?.tags[0]?.name }} </span>
          </p>
          <p v-if="blog?.tags?.length > 1">+ {{ blog?.tags?.length - 1 }}</p>
        </div>
      </div>
      <p
        v-if="blog?.title"
        class="text-2xl lg:text-xl sm:text-headerMb font-semibold font-secondary text-center sm:text-left"
      >
        {{ blog?.title }}
      </p>
      <p
        v-if="blog?.description"
        class="font-primary text-center sm:text-left pt-5 lg:pt-2 px-40 lg:px-28 sm:px-0 sm:pt-0"
      >
        {{ blog?.description }}
      </p>
      <NuxtImg
        v-if="blog?.cover_image?.data"
        :src="getImage(blog?.cover_image?.data?.attributes?.url)"
        alt=""
        class="w-full h-[450px] object-cover rounded-[20px] mt-20 lg:mt-9 sm:mt-7"
      />
    </div>
    <div class="px-40 lg:px-20 sm:px-8 pt-20 lg:pt-14 sm:pt-10">
      <BlogRenderer v-if="blog?.about_blog" :text="blog?.about_blog" />
    </div>
    <div class="pt-40 sm:pt-16">
      <div class="flex justify-between items-start">
        <p
          class="text-2xl lg:text-xl sm:text-headerMb font-semibold font-secondary"
        >
          {{ blogStore?.blogPageData?.attributes?.articles_title }}
        </p>
        <Button @click="localeNavigateTo('/blog')">Browse all posts</Button>
      </div>
      <div
        v-if="blogs?.length"
        class="pt-14 sm:pt-7 grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8"
      >
        <LatestArticle
          v-for="data in blogs?.slice(0, 3)"
          :key="data?.id"
          :data="data?.attributes"
          @click="localeNavigateTo(`/blog/${data?.id}`)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../../components/ui/button/Button.vue';
import LatestArticle from '../../components/blog/latestArticle.vue';
import { useBlogsStore } from '~/stores/blogs';
import { useRoute } from 'vue-router';
import { formattedDate, getImage } from '~/helpers';
import { useTranslation } from '~/composables/useTranslation';
import BlogRenderer from '~/components/blog/blogRenderer.vue';
const { localeNavigateTo } = useTranslation();
const blog = ref(null);
const blogs = ref([]);
const route = useRoute();
const id = route.params.id;
const { locale } = useI18n();
const blogStore = useBlogsStore();
blogStore.getBlogs(locale.value).then((res) => {
  blogs.value = res;
});

blogStore
  .getBlogById(locale.value, +id)
  .then((data) => (blog.value = data.attributes));
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
  background-color: #030817;
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
</style>
