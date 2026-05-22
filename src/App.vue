<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavFooter from './components/NavFooter.vue'
import NavHeader from './components/NavHeader.vue'
</script>
<template>
  <nav class="fixed w-full z-50">
    <NavHeader />
  </nav>
  <div class="mt-14 min-xl:mx-48">
    <RouterView />
  </div>
  <NavFooter />
</template>

<style>
#app {
  padding: 0;
}
</style>
