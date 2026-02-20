<script setup lang="ts">
import BlueSkyLink from '../components/BlueSkyLink.vue'
import TelegramAnnouncementsLink from '../components/TelegramAnnouncementsLink.vue'
import CodeOfConduct from '../components/CodeOfConduct.vue'
</script>

<template>
  <div class="card mb-4">
    <BlueSkyLink />
    <TelegramAnnouncementsLink />
  </div>
  <CodeOfConduct />
</template>

<style scoped>
p,
ul,
ol {
  text-align: left;
}

ol {
  list-style: decimal;
}

ul {
  list-style: disc;
}
</style>
