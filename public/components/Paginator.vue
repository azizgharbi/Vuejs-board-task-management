<template>
  <div class="position">
  <nav class="pagination" role="navigation" aria-label="pagination">
  <ul class="pagination-list" v-for="(element, index) in paginationLink">
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
     data: function () {
        return { 
          paginationLinks:  0
        } 
    },
    computed: {
        paginationLink(){
         return  Math.floor(this.$store.state.cards.length /  this.$parent.limit) + 1;
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
