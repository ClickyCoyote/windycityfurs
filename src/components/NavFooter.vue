<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <nav>
    <Button size="small" text><RouterLink to="/">Home</RouterLink></Button>
    <Button size="small" text
      ><RouterLink to="/code-of-conduct">Code of Conduct</RouterLink></Button
    >
    <Button size="small" text
      ><RouterLink to="/events">Events</RouterLink></Button
    >
    <Button size="small" text
      ><RouterLink to="/staff">Staff</RouterLink></Button
    >
  </nav>
</template>

<style scoped></style>
