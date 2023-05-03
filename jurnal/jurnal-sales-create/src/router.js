import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Jurnal - Pixel 2",
    component: () => import("@/views/DetailsView.vue"),
    meta: {
      title: "Jurnal - Pixel 2",
      icon:"favicon.ico" 
    }
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
