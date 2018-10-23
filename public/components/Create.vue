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
    <section class="radio-section">
        <div class="block">
            <b-radio v-model="status"
                native-value="To do">
                         To do

            </b-radio>
            <b-radio v-model="status"
                native-value="In progress">
                         In progress

            </b-radio>
            <b-radio v-model="status"
                native-value="Done">
                Done
            </b-radio>
        </div>
    </section>
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
      title: "",
      status: "To do",
      description: ""
    };
  },
  methods: {
    AddToBoardComponent() {
      const card = {
        title: this.title,
        status: this.status,
        description: this.description
      };

      this.$store.commit("AddCardTodatabase", card);
    },
    Clear() {
      this.title = "";
      this.description = "";
    }
  }
};
</script>
<style>
.radio-section {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
