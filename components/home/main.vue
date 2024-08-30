<template>
  <div class="home-page">
    <div class="home-page__main">
      <img src="@/public/images/home-bg.svg" alt="bg" class="w-full" />
    </div>
    <img
      src="@/public/images/header-shadow.svg"
      alt="Header shadow"
      class="absolute top-0 right-0 -z-10"
    />
    <div class="home-page__main__hero-section">
      <div class="home-page__main__hero-section__explore">
        <div class="home-page__main__hero-section__explore--content">
          <h1
            class="w-[90%] lg:w-full text-2xl lg:text-headerMb text-center font-secondary font-semibold"
          >
            {{ homeData?.title }}
          </h1>
          <div class="exprole-text font-primary">
            {{ homeData?.subtitle }}
          </div>
          <div class="explore-btn sm:mt-[14px]">
            <Button>{{ t('actions.learn-more') }}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from '../ui/button/Button.vue';

const { t } = useI18n();

const props = defineProps({
  homeData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.home-page {
  margin-top: 146px;
}

.home-page__main {
  width: 100%;
  position: absolute;
  top: 4%;
  right: 0;
  z-index: -10;
  opacity: 0.5;
}

.top-shadow {
  position: absolute;
  width: 766px;
  height: 766px;
  top: -46px;
  left: 932px;
  opacity: 0.5;
  z-index: -1000;
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    transparent 0%,
    #18186d 100%
  );
  border-radius: 50% / 100%;
}

.home-page__main_top {
  position: absolute;
  top: 5%;
  z-index: -10;
}

.home-page__main__hero-section__explore--content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
}

@media screen and (max-width: 640px) {
  .home-page__main__hero-section__explore--content {
    gap: 14px;
  }
}

.exprole-text {
  width: 75%;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
}

.hero-image {
  border-radius: 21px 0px 0px 0px;
}

@media (max-width: 1024px) {
  .home-page {
    margin-top: 83px;
  }

  .home-page__main {
    top: 1.5%;
  }

  .exprole-text {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
