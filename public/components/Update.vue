<template>
    <div>
    <div v-show="loading">
      <div class="field">
         <label class="label">Title</label>
         <div class="control">
            <input class="input" type="text" placeholder="Example : RSP-452" v-model="title">
         </div>
      </div>
      <textarea 
         class="textarea" 
         placeholder="Explain what do you want clearly" v-model="description">
   </textarea>
   <div class="row">
      <div class="control">
         <label class="radio">
         <input type="radio" name= "status" value = "To do" v-model="status" :checked = "status === 'To do'">
         To do
         </label>
         <label class="radio">
         <input type="radio" name= "status" value ="In progress" v-model="status" :checked = "status === 'In progress'">
         In progress
         </label>
         <label class="radio">
         <input type="radio" name= "status" value = "Done" v-model="status" :checked = "status === 'Done'">
         Done
         </label>
      </div>
   </div>
    </div>
    
        <div class = "row" >
        <span  id="loader"></span>
        </div>

      <div class="row">
       <a class="button is-primary">Update</a>
       <a class="button is-warning">Clear</a>
      </div>
   </div>
</template>
<script>
import {Spinner} from 'spin.js';
import {opts} from './../spinner/options';


   export default {
     name: "Update",
     data() {
       return {
          title:'',
          status: 'To do',
          description:'',
          loading : false
       }
    },
     computed: {
       card(){
         return this.$store.state.card;
       }
     },
     methods:{
           updateCard(card){
            this.$store.commit('UpdateCardTodatabase',card);
          }
    },
     mounted() {  
       // dispatch like commit but for actions
       this.$store.dispatch('getCard', this.$route.params.id);
      // init spinner
       const self =this,
            target = document.getElementById('loader'),     
            spinner = new Spinner(opts).spin(target);
      // init data
       setTimeout(() => {
          self.title = self.$store.state.card.title;
          self.status = self.$store.state.card.status;
          self.description = self.$store.state.card.description;
          self.loading = true;
          spinner.stop();
        }, 1000);
     }
   };
</script>
<style>
.row{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
