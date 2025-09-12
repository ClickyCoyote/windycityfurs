<script setup lang="ts">
import Home from "./components/Home.vue";
</script>

<template>
  <div>
    <img src="/wcf-logo-full.svg" class="logo" alt="Windy City Furs" />
  </div>
  <Home />
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
