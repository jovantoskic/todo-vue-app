import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => NonExistingComponent,
    },
    {
      path: "/todos",
      name: "todos",
      component: () => import("../views/TodoView.vue"),
    },
  ],
});

export default router;
