<script setup lang="ts">
import BlueSkyLink from '../components/BlueSkyLink.vue'
import TelegramAnnouncementsLink from '../components/TelegramAnnouncementsLink.vue'
import CodeOfConduct from '../components/CodeOfConduct.vue'
import NextEventBanner from '../components/NextEventBanner.vue'
</script>

<template>
  <div class="p-4">
    <div class="card mb-4">
      <img
        src="/wcf-logo-full.svg"
        class="logo max-md:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 m-auto"
        alt="Windy City Furs"
      />
      <div class="mt-4">
        <BlueSkyLink />
        <TelegramAnnouncementsLink />
      </div>
    </div>
    <NextEventBanner />
    <CodeOfConduct />
  </div>
</template>

<style scoped></style>
