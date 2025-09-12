<script setup lang="ts">
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>

<template>
  <ExternalLinkButton
    url="https://bsky.app/profile/windycityfurs.com"
    label="BlueSky"
  >
    <template #icon>
      <img src="../assets/bsky-logo.png" alt="bsky logo" class="h-8" />
    </template>
  </ExternalLinkButton>
</template>

<style scoped></style>
