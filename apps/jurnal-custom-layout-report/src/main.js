import Vue from "vue";
import Pixel from "@mekari/pixel";
import App from "./App.vue";
import router from "./router";

const breakpoints = {
  sm: '360px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

Vue.config.productionTip = false;
Vue.use(Pixel, {
  extendTheme: {
    breakpoints: breakpoints,
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
