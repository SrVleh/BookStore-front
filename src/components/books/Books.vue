<template>
  <div class="page-container">
    <Loader v-if="store.state.isLoading" />
    <div class="filter-container">
        <select class="category-selector" v-model="selected_category" @change="categorySelected($event)">
            <option v-for="category in BOOKS_CATEGORIES">{{ category }}</option>
        </select>
    </div>
    <template v-if="books != null && !store.state.isLoading">
      <div class="book-container" v-for="book in books" :key="book.id">
        <router-link :to="'/book/' + book.id">
          <div class="book" :style="{ backgroundImage: `url(${ book.image_url })`}">
            <img class="book-icon" src="../../../public/book-logo.svg" alt="" style ="color: white">
            <div class="book-info">
              <h2 class="title">{{ book.title }}</h2>
              <p class="author">{{ book.author }}</p>
              <div class="actions">
                  <p class="price">{{ book.price }}€</p>
              </div>
            </div>
          </div>
          </router-link>
      </div>
    </template>
    <template v-if="books === null && store.state.isLoading">
      <div class="empty-content-element">
        <p>Oh no! There are no books listed 😢...</p>
      </div>
    </template>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import BooksController from "../../controllers/BooksController.js";
import Loader from "../shared/Loader.vue";
import { store } from "../../state/index.js";
import BOOKS_CATEGORIES from "../../services/books/category/BooksCategories.js";

const selected_category = ref(BOOKS_CATEGORIES[0])
const books = ref([])

onMounted(async() => {
    store.commit('changeLoadingState', true)
    books.value = await BooksController.GetBooksList()
    store.commit('changeLoadingState', false)
})

const categorySelected = async(event) => {
    books.value = await BooksController.GetBooksList()
    if (event.target.value !== BOOKS_CATEGORIES[0]) {
        books.value = books.value.filter(book => book.category === event.target.value)
    }
}
</script>

<style scoped lang="scss">

.page-container {

  .filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
  }

  .empty-content-element {
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: Appear;
    animation-duration: 2s;

    p {
      font-size: 1.8rem;
      font-weight: bolder;
    }
  }
}

.book-container {
  z-index: 1;
  width: 18rem;
  height: 14rem;
  border-radius: 8px;
  margin: 0;
  background: rgba(255, 255, 255, 0.27);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(172, 252, 217, 0.3);
  transition: all .3s ease-in-out;
  animation-name: Appear;
  animation-duration: 2s;
}

.book-container:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 0 .2em #ACFCD9);
  cursor: pointer;
}

</style>
