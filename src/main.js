import Vue from "vue";
import App from "./App";
import router from "./router";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VueSession from "vue-session";
import VueResource from "vue-resource";
Vue.use(VueSession);
Vue.use(VueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.mixin({
  data() {
    return {
      bd_host: "http://192.168.0.43:3000/"
    };
  },
  filters: {
    ToValor: value => {
      value = parseFloat(value);
      return value.toFixed(2);
    },
    ToMaiusculo: value => {
      return value.toUpperCase();
    }
  }
});
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
