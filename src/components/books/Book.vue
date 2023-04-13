<template>
  <div class="page-container">
      <div class="book" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg')">
          <img src="../../../public/book-logo.svg" alt="" style ="color: white">
          <div class="book-info">
              <h2 class="title">Title</h2>
              <p class="author">Author</p>
              <div class="actions">
                  <p class="price">23€</p>
                  <button class="buy-btn">Buy</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Book"
}
</script>

<style scoped>
    .book {
        width: 23rem;
        height: 35rem;
    }
</style>