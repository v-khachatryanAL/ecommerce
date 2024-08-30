<template>
  <header :class="{ openBurger: showBurgerMenu }">
    <div class="flex items-center justify-between py-6">
      <div class="hidden lg:block">
        <Burger
          v-model="showBurgerMenu"
          :links="navigate.headerMenuItems"
          :languages="languages"
        />
      </div>
      <div>
        <router-link :to="localePath('/')">
          <img
            src="/public/images/header-logo.png"
            alt="header-logo"
            class="lg:w-[180px] cursor-pointer sm:hidden min-w-[170px] lg:min-w-auto"
          />
          <img
            src="/public/images/header-logo-mb.png"
            alt="header-logo"
            class="cursor-pointer hidden sm:block"
          />
        </router-link>
      </div>
      <div class="lg:hidden mx-2">
        <ul class="flex gap-[21px] text-[14px]">
          <li
            class="select-none cursor-pointer font-primary text-nordbucket"
            v-for="item in navigate.headerMenuItems"
            :key="item.id"
          >
            <router-link :to="localePath(item.url)">
              {{ t(`menu.${item.name}`) }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex gap-5 sm:gap-0">
        <DropdownMenu class="">
          <DropdownMenuTrigger
            ><img
              src="@/public/images/globe.svg"
              alt="globe"
              class="lg:hidden w-6 min-w-6"
          /></DropdownMenuTrigger>
          <DropdownMenuContent
            class="bg-[#03081799] text-[#2C347C] border-0 rounded-lg p-4"
          >
            <DropdownMenuItem
              v-for="(language, index) in languages"
              :key="index"
              @click="setLocale(language.value)"
              class="cursor-pointer"
              ><p
                :class="{ 'text-[#fff]': lang == language.value }"
                class="text-lg"
              >
                {{ language.label }}
              </p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button @click="localeNavigateTo('/contact')">{{
          t('actions.contact')
        }}</Button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useNavigateStore } from '../../stores/navigate';
import Button from '../ui/button/Button.vue';
import Burger from './burger.vue';
import { useTranslation } from '~/composables/useTranslation';
import { useI18n } from 'vue-i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { computed } from 'vue';
const navigate = useNavigateStore();
const localePath = useLocalePath();
const showBurgerMenu = ref(false);
const languages = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
  { value: 'de', label: 'Duetsch' }
];
const { localeNavigateTo } = useTranslation();

const { t, locale, setLocale } = useI18n();

const lang = computed(() => {
  return locale.value;
});
</script>

<style scoped>
.openBurger {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  z-index: 100;
}
@media (max-width: 1024px) {
  .openBurger {
    background: #030819;
  }
}
</style>
