<template>
<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
         <li>
            <a href="/">Board</a>
         </li>
         <li>
            <router-link to="/create">Create a card</router-link>
         </li>
      </ul>
   </nav>
   <router-view></router-view>
   <cards  limit = "5" offset = "0"></cards>
</div>
</template>
<script>

import Cards from "./Cards";

   export default {
     name: "app",
     components:{
       Cards
     }
   };
</script>
<style>

</style>
