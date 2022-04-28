import { createRouter, createWebHistory } from "vue-router";

import { ROUTES } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: ROUTES,
});
export default router;
