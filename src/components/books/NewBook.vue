<template>
    <div class="page-container">
        <div class="new-book-section">
            <h1>New book</h1>
            <input v-model="title" class="custom-input" type="text" placeholder="Title">
            <input v-model="author" class="custom-input" type="text" placeholder="Author">
            <input v-model="price" class="custom-input" type="number" placeholder="0">
            <input v-model="image_url" class="custom-input" type="url" placeholder="Image url">
            <textarea rows="15" v-model="synopsis" class="custom-area" type="text" placeholder="Synopsis" />
            <div class="actions-container">
                <button @click="createBook" class="custom-btn">Confirm</button>
                <button @click="navigateToBooksList" class="custom-btn cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const title = ref("")
const author = ref("")
const price = ref(0)
const image_url = ref("")
const synopsis = ref("")
const API_URL = "http://localhost:3000/books"

const createBook = async() => {
    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title.value,
            author: author.value,
            price: price.value,
            image_url: image_url.value,
            synopsis: synopsis.value
        })
    }).then(() => {
        navigateToBooksList()
    })

    title.value = ''
    author.value = ''
    price.value = 0
    image_url.value = ''
    synopsis.value = ''
}

const navigateToBooksList = () => {
    RouterController.NavigateTo(Paths.BOOKS_LIST)
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
