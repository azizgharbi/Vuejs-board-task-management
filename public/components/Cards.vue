<template>
   <div class="columns">
      <div class="column"  v-for=" card in cards">
         <div class="card">
            <header class="card-header">
               <p class="card-header-title">
                  {{card.title}}
               </p>
               <div class="tags has-addons">
                  <span class="tag">Status:</span>
                  <span class="tag is-info">{{card.status}}</span>
               </div>
            </header>
            <div class="card-content">
               <div class="content">
                  {{card.description}}
               </div>
            </div>
            <footer class="card-footer" style="padding:10px;">
               <button class="button is-primary place">Done</button>
               <button class="button is-warning place">Doing</button>
               <button class="button is-danger place">To do</button>
            </footer>
         </div>
      </div>
   </div>
</template>
<script>
   import { store } from "../store/store";
   import axios from 'axios';
    
   export default {
     name: "Cards",
     computed: {
       cards(){
         return store.state.cards;
       }
     },
   
     created() {
       
      axios.get('/api/cards')
        .then( cards => {
          store.commit('setCards',cards.data)
        })
        .catch(function (error) {
            console.log(error);
            let emptyArray = [];
           store.commit('setCards',emptyArray)
        });
     }
   
   };
</script>
<style>
   .place{
   margin-left:10px;
   }
</style>