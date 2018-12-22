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

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
