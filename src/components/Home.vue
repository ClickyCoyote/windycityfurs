<script setup lang="ts">
import BlueSkyLink from '../components/BlueSkyLink.vue'
import TelegramAnnouncementsLink from '../components/TelegramAnnouncementsLink.vue'
import CodeOfConduct from '../components/CodeOfConduct.vue'
import { Message } from 'primevue'
</script>

<template>
  <div class="p-4">
    <div class="card mb-4">
      <img
        src="/wcf-logo-full.svg"
        class="logo w-9/12 m-auto max-h-96"
        alt="Windy City Furs"
      />
      <div class="mt-4">
        <BlueSkyLink />
        <TelegramAnnouncementsLink />
      </div>
    </div>
    <Message severity="info" size="large" class="mb-8">
      <template #icon><i class="pi pi-exclamation-circle" /></template>
      Our next meetup is at Logan Arcade on Sunday, June 21st at 3:00pm
    </Message>
    <CodeOfConduct />
  </div>
</template>

<style scoped></style>
