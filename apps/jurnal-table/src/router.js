import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Jurnal Table",
    component: () => import("./views/IndexView.vue"),
  },
  {
    path: "/basic",
    name: "Basic",
    component: () => import("./views/BasicUsageView.vue"),
  },
  {
    path: "/advance",
    name: "Advance",
    component: () => import("./views/AdvanceUsageView.vue"),
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
