<script setup lang="ts">
import { Message } from 'primevue'
// import { getNextEvent } from '../calendar.ts'
// import { format } from 'date-fns/format'
// import { onMounted, ref } from 'vue'

const dateTime = new Date('2026-06-21T15:00:00.000')
const location = 'Logan Arcade'

// const dateTime = ref()
// const location = ref()
//
// onMounted(async () => {
//   const nextEvent = await getNextEvent()
//   dateTime.value = format(
//     new Date(nextEvent.formattedDate),
//     "eeee, MMMM do 'at' h:mmaaa",
//   )
//   location.value = nextEvent.location
// })
</script>

<template>
  <Message v-if="location" severity="error" size="large" class="mb-8">
    <template #icon><i class="pi pi-exclamation-circle" /></template>
    Our next meetup is at {{ location }} on {{ dateTime }}
  </Message>
</template>

<style scoped></style>
