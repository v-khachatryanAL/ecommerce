<template>
  <div class="home-page__wrapper">
    <HomeMain
      :home-data="homeDataStore?.homeData?.attributes?.top_section"
    ></HomeMain>
    <HomeAbout
      :home-data="homeDataStore?.homeData?.attributes?.about_us"
    ></HomeAbout>
    <HomeIndustries
      :home-data="homeDataStore?.homeData?.attributes"
    ></HomeIndustries>
    <HomeArticles
      :home-data="homeDataStore?.homeData?.attributes"
    ></HomeArticles>
    <ContactUs
      :text="homeDataStore?.homeData?.attributes?.contact_us?.content"
    />
  </div>
</template>

<script setup>
import HomeMain from '../components/home/main.vue';
import HomeAbout from '../components/home/about.vue';
import HomeIndustries from '../components/home/industries.vue';
import HomeArticles from '../components/home/articles.vue';
import ContactUs from '~/components/contactUs.vue';

import { useHomeDataStore } from '../stores/homeData';

const { locale } = useI18n();
const homeDataStore = useHomeDataStore();

homeDataStore.getHomeData(locale.value);
</script>

<style scoped>
.home-page__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 160px;
}

@media (max-width: 1024px) {
  .home-page__wrapper {
    row-gap: 60px;
  }
}
</style>
