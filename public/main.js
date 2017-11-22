import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import { cards } from './cards/cards'

new Vue({
  el: '#app',
  cards,
  components: { 
    'hello' : HelloWorld
  },
  computed : {
      show() {
        return cards.state.CardsExample;
     }
     
  }
  
})
