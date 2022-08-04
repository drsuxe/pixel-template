import Vue from "vue";
import Pixel from "@mekari/pixel";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Pixel);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
