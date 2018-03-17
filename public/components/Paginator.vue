<template>
  <div class="position">
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
    <a class="pagination-next">Next page</a>
  <ul class="pagination-list" v-for="(element, index) in paginationLink" :key="index">
    <li>
      <a class="pagination-link" aria-label="Page 1" aria-current="page" @click="getItemsPerPage(index)">{{index + 1 }}</a>
    </li>
  </ul>
</nav>
  </div>
</template>
<script>

  import { Event } from "./../event";
   export default {
     name: "paginator",
    computed: {
        paginationLink(){
          if(this.$store.state.cards.count &&  this.$parent.limit) {
              const pagination_link_rest =  this.$store.state.cards.count % this.$parent.limit;
               const pagination_link =  Math.floor(this.$store.state.cards.count / this.$parent.limit);
              return ( pagination_link_rest !== 0) ? pagination_link + 1 : pagination_link;
          }
        }
     },
     methods:{
       getItemsPerPage(index){
            Event.$emit('updatePaginationLink', index);
       }
     }
   };
</script>
<style>
.position{
    margin: 10px;
}
</style>
