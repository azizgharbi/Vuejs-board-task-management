import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store = new Vuex.Store({

      state: {
       cards : []
      },
      mutations: {

       setCards (state,cards) {
            state.cards = cards
        }
      }
     
})