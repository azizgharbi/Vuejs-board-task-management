import Vue from 'vue';
import VueRouter from 'vue-router';

import cards from './components/Cards';
import form from './components/Create';
import { store } from "./store/store";

Vue.use(VueRouter);

const routes = [
  { path: '/board', component: cards },
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
