import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import routes from "./routes"

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

//Vue Filter
Vue.filter("cut-body", function(text) {
  if (text.length > 100) {
    return text.slice(0, 100) + "...";
  }
  else {
    return text;
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
