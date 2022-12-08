import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CreateContactView",
    component: () => import("@/views/CreateContactView.vue"),
  },
  {
    path: "/detail",
    name: "ContactDetailView",
    component: () => import("@/views/DetailContactView.vue"),
  }
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
