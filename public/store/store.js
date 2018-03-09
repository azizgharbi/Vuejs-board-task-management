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
          axios.post('/api/save/card', {
            data: card
          }).then(response => {console.log(response.data);});
        },
        DeleteCardTodatabase(state,card){
          state.cards .splice(state.cards .indexOf(card), 1);
          axios.delete('/api/delete/card/' + card.id).then(response => {console.log(response.data);});
        },
        UpdateCardTodatabase(state,card){
          axios.put('/api/update/card/' + card.id , {
            data: card
          }).then(response => {console.log(response.data);});
        }
      } , 
      getters: { // like computed methode

      }, 
      actions:{ // make call from api

        fetchCard(state,limit){
          axios.get('/api/cards/'+ limit)
          .then( cards => {
            store.commit('setCards',cards.data);
          }).catch( error =>{console.log(error);});
        }
        
      }
     
})