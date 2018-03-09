<template>
  <div class="position" v-if="elements > perPage">
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
     props: ['perPage'],
     data() {
       return {
         
       }
    },
    computed: {
       elements(){
         return  Math.floor(this.$store.state.cards.length);
       },
        paginationLink(){
         return  Math.floor(this.$store.state.cards.length / this.perPage);
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
