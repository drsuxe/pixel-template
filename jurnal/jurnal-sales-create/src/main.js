import Vue from "vue";
import Pixel from "@mekari/pixel";
import App from "./App.vue";
import router from "./router";

const breakpoints = {
  sm: "600px",
  md: "810px",
  lg: "1200px",
  xl: "1300px",
};

Vue.config.productionTip = false;
Vue.use(Pixel, {
  extendTheme: {
    breakpoints: breakpoints,
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
