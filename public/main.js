import Vue from 'vue'
import cards from './components/Cards'
import { store } from "./store/store";

new Vue({
  el: '#app',
  store : store ,
  components: { 
    cards
  }
})
