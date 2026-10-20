<script setup lang="ts">
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>

<template>
  <ExternalLinkButton
    url="https://bsky.app/profile/windycityfurs.org"
    label="BlueSky"
  >
    <template #icon>
      <img class="h-8" src="/bsky.png" alt="BlueSky"></img>
    </template>
  </ExternalLinkButton>
</template>

<style scoped></style>
