<template>
   <div>
      <div class="field">
         <label class="label">Title</label>
         <div class="control">
            <input class="input" type="text" placeholder="Example : RSP-452">
         </div>
      </div>
      <textarea 
         class="textarea" 
         placeholder="Explain what do you want clearly">
   </textarea>
   <div class="row">
      <div class="control">
         <label class="radio">
         <input type="radio" name= "status" checked>
         To do
         </label>
         <label class="radio">
         <input type="radio" name= "status">
         In progress
         </label>
         <label class="radio">
         <input type="radio" name= "status">
         Done
         </label>
      </div>
   </div>
      <div class="row">
       <a class="button is-primary">Create</a>
       <a class="button is-warning">Clear</a>
      </div>
   </div>
</template>
<script>
   export default {
     name: "Create",
     computed: {
       
     },
     methods:{
         
     },
   
     created() {
       
     }
   
   };
</script>
<style>
.row{
  margin-top: 30px;
}
</style>
