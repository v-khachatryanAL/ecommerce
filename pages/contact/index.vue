<template>
  <div class="contact-wrapper">
    <ContactMain></ContactMain>
    <div class="absolute top-[-25%] lg:top-0 -z-10">
      <img src="@/public/images/contact-shadow.svg" alt="Shadow" />
    </div>
  </div>
</template>

<script setup>
import ContactMain from '../../components/contact/main.vue';
</script>

<style scoped>
.contact-wrapper {
  background: #0142a633;
  border-radius: 20px;
  padding: 41px 65px;
  margin-top: 140px;
  position: relative;
}
@media (max-width: 1024px) {
  .contact-wrapper {
    padding: 30px;
    margin-top: 80px;
  }
}
@media (max-width: 640px) {
  .contact-wrapper {
    padding: 20px 16px;
  }
}
</style>
