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
        AddCardTodatabase(state,card){
          axios.post('/api/save/cards', {
            data: card
          }).then(response => {console.log(response.data);});
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
        }
        
      }
     
})