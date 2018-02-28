<template>
<div>

   <div class="field">
      <label class="label">Title</label>
      <div class="control">
         <input class="input" type="text" placeholder="Example : RSP-452">
      </div>
   </div>

   <textarea 
        class="textarea" 
        placeholder="Explain do you want clearly">
   </textarea>

   <div class="control">
      <div class="select">
         <select>
            <option>In progress</option>
            <option>To do</option>
            <option>Done</option>
         </select>
      </div>
   </div>
   
</div>
</template>
<script>
   export default {
     name: "Create",
     computed: {
       
     },
     methods:{
         
     },
   
     created() {
       
     }
   
   };
</script>