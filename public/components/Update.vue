<template>
    <div>
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
    </div>

      <div class="row">
       <a class="button is-primary" @click="updateCard()">Update</a>
       <a class="button is-warning" @click="clear()">Clear</a>
      </div>
   </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Update",
  data() {
    return {
      title: "",
      status: "To do",
      description: ""
    };
  },
  computed: {
    card() {
      return this.$store.state.card;
    }
  },
  methods: {
    updateCard() {
      const card = {
        id: this.$route.params.id,
        title: this.title,
        status: this.status,
        description: this.description
      };

      this.$store.commit("UpdateCardTodatabase", card);
    },

    Clear() {
      this.title = "";
      this.description = "";
    }
  },
  created() {
    axios.get("/api/card/" + this.$route.params.id).then(card => {
      this.title = card.data[0].title;
      this.status = card.data[0].status;
      this.description = card.data[0].description;
    });
  }
};
</script>
<style>
.radio-section {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
