// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from "vue-axios";
import Axios from "axios";
import Vuex from "vuex";
import store from "./store";

Vue.use(VueAxios,Axios);
Vue.use(Vuex);

Vue.config.productionTip = false
let bus = new Vue();
Vue.prototype.bus = bus;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
