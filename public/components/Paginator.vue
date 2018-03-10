<template>
  <div class="position">
      <nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list" v-for="(element, index) in paginationLink">
    <li>
      <a class="pagination-link" aria-label="Page 1" aria-current="page" @click="getItemsPerPage(index)">{{index + 1 }}</a>
    </li>
  </ul>
</nav>
  </div>
</template>
<script>
   export default {
     name: "paginator",
    computed: {
        paginationLink(){
         return  Math.floor(this.$store.state.cards.length /  this.$parent.limit) + 1;
        }
     },
     methods:{
       getItemsPerPage(index){
            this.$emit('update-pagination-link', index);
       }
       
     }
   };
</script>
<style>
.position{
    margin: 10px;
}
</style>
