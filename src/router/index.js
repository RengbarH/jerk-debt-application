import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about"*/ "@/views/AboutView"),
  },
  {
    path: "/jerk",
    name: "jerk",
    component: () => import(/* webpackChunkName: "jerk"*/ "@/views/JerkView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
