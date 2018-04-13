import Vue from 'vue';
import VueRouter from 'vue-router';

import Update from './components/Update';
import Create from './components/Create';
import Cards from "./components/Cards";


import App from './components/App';


import { store } from "./store/store";


Vue.use(VueRouter);

const params = { limit: 5 , offset : 0 };

const routes = [
  { path: '/', component: Cards ,props: params },
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
