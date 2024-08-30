<template>
  <footer class="font-primary text-nordbucket mt-28 lg:mt-16 sm:mt-12">
    <div class="border_top relative main">
      <div
        class="flex py-[30px] sm:py-5 pr-32 lg:pr-0 items-center lg:justify-between lg:gap-10 sm:flex-col sm:items-start sm:gap-6"
      >
        <div class="text-[14px] flex flex-col gap-[25px] mr-auto">
          <img
            src="@/public/images/footer-logo.png"
            alt="footer-logo"
            class="select-none cursor-pointer sm:w-[150px]"
          />
          <div class="flex flex-col gap-2">
            <p v-if="data?.company_name">{{ data?.company_name }}</p>
            <p v-if="data?.address">{{ data?.address }}</p>
            <p v-if="data?.country && data?.city">
              {{ data?.city }}, {{ data?.country }}
            </p>
          </div>
        </div>
        <div class="text-lg lg:text-base flex gap-[80px] sm:flex-col sm:gap-3">
          <div>
            <ul
              v-if="navigate?.footerMenuItems?.length"
              class="flex flex-col gap-[15px]"
            >
              <li
                class="select-none cursor-pointer"
                v-for="item in navigate?.footerMenuItems"
                :key="item?.id"
              >
                <router-link :to="localePath(item.url)">
                  {{ item?.name }}
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <ul
              v-if="navigate?.footerInfoItems?.length"
              class="flex flex-col gap-[15px]"
            >
              <li
                class="select-none cursor-pointer"
                v-for="item in navigate?.footerInfoItems"
                :key="item?.id"
              >
                <router-link :to="localePath(item.url)">
                  {{ item?.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden sm:flex gap-8">
          <a
            v-if="data?.linkedIn_link"
            :href="data?.linkedIn_link"
            target="_blank"
          >
            <img
              src="@/public/images/LinkedIn.svg"
              alt="LinkedIn"
              class="w-[25px]"
            />
          </a>
          <a v-if="data?.X_link" :href="data?.X_link" target="_blank">
            <img src="@/public/images/x.svg" alt="X" class="w-[25px]" />
          </a>
          <a
            v-if="data?.facebook_link"
            :href="data?.facebook_link"
            target="_blank"
          >
            <img
              src="@/public/images/facebook.svg"
              alt="Facebook"
              class="w-[25px]"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="main flex justify-between py-5">
      <div>
        <p v-if="data?.copyright" class="sm:text-sm">
          © {{ data?.copyright }}
        </p>
      </div>
      <div class="flex sm:hidden gap-10">
        <a
          v-if="data?.linkedIn_link"
          :href="data?.linkedIn_link"
          target="_blank"
        >
          <img
            src="@/public/images/LinkedIn.svg"
            alt="LinkedIn"
            class="w-[25px]"
          />
        </a>
        <a v-if="data?.X_link" :href="data?.X_link" target="_blank">
          <img src="@/public/images/x.svg" alt="X" class="w-[25px]" />
        </a>
        <a
          v-if="data?.facebook_link"
          :href="data?.facebook_link"
          target="_blank"
        >
          <img
            src="@/public/images/facebook.svg"
            alt="Facebook"
            class="w-[25px]"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useFooterDataStore } from '~/stores/footerData';
import { useNavigateStore } from '../../stores/navigate';
const navigate = useNavigateStore();
const footerDataStore = useFooterDataStore();
const data = ref(null);
const { locale } = useI18n();
footerDataStore
  .getFooterData(locale.value)
  .then((res) => (res ? (data.value = res.attributes) : ''));
</script>

<style scoped>
.border_top::before,
.border_top::after {
  content: '';
  height: 1px;
  width: 100vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    85.25deg,
    #0142a6 35.2%,
    #81b2ff 73.23%,
    #0142a6 111.26%
  );
}

.border_top::before {
  top: 0;
}

.border_top::after {
  bottom: 0;
}
</style>
