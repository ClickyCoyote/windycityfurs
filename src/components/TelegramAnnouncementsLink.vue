<script setup lang="ts">
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>

<template>
  <ExternalLinkButton
    url="https://t.me/WindyCityFurs"
    label="Announcements Channel"
  >
    <template #icon>
      <i class="pi pi-telegram h-8 font-medium" style="font-size: 2rem"></i>
    </template>
  </ExternalLinkButton>
</template>

<style scoped></style>
