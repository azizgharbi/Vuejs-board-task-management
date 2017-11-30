import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import cardsModule from '../modules/cardsModule';


Vue.use(Vuex);

 export const cards = new Vuex.Store({
    modules: {
        cardsModule
      }
})