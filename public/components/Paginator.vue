<template>
  <div class="position">
      <nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list" v-for="(element, index) in paginationLink">
    <li>
      <a class="pagination-link" aria-label="Page 1" aria-current="page">{{index + 1 }}</a>
    </li>
  </ul>
</nav>
  </div>
</template>
<script>
   export default {
     name: "paginator",
     data() {
       return {
         limit :  this.$parent.limit,
         offset  :  this.$parent.offset
       }
    },
    computed: {
        paginationLink(){
         return  Math.floor(this.$store.state.cards.length / this.limit) + 1;
        }
     },
     methods:{
       
       
     }
   };
</script>
<style>
.position{
    margin: 10px;
}
</style>
