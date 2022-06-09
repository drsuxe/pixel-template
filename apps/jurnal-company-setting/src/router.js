import Vue from "vue";
import VueRouter from "vue-router";

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
    name: "Jurnal",
    component: () => import("./views/CompanySetting.vue"),
  },
  ...prefixRoutes("/company-setting", [
    {
      path: "/",
      name: "Jurnal - Company setting",
      component: () => import("./views/CompanySetting.vue"),
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
