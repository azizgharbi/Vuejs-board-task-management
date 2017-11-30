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
   import { cards } from "../cards/cards";
   
   export default {
     name: "Cards",
     data() {
       return {
         cards: []
       };
     },
     computed: {
       
     },
     created() {
       this.cards = cards.state.cardsModule.CardsExample;
     }
   };
</script>
<style>
.place{
  margin-left:10px;
}
</style>
