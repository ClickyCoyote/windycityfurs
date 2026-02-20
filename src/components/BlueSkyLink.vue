<script setup lang="ts">
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>

<template>
  <ExternalLinkButton
    url="https://bsky.app/profile/windycityfurs.com"
    label="BlueSky"
  >
    <template #icon>
      <i class="pi pi-at h-8 font-medium" style="font-size: 2rem"></i>
    </template>
  </ExternalLinkButton>
</template>

<style scoped></style>
