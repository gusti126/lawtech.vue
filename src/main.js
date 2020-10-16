import Vue from 'vue'
import App from './App.vue'
// import router
import router from './router/index'
// bootstrap library
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
require('../src/assets/css/style.css')
// import axios
import axios from 'axios'
axios.defaults.withCredentials = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
