<script setup lang="ts">
import { Message } from 'primevue'
import { format } from 'date-fns/format'
import { onMounted, ref } from 'vue'

// const NEXT_EVENT_URI = `${import.meta.env.VITE_API_BASE_URI}${import.meta.env.VITE_NEXT_EVENT_URI}`

const events = [
  {
    formattedDate: '2026-09-27T15:00:00.000',
    location: 'Logan Arcade',
  },
  {
    formattedDate: '2026-10-25T15:00:00.000',
    location: 'Logan Arcade',
  },
  { formattedDate: '2026-11-22T15:00:00.000', location: 'Logan Arcade' },
  { formattedDate: '2026-12-27T15:00:00.000', location: 'Logan Arcade' },
]

const getNextEvent = () =>
  events
    .sort((a, b) => new Date(a.formattedDate).getTime() - new Date(b.formattedDate).getTime())
    .reduce((acc, curr) =>
      new Date() > new Date(acc.formattedDate) && new Date() < new Date(curr.formattedDate) ? curr : acc,
    )

const dateTime = ref()
const location = ref()

// console.log('URL:', NEXT_EVENT_URI)

onMounted(async () => {
  // let nextEvent
  // try {
  //   const response = await fetch(NEXT_EVENT_URI)
  //
  //   nextEvent = (await response.json()) as CalendarEvent
  // } catch (err) {
  //   console.log(err)
  //   nextEvent = hardcoded
  // }

  const nextEvent = getNextEvent()
  if (new Date() > new Date(nextEvent.formattedDate)) return

  try {
    dateTime.value = format(new Date(nextEvent.formattedDate), "eeee, MMMM do 'at' h:mmaaa")
    location.value = nextEvent.location
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <Message v-if="location" severity="error" size="large" class="mb-8">
    <template #icon><i class="pi pi-exclamation-circle" /></template>
    Our next meetup is at {{ location }} on {{ dateTime }}
  </Message>
</template>

<style scoped></style>
