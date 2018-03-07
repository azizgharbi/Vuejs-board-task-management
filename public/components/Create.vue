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
         <input type="radio" name= "status" value = "To do" v-model="status">
         To do
         </label>
         <label class="radio">
         <input type="radio" name= "status" value ="In progress" v-model="status">
         In progress
         </label>
         <label class="radio">
         <input type="radio" name= "status" value = "Done" v-model="status">
         Done
         </label>
      </div>
   </div>
      <div class="row">
       <a class="button is-primary" @click="AddToBoardComponent()">Create</a>
       <a class="button is-warning" @click="Clear()">Clear</a>
      </div>
   </div>
</template>
<script>
   export default {
     name: "Create",
     data() {
       return {
          title:'',
          status: 'To do',
          description:''
       }
    },
     methods:{
       AddToBoardComponent(){
         let  card = {
            "title" : this.title,
            "status" : this.status,
            "description" : this.description
          }
          this.$store.commit('AddCardTodatabase',card);
       },
       Clear(){
         this.title ="";
         this.description = "";
       }
     }
   };
</script>
<style>
.row{
  margin-top: 30px;
}
</style>
