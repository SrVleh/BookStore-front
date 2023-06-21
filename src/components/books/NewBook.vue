<template>
    <div class="page-container">
        <div class="new-book-section">
            <h1>New book</h1>
            <input v-model="book.title" class="custom-input" type="text" placeholder="Title">
            <input v-model="book.author" class="custom-input" type="text" placeholder="Author">
            <select class="category-selector" v-model="book.category">
                <option v-for="category in BOOKS_CATEGORIES">{{ category }}</option>
            </select>
            <input v-model="book.price" class="custom-input" type="number" placeholder="0">
            <input v-model="book.image_url" class="custom-input" type="url" placeholder="Image url">
            <textarea rows="15" v-model="book.synopsis" class="custom-area" type="text" placeholder="Synopsis" />
            <div class="actions-container">
                <button @click="createBook" class="custom-btn">Confirm</button>
                <button @click="RouterController.NavigateTo(Paths.BOOKS_LIST)" class="custom-btn cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BOOKS_CATEGORIES from "../../services/books/category/BooksCategories.js";
import BooksController from "../../controllers/BooksController.js";
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const book = ref({})

const createBook = async() => {
    await BooksController.CreateBook(book.value)
    book.value = {}
}

</script>

<style scoped lang="scss">
.new-book-section {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 2rem;
  width: 100%;

    h1 {
        font-family: OpenSans-Bold;
        color: var(--secondary);
    }

  .actions-container {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 35%;
  }
}
</style>
