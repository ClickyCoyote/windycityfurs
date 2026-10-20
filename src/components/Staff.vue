<script setup lang="ts">
import { Card } from 'primevue'
</script>

<template>
  <h1>Staff</h1>
  <Card style="width: 15rem; overflow: hidden">
    <template #header>
      <a href="https://coyote.fm" target="_blank">
        <img alt="user header" src="/clicky.png" />
      </a>
    </template>
    <template #title><a href="https://coyote.fm" target="_blank">Clicky Coyote</a></template>
    <template #subtitle>Group Owner / Admin</template>
    <template #content>
      <p class="m-0"></p>
    </template>
    <!--      <template #footer></template>-->
  </Card>
</template>

<style scoped></style>
