<template>
    <div class="page-container">

        <div class="book-container" v-for="book in books" :key="book.id">
            <router-link :to="'/book/' + book.id">
                <div class="book" :style="{ backgroundImage: `url(${ book.image_url })`}">
                    <img src="../../../public/book-logo.svg" alt="" style ="color: white">
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
    </div>
</template>

<style scoped lang="scss">
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
}

.book-container:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 0 .2em #ACFCD9);
  cursor: pointer;
}
</style>

<script setup>
import {ref, onMounted} from 'vue';
import BooksController from "../../controllers/BooksController.js";

const books = ref([])

onMounted(async() => {
    books.value = await BooksController.GetBooksList()
})
</script>