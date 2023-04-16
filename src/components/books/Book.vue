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

      <div class="synopsis-container" v-if="book.synopsis != null">
          <h1 class="synopsis-title">Synopsis</h1>
          <p class="synopsis">{{ book.synopsis }}</p>
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
    .page-container {
        gap: 3rem;
    }

    .book {
        width: 23rem;
        height: 35rem;
    }

    .synopsis-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        overflow-wrap: break-word;
        width: 40%;
        height: 100%;

        .synopsis-title{
            font-size: 2rem;
        }

        .synopsis {
            font-weight: normal;
            font-size: 1.2rem;
        }
    }
</style>