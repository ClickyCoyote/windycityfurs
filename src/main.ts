import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Calendar from './components/Calendar.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
import CodeOfConduct from './components/CodeOfConduct.vue'
import Staff from './components/Staff.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/code-of-conduct', component: CodeOfConduct },
  { path: '/events', component: Calendar },
  { path: '/staff', component: Staff },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const Theme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
  },
})

const app = createApp(App)
app
  .use(PrimeVue, {
    theme: {
      preset: Theme,
    },
  })
  .use(router)

app.mount('#app')
