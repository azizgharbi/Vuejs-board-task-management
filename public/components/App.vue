<template>
<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
         <li>
            <router-link to="/">Board</router-link>
         </li>
         <li>
            <router-link to="/create">Create a card</router-link>
         </li>
      </ul>
   </nav>
   <router-view></router-view>
</div>
</template>
