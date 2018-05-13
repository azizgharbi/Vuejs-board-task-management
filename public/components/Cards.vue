<template>
<div>
   <div class="columns is-gapless is-multiline is-mobile" >
      <div class="column cardSpace" v-for=" card in cards" :key="card.id">
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
                  
                  <router-link class="button is-link is-small" :to="{name: 'update', params: { id: card.id } }">Edit</router-link>
            </div>

            <footer class="card-footer" style="padding:10px;">
               <button class="button is-primary buttonSpace" @click="changeStatus(card,'Done')">Done</button>
               <button class="button is-warning buttonSpace" @click="changeStatus(card,'in progress')">in progress</button>
               <button class="button is-danger buttonSpace"  @click="changeStatus(card,'To do')">To do</button>
            </footer>
         </div>
      </div>
   </div>
     <b-pagination
            :total="total"
            :current.sync="current"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page= 5 >
        </b-pagination>
</div>
</template>
<script>
  import { Event } from "./../event";
   export default {
     name: "Cards",
      data() {
            return {
                current: 1,
                order: '',
                size: '',
                isSimple: false,
                isRounded: true
            }
        },
      props: {
       limit: {
        type: Number,
        required: true
       },
       offset : {
        type: Number,
        required: true
       }
  },
     computed: {
       cards(){
         return this.$store.state.cards.rows;
       },
       total(){
         return this.$store.state.cards.count;
       }
     },
     watch: {
      current: function (value) {
        let self = this;
        let newParams = {"limit" :  self.limit ,"offset" : self.limit  * value};
        console.log(newParams);
           this.$store.dispatch('fetchCards',newParams);
      }
    },
     methods:{
          changeStatus(card,status){
            card.status = status;
            this.$store.commit('UpdateCardStatusTodatabase',card);
          },
          deleteCard(card){
            this.$store.commit('DeleteCardTodatabase',card);
          }
     },
     created() {
       // dispatch like commit but for actions
       let params = {"limit" : this.limit,"offset" : this.offset}
       this.$store.dispatch('fetchCards',params);
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