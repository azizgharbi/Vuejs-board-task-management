import Vue from 'vue'
import HelloWorld from './HelloWorld'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { 
    'hello' : HelloWorld
  }
})
