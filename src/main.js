import Vue from 'vue'
import router from 'router'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/css/main'
import FastClick from 'fastclick'
import { Bem } from 'mixins'
import _ from 'underscore'
import generator from 'pages/generator'
import draggable from 'vuedraggable'

Vue.use(Element)
Vue.use(_)
Vue.component(draggable.name,draggable)
Bem()
FastClick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
