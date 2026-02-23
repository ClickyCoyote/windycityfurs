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
])
</script>

<template>
  <Menubar
    :model="items"
    class="justify-content-end fixed w-full"
    pt:start:class="mr-auto"
  >
    <template #start>
      <img src="/wcf.png" class="h-8" alt="Windy City Furs" />
    </template>
    <template #item="{ item, props }">
      <RouterLink
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </RouterLink>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>

<style scoped></style>
