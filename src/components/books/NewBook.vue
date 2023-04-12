<template>
   <div class="page-container">
       <div class="new-book-section">
           <h1>New book</h1>
           <input class="custom-input" type="text" placeholder="Title">
           <input class="custom-input" type="text" placeholder="Author">
           <input class="custom-input" type="text" placeholder="Price">
           <input class="custom-input" type="url" placeholder="Image url">
           <div class="actions-container">
               <button class="custom-btn">Confirm</button>
               <button class="custom-btn cancel">Cancel</button>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    name: "NewBook"
}
</script>

<style scoped lang="scss">
  .new-book-section {
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 2rem;
    width: 100%;

    .actions-container {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      width: 35%;
    }
  }
</style>