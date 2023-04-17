<template>
  <div class="page-container">
      <div class="book" :style="{ backgroundImage: `url(${ book.image_url })`}">
          <img class="book-icon" src="../../../public/book-logo.svg" alt="" style ="color: white">
          <router-link :to="'/edit-book/' + book.id" class="edit-btn hov-icon"></router-link>
          <button class="delete-btn hov-icon" @click="deleteBook"></button>
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
import DeleteBookService from "../../services/DeleteBookService.js";
import NavigateService from "../../services/NavigateService.js";
import Paths from "../../constants/Paths.js";

const book = ref({})
let response = null;

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

onMounted(async() =>{
    book.value = await BooksController.GetBook(props.id)
})

const deleteBook = async() => {
    response = await DeleteBookService.DeleteBook(props.id)
        .then(() => {
            navigateToBooks()
        })
}

const navigateToBooks = () => {
    NavigateService.Call(Paths.BOOKS_LIST)
}
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