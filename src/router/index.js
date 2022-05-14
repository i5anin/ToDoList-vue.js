import { createRouter, createWebHistory } from "vue-router";

import { ROUTES } from "@/router/routes"; //маршруты в router.js

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: ROUTES,
});
export default router;
