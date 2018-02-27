import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

 export const store = new Vuex.Store({

      state: { // like data
       cards : []
      },
      mutations: { // like methode

        setCards (state,cards) {
            state.cards = cards
        }
      } , 
      getters: { // like computed methode

      }, 
      actions:{ // make call from api

        fetchCard(context){
          axios.get('/api/cards')
          .then( cards => {
            store.commit('setCards',cards.data)
          }).catch( error =>{console.log(error);});
        }

      }
     
})