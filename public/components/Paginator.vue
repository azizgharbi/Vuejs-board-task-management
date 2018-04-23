<template>
  <div class="position">
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
    <a class="pagination-next" @click="nextPage()">Next page</a>
  <ul class="pagination-list" v-for="(element, index) in paginationLink" :key="index">
    <li v-if=" limit >= index + 1">
      <a class="pagination-link" aria-label="Page 1" aria-current="page" @click="getItemsPerPage(index)">{{index + page }}</a>
    </li>
  </ul>
</nav>
  </div>
</template>
<script>

  import { Event } from "./../event";
   export default {
     name: "paginator",
     props: {
       limit: {
        type: Number,
        required: true
       }
  },
  data () {
    return { 
      page : 1,
      pageCounter: 0
    }
  },
  computed: {
        paginationLink(){
          return this.paginationsNumberLink();
        }
     },
  methods:{
       paginationsNumberLink(){
         if(this.$store.state.cards.count &&  this.$parent.limit) {
              const pagination_link_rest =  this.$store.state.cards.count % this.$parent.limit,
                    pagination_link =  Math.floor(this.$store.state.cards.count / this.$parent.limit);
            return ( pagination_link_rest !== 0) ? pagination_link + 1 : pagination_link;
          }
       },
       getItemsPerPage(index){
           Event.$emit('updatePaginationLink', index + this.page);
       },
       nextPage(){
        this.pageCounter += 1;
        let x = Math.floo(this.$store.state.cards.count / this.limit),
            y = ((this.$store.state.cards.count % this.limit) === 0) ? x - this.limit : (x - this.limit) + 1;
        if(y > this.pageCounter){
              this.page += 1;        
        }
       }

     }
   };
</script>
<style>
.position{
    margin: 10px;
}
</style>
