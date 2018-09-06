import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import indexRouter from 'pages/index.vue'
import treelistRouter from 'pages/treelist/treelist.vue'
import contactsRouter from 'pages/contacts/contacts.vue'
export default new Router({
  routes: [{
    name:'index',
    path:'/index',
    component: indexRouter
  },{
    name:'treelist',
    path:'/treelist',
    component: treelistRouter
  },{
    name:'contacts',
    path:'/contacts',
    component: contactsRouter
  }]
})
