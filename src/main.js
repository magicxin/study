import Vue from 'vue'
import router from 'router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import 'css/main.css';
Vue.use(Element)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
