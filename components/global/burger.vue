<template>
  <div>
    <img
      v-if="!modelValue"
      src="@/public/images/burger.png"
      alt="burger-menu"
      class="cursor-pointer"
      @click="toggleMenu"
    />
    <img
      v-else
      src="../../public/images/close.svg"
      alt="close-icon"
      @click="toggleMenu"
      class="cursor-pointer"
    />
  </div>
  <div>
    <div
      v-if="modelValue"
      class="absolute z-100 top-[87px] sm:top-[70px] left-0 bg-[#030819] w-full h-[800px]"
    >
      <div
        class="flex flex-col justify-center items-center gap-16 pt-10 text-lg"
      >
        <ul class="flex flex-col gap-8">
          <li
            class="select-none cursor-pointer font-primary text-nordbucket text-center"
            v-for="item in links"
            :key="item.id"
          >
            <router-link :to="localePath(item.url)" @click="toggleMenu">
              {{ t(`menu.${item.name}`) }}
            </router-link>
          </li>
        </ul>
        <div class="flex justify-between w-full p-5 border_top relative gap-3">
          <p
            v-for="(language, index) in languages"
            :key="index"
            class="cursor-pointer text-[#3B3F4C] select-none"
            :class="{ '!text-[#fff]': lang == language.value }"
            @click="setLocale(language.value)"
          >
            {{ language.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: Boolean,
  links: Array,
  languages: Array
});
const toggleMenu = () => {
  emit('update:modelValue', !props.modelValue);
};
const { t, locale, setLocale } = useI18n();

const lang = computed(() => {
  return locale.value;
});
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
