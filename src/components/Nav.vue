<script setup lang="ts">
import Button from "../volt/Button.vue";
</script>

<template>
  <nav class="mb-4">
    <Button size="small" text><RouterLink to="/">Home</RouterLink></Button>
    <Button size="small" text
      ><RouterLink to="/events">Events</RouterLink></Button
    >
  </nav>
</template>

<style scoped></style>
