<template>
  <div class="position">
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a class="pagination-previous" title="This is the first page" @click="previousPage()" :disabled="pageCounter === 0">Previous</a>
    <a class="pagination-next" @click="nextPage()">Next page</a>
  <ul class="pagination-list" v-for="(element, index) in paginationLink" :key="index">
    <li v-if=" perPage >= index + 1">
      <a class="pagination-link" aria-label="Page 1" aria-current="page" @click="getItemsPerPage(index)">{{index + 2 }}</a>
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
       perPage: {
        type: Number,
        required: true
       },
       total: {
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
            return ( pagination_link_rest === 0) ? pagination_link - 1 : pagination_link;
          }
       },
       getItemsPerPage(index){
           Event.$emit('updatePaginationLink', index + this.page);
       },
       nextPage(){
        this.pageCounter += 1;
        let x = Math.floor(this.$store.state.cards.count / this.perPage),
            y = ((this.$store.state.cards.count % this.perPage) === 0) ? x - this.perPage : (x - this.perPage) + 1;
        if(y > this.pageCounter){
              this.page += 1;        
        }
      },
      previousPage(){
        if(this.pageCounter > 0){
          this.pageCounter -= 1;
        }
        if(this.page > 1){
          this.page -= 1;
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
