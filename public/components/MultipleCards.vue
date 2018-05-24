<template>
   <div>
    <div class="columns is-mobile">
        <div class="column is-2 is-offset-10">
            <a class="button is-success" @click="addForm">Add card</a>
        </div>
    </div>
    <div v-for="formElment in form" :key="formElment.id">
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
    <section class="radio-section">
        <div class="block">
            <b-radio 
                native-value="To do">
                         To do

            </b-radio>
            <b-radio 
                native-value="In progress">
                         In progress

            </b-radio>
            <b-radio
                native-value="Done">
                Done
            </b-radio>
        </div>
    </section>
    </div>
      <div class="row">
       <a class="button is-primary" @click="AddToBoardComponent()">Create</a>
       <a class="button is-warning" @click="Clear()">Clear</a>
      </div>
   </div>
</template>
<script>
   export default {
     name: "MultipleCreate",
     data() {
       return {
        form: []
       }
    },
     methods:{
         addForm(){
             this.form.push({id : Math.random()})
         }
     }
   };
</script>
<style>
.radio-section{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
