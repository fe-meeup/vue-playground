import Vue from "vue";
import App from "./App.vue";
import TailwindCss from "tailwindcss";
import "./styles/style.scss";
import VueCompositionApi from "@vue/composition-api";

Vue.use(TailwindCss);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
