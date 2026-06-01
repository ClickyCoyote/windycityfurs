import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Calendar from './components/Calendar.vue'
import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory(),
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
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            color: '{surface.700}',
          },
          subtitle: {
            color: '{surface.500}',
          },
        },
        dark: {
          root: {
            background: '{surface.900}',
            color: '{surface.50}',
          },
          subtitle: {
            color: '{surface.400}',
          },
        },
      },
    },
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            borderRadius: '0',
            borderColor: 'transparent',
          },
        },
        dark: {
          root: {
            background: '{surface.900}',
            borderRadius: '0',
            borderColor: 'transparent',
          },
        },
      },
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
