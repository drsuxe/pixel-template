import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Create - Join Purchase Invoice",
    component: () => import("./views/CreateJoinPurchaseInvoiceView.vue"),
  },
  {
    path: "/detail",
    name: "Detail - Join Purchase Invoice",
    component: () => import("./views/DetailJoinPurchaseInvoiceView.vue"),
  },
  {
    path: "/edit",
    name: "Edit - Join Purchase Invoice",
    component: () => import("./views/EditJoinPurchaseInvoiceView.vue"),
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
