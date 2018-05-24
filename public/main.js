import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';


import Update from './components/Update';
import Create from './components/Create';
import Cards from "./components/Cards";
import MultipleCreate from "./components/MultipleCards"


import App from './components/App';


import { store } from "./store/store";


Vue.use(VueRouter);
Vue.use(Buefy);


const params = { limit: 5 , offset : 0 };

const routes = [
  { path: '/', component: Cards ,props: params },
  { path: '/create', component: Create },
  { path: '/multiple', component: MultipleCreate },
  { path: '/card/:id',   name: 'update', component: Update }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  el: '#app',
  store : store,
  router,
  template: '<My-App />',
  components:{
    "My-App" : App 
  }
})
