<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>
<template>
  <div>
    <RouterLink to="/"
      ><img src="/wcf-logo-full.svg" class="logo" alt="Windy City Furs"
    /></RouterLink>
  </div>
  <RouterView />
  <Nav />
</template>

<style scoped>
.logo {
  width: 40rem;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  margin-left: auto;
  margin-right: auto;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #0069a0aa);
}
</style>
