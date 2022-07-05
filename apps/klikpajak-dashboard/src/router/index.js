import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard active",
    component: () => import("../views/DashboardActiveView.vue"),
  },
  {
    path: "/blank",
    name: "Dashboard blank",
    component: () => import("../views/DashboardBlankView.vue"),
  },
  {
    path: "/waiting",
    name: "Dashboard waiting",
    component: () => import("../views/DashboardWaitingView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
