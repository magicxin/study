import Vue from 'vue'
import router from 'router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import 'css/main.css';
import vueTap from 'v-tap';
import FastClick from 'fastclick'
Vue.use(vueTap);
Vue.use(Element)
FastClick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
