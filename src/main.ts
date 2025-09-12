import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Calendar from "./components/Calendar.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/events", component: Calendar },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app
  .use(PrimeVue, {
    unstyled: true,
  })
  .use(router);

app.mount("#app");
