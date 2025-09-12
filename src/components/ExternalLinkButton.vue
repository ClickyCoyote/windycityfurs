<script setup lang="ts">
import Button from '../volt/Button.vue'

defineProps<{ url: string; label: string }>()
</script>

<template>
  <a v-bind:href="url">
    <Button
      rounded
      raised
      icon=""
      label="BlueSky"
      size="medium"
      class="text-sky-900 bg-sky-100 dark:text-sky-100 dark:bg-sky-900 hover:bg-sky-200 border-sky-900 m-1"
    >
      <slot name="icon"></slot>
      {{ label }}</Button
    >
  </a>
</template>

<style scoped></style>
