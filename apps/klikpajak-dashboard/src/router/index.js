import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

function prefixRoutes(prefix, routes) {
  return routes.map((route) => {
    route.path = prefix + "" + route.path;
    return route;
  });
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  ...prefixRoutes("/dashboard", [
    {
      path: "/",
      name: "Dashboard active",
      component: () => import("../views/dashboard/DashboardActiveView.vue"),
    },
    {
      path: "/blank",
      name: "Dashboard blank",
      component: () => import("../views/dashboard/DashboardBlankView.vue"),
    },
    {
      path: "/waiting",
      name: "Dashboard waiting",
      component: () => import("../views/dashboard/DashboardWaitingView.vue"),
    },
  ]),
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
