<template>
<div class="columns">
  <div class="column"  v-for=" card in cards">
     <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{card.title}}
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      {{card.description}}
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
  </div>
</div>
</template>

<script>
import { cards } from "../cards/cards";

export default {
  name: "Cards",
  data() {
    return {
      cards: []
    };
  },
  computed: {
    show() {
      return cards.state.cardsModule.CardsExample;
    }
  },
  created() {
    this.cards = cards.state.cardsModule.CardsExample;
  }
};
</script>

