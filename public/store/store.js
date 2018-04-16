import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

 export const store = new Vuex.Store({

      state: { // like data
       cards : [],
       card : null
      },
      mutations: { // like methode

        setCards (state,cards) {
            state.cards = cards
        },
        setCard (state,card) {
          state.card = card
      },
        AddCardTodatabase(state,card){
          axios.post('/api/save/card', {
            data: card
          }).then(response => {console.log(response.data);});
        },
        DeleteCardTodatabase(state,card){
          state.cards.rows.splice(state.cards.rows.indexOf(card), 1);
          axios.delete('/api/delete/card/' + card.id).then(response => {console.log(response.data);});
        },
        UpdateCardStatusTodatabase(state,card){
          axios.put('/api/update/card/status/' + card.id , {
            data: card
          }).then(response => {console.log(response.data);});
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

        fetchCards(state,params){
          axios.get('/api/cards/'+ params.limit +"/" + params.offset)
          .then( cards => {
            if(cards.data.rows.length > 0 ){
              store.commit('setCards',cards.data);
            }
          }).catch( error =>{console.log(error);});
        },
        getCard(state,id){
          axios.get('/api/card/'+ id)
          .then( card => {
            store.commit('setCard',card.data[0]);
          });
        }
      }
     
})