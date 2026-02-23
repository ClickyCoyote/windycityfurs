<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavFooter from './components/NavFooter.vue'
import NavHeader from './components/NavHeader.vue'
</script>
<template>
  <NavHeader />
  <div class="mt-14">
    <RouterView />
  </div>
  <NavFooter />
</template>

<style>
#app {
  padding: 0;
}

.p-menubar {
  border: 0 !important;
  border-radius: 0 !important;
}
</style>
