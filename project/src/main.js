import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './registerServiceWorker'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import router from './router'
//import store from './store'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import fastClick from 'fastclick'//解决移动端点击延迟300ms的问题
import md5 from 'js-md5';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.prototype.$md5 = md5;
Vue.prototype.$axios = axios;
Vue.use(Vant)
Vue.config.productionTip = false
fastClick.attach(document.body)//解决移动端点击延迟300ms的问题

new Vue({
  el: '#app',
  axios,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
