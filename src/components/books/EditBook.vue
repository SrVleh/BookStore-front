<template>
    <div class="page-container">
        <div class="edit-book-section">
            <h1>Edit book</h1>
            <input class="custom-input" v-model="book.title" type="text" placeholder="Title">
            <input class="custom-input" v-model="book.author" type="text" placeholder="Author">
            <select class="category-selector" v-model="book.category">
                <option v-for="category in BOOKS_CATEGORIES">{{ category }}</option>
            </select>
            <input class="custom-input" v-model="book.price" type="number" placeholder="0">
            <input class="custom-input" v-model="book.image_url" type="url" placeholder="Image url">
            <textarea class="custom-area" v-model="book.synopsis" type="text" placeholder="Synopsis"/>
            <div class="actions-container">
                <button class="custom-btn" @click="updateBook">Confirm</button>
                <button class="custom-btn cancel" @click="cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
import BooksController from "../../controllers/BooksController.js";
import RawPaths from "../../constants/RawPaths.js";
import BOOKS_CATEGORIES from "../../services/books/category/BooksCategories.js";
import RouterController from "../../controllers/RouterController.js";

const book = ref({})
let updateResponse = null;

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

onMounted(async() =>{
    book.value = await BooksController.GetBook(props.id)
})

const updateBook = async () => {
    updateResponse = await BooksController.UpdateBook(book.value)
}

const cancel = () => {
    RouterController.NavigateTo(RawPaths.SHOW_BOOK + book.value.id)
}
</script>

<style scoped lang="scss">
    .edit-book-section {
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
