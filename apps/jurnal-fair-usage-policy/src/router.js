import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FUPIndex",
    component: () => import("@/views/FUPIndex.vue"),
  },
  {
    path: "/checkout/subscription",
    name: "CheckoutSubscriptionView",
    component: () => import("@/views/checkout/CheckoutSubscriptionView.vue"),
  },
  {
    path: "/checkout/add-quota",
    name: "CheckoutModalAddQuota",
    component: () => import("@/views/checkout/CheckoutAddQuotaView.vue"),
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
