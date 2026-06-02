<script setup lang="ts">
import { Message } from 'primevue'
import { format } from 'date-fns/format'

defineProps({
  dateTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <Message severity="error" size="large" class="mb-8">
    <template #icon><i class="pi pi-exclamation-circle" /></template>
    Our next meetup is at {{ location }} on
    {{ format(dateTime, "eeee, MMMM do 'at' h:mmaaa") }}
  </Message>
</template>

<style scoped></style>
