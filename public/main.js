import Vue from 'vue';
import VueRouter from 'vue-router';

import cards from './components/Cards';
import form from './components/Create';
import { store } from "./store/store";

Vue.use(VueRouter);

const params = { limit: 5 , offset : 0};

const routes = [
  { path: '/board', component: cards ,props: params },
  { path: '/create', component: form }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

let app = new Vue({
  el: '#app',
  store : store,
  router
})
