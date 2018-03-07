<template>
   <div class="columns is-gapless is-multiline is-mobile" >
      <div class="column cardSpace" v-for=" card in cards">
         <div class="card" >
            <header class="card-header">
               <p class="card-header-title">
                  {{card.title}}
               </p>
               <div class="tags has-addons">
                  <span class="tag">Status:</span>
                  <span class="tag is-info">{{card.status}}</span>
                  <span class="deleteButton"><a class="delete is-medium" @click="deleteCard(card)"></a></span>
               </div>
            </header>
            <div class="card-content">
               <div class="content">
                  {{card.description}}
               </div>
            </div>
            <footer class="card-footer" style="padding:10px;">
               <button class="button is-primary buttonSpace" @click="changeStatus(card,'Done')">Done</button>
               <button class="button is-warning buttonSpace" @click="changeStatus(card,'in progress')">in progress</button>
               <button class="button is-danger buttonSpace"  @click="changeStatus(card,'To do')">To do</button>
            </footer>
         </div>
      </div>
   </div>
</template>
<script>
    
   export default {
     name: "Cards",
     computed: {
       cards(){
         return this.$store.state.cards;
       }
     },
     methods:{
          changeStatus(card,status){
            card.status = status;
          },
          deleteCard(card){
            this.$store.commit('DeleteCardTodatabase',card);
          }
     },
   
     created() {
       // dispatch like commit but for actions
       this.$store.dispatch('fetchCard'); 
     }
   
   };
</script>
<style>
   .buttonSpace{
   margin-left:10px;
   }
   .cardSpace{
     margin: 10px !important;
   }
   .deleteButton{
     margin: 10px;
   }
</style>