import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import indexRouter from 'pages/index.vue'
import demoRouter from 'pages/example/detail.vue'
import editorRouter from 'pages/generator/editor.vue'
export default new Router({
  routes: [{
    path:'*',
    redirect: '/index',
  },{
    name:'index',
    path:'/index',
    component: indexRouter
  },{
    name:'demo',
    path:'/demo/:_tag',
    component: demoRouter
  },{
    name:'editor',
    path:'/editor',
    component: editorRouter
  },]
})
