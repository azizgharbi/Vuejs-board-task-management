<template>
    <div>
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
         <input type="radio" name= "status" value = "To do">
         To do
         </label>
         <label class="radio">
         <input type="radio" name= "status" value ="In progress">
         In progress
         </label>
         <label class="radio">
         <input type="radio" name= "status" value = "Done" >
         Done
         </label>
      </div>
   </div>
      <div class="row">
       <a class="button is-primary">Update</a>
       <a class="button is-warning">Clear</a>
      </div>
   </div>
</template>
<script>
   export default {
     name: "Update",
     data() {
       return {
          title:'',
          status: 'To do',
          description:''
       }
    },
     computed: {
       card(){
         return this.$store.state.card[0];
       }
     },
     methods:{
           updateCard(card){
            this.$store.commit('UpdateCardTodatabase',card);
          }
    },
     created() {    
       // dispatch like commit but for actions
       this.$store.dispatch('getCard', this.$route.params.id);
          let card =this.$store.state.card ;
          this.title = card.title;
          this.description = card.description;
          this.status = card.status;
          console.log(card);
       
       
     }
   };
</script>
<style>
.row{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
