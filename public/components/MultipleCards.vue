<template>
   <div class="multipleForm">
    <div class="columns is-mobile">
        <div class="column is-2 is-offset-10">
            <a class="button is-success" @click="addForm">Add Form</a>
        </div>
    </div>
    <div v-for=" (formElment,index) in form" :key="formElment.id">
        <div class="columns is-mobile">
            <div class="column is-2 is-offset-11">
                <span class="deleteButton"><a class="delete is-medium" @click="deleteForm(index)"></a></span>
            </div>
        </div>
      <div class="field">
         <label class="label">Title</label>
         <div class="control">
            <input class="input" type="text" placeholder="Example : RSP-452" v-model="formElment.title">
         </div>
      </div>
      <textarea 
         v-model="formElment.description"
         class="textarea" 
         placeholder="Explain what do you want clearly">
   </textarea>
    <section class="radio-section">
        <div class="block">
            <b-radio 
                v-model="formElment.status"
                native-value="To do">
                         To do
            </b-radio>
            <b-radio 
                v-model="formElment.status"
                native-value="In progress">
                         In progress
            </b-radio>
            <b-radio
                v-model="formElment.status"
                native-value="Done">
                Done
            </b-radio>
        </div>
    </section>
    </div>
      <div class="row" v-if="form.length">
       <a class="button is-primary" @click="createCards()">Create</a>
      </div>
   </div>
</template>
<script>
export default {
  name: "MultipleCreate",
  data() {
    return {
      form: [
        {
          title: "",
          status: "To do",
          description: ""
        }
      ]
    };
  },
  methods: {
    addForm() {
      this.form.push({
        title: this.form.title,
        status: this.form.status,
        description: this.form.description
      });
    },
    createCards() {
      this.form.forEach(element => {
        let card = {
          title: element.title,
          status: element.status,
          description: element.description
        };
        this.$store.commit("AddCardTodatabase", card);
      });
    },
    deleteForm(index) {
      this.form.splice(index, 1);
    }
  }
};
</script>
<style>
.radio-section .row {
  margin-top: 30px;
  margin-bottom: 30px;
}
.multipleForm {
  margin-bottom: 30px;
}
</style>
