<script setup lang="ts">
import BlueSkyLink from '../components/BlueSkyLink.vue'
import TelegramAnnouncementsLink from '../components/TelegramAnnouncementsLink.vue'
import CodeOfConduct from '../components/CodeOfConduct.vue'
</script>

<template>
  <div class="card mb-4">
    <img
      src="/wcf-logo-full.svg"
      class="logo w-9/12 m-auto"
      alt="Windy City Furs"
    />
    <BlueSkyLink />
    <TelegramAnnouncementsLink />
  </div>
  <CodeOfConduct />
</template>

<style scoped></style>
