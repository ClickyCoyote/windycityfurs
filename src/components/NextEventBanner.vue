<script setup lang="ts">
import { Message } from 'primevue'
import { format } from 'date-fns/format'
import { onMounted, ref } from 'vue'
import type { CalendarEvent } from '../types.ts'

const NEXT_EVENT_URI = `${import.meta.env.VITE_API_BASE_URI}${import.meta.env.VITE_NEXT_EVENT_URI}`

const hardcoded = {
  formattedDate: '2026-06-21T15:00:00.000',
  location: 'Logan Arcade',
}

const dateTime = ref()
const location = ref()

console.log('URL:', NEXT_EVENT_URI)

onMounted(async () => {
  let nextEvent
  try {
    const response = await fetch(NEXT_EVENT_URI)

    nextEvent = (await response.json()) as CalendarEvent
  } catch (err) {
    console.log(err)
    nextEvent = hardcoded
  }

  dateTime.value = format(
    new Date(nextEvent.formattedDate),
    "eeee, MMMM do 'at' h:mmaaa",
  )
  location.value = nextEvent.location
})
</script>

<template>
  <Message v-if="location" severity="error" size="large" class="mb-8">
    <template #icon><i class="pi pi-exclamation-circle" /></template>
    Our next meetup is at {{ location }} on {{ dateTime }}
  </Message>
</template>

<style scoped></style>
