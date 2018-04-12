import Vue from 'vue';
import VueRouter from 'vue-router';

import cards from './components/Cards';
import Update from './components/Update';
import form from './components/Create';

import App from './components/App';


import { store } from "./store/store";


Vue.use(VueRouter);

const params = { limit: 5 , offset : 0};

const routes = [
  { path: '/create', component: form },
  { path: '/card/:id',   name: 'update', component: Update }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

let app = new Vue({
  el: '#app',
  store : store,
  router,
  components:{
    App
  }
})
