import Vue from 'vue';
import VueRouter from 'vue-router';

import Update from './components/Update';
import Create from './components/Create';

import App from './components/App';


import { store } from "./store/store";


Vue.use(VueRouter);

const routes = [
  { path: '/create', component: Create },
  { path: '/card/:id',   name: 'update', component: Update }
]

/*const routes = [
  { path: '/', component: App,
    children: [
      {
        path: '/create',
        component: Create
      },
      {
        path: '/card/:id',
        name: 'update',
        component: Update
      }
    ]
  }
]*/


const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  el: '#app',
  store : store,
  router,
  template: '<App/>',
  components:{
    App
  }
})
