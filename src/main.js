import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Jobs from "./pages/Jobs.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/jobs",
    component: Jobs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router)
app.mount("#app");
