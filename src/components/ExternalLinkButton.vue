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
      class="bg-primary text-primary border-primary-emphasis-alt m-1"
    >
      <slot name="icon"></slot>
      {{ label }}</Button
    >
  </a>
</template>

<style scoped></style>
