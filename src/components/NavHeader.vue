<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    route: '/',
    // icon: 'pi pi-home',
  },
  {
    label: 'Code of Conduct',
    route: '/code-of-conduct',
  },
  {
    label: 'Events',
    route: '/events',
  },
  {
    label: 'Staff',
    route: '/staff',
  },
  {
    label: 'Announcements',
    url: 'https://t.me/WindyCityFurs',
    icon: 'pi pi-telegram',
  },
  {
    label: 'FurTrack',
    url: 'https://www.furtrack.com/index/event:windy_city_furs',
    icon: 'pi pi-camera',
  },
  {
    label: 'BlueSky',
    url: 'https://bsky.app/profile/windycityfurs.org',
    icon: 'pi pi-at',
  },
])
</script>

<template>
  <Menubar
    :model="items"
    class="justify-content-end min-h-14"
    pt:start:class="mr-auto"
  >
    <template #start>
      <RouterLink to="/">
        <img src="/wcf.png" class="h-8" alt="Windy City Furs" />
      </RouterLink>
    </template>
    <template #item="{ item, props }">
      <RouterLink
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </RouterLink>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>

<style scoped></style>
