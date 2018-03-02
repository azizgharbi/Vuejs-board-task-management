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
        },
        AddToBoard(state,card){
          state.cards.push(card);
        }
      } , 
      getters: { // like computed methode

      }, 
      actions:{ // make call from api

        fetchCard(){
          axios.get('/api/cards')
          .then( cards => {
            store.commit('setCards',cards.data)
          }).catch( error =>{console.log(error);});
        },

        AddToBoardAction(context , card) {
          context.commit("AddToBoard",card);
        }

      }
     
})