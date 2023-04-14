<template>
  <div class="page-container">
      <div class="book" :style="{ backgroundImage: `url(${ book.image_url })`}">
          <img src="../../../public/book-logo.svg" alt="" style ="color: white">
          <div class="book-info">
              <h2 class="title">{{ book.title }}</h2>
              <p class="author">{{ book.author }}</p>
              <div class="actions">
                  <p class="price">{{ book.price }}€</p>
                  <button class="buy-btn">Buy</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import {defineProps, ref, onMounted} from "vue";
import BooksController from "../../controllers/BooksController.js";

const book = ref({})

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

onMounted(async() =>{
    book.value = await BooksController.GetBook(props.id)
})
</script>

<style scoped>
    .book {
        width: 23rem;
        height: 35rem;
    }
</style>