<script setup lang="ts">
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>

<template>
  <ExternalLinkButton
    url="https://t.me/WindyCityFurs"
    label="Announcements Channel"
  >
    <template #icon>
      <img src="../assets/telegram-logo.png" alt="telegram logo" class="h-8" />
    </template>
  </ExternalLinkButton>
</template>

<style scoped></style>
