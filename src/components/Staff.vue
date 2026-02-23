<script setup lang="ts">
import { Card } from 'primevue'
</script>

<template>
  <div class="p-4">
    <h1>Staff</h1>
    <Card style="width: 15rem; overflow: hidden">
      <template #header>
        <img alt="user header" src="/clicky.png" />
      </template>
      <template #title>Clicky Coyote</template>
      <template #subtitle>Group Owner / Admin</template>
      <template #content>
        <p class="m-0"></p>
      </template>
      <!--      <template #footer></template>-->
    </Card>
  </div>
</template>

<style scoped></style>
