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
               <button class="button is-primary place" @click="changeStatus(card,'Done')">Done</button>
               <button class="button is-warning place" @click="changeStatus(card,'in progress')">in progress</button>
               <button class="button is-danger place" @click="changeStatus(card,'To do')">To do</button>
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
          }
     },
   
     created() {
       // dispatch like commit but we used for actions
       this.$store.dispatch('fetchCard'); 
     }
   
   };
</script>
<style>
   .place{
   margin-left:10px;
   }
</style>