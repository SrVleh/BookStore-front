<template>
  <div class="page-container">
      <Loader v-if="store.state.isLoading" />
      <div class="book purchase" v-if="!store.state.isLoading" :style="{ backgroundImage: `url(${ book.image_url })`}">
          <img class="book-icon" src="../../../public/book-logo.svg" alt="" style ="color: white">
          <router-link v-if="store.state.userData.isAdmin" :to="'/edit-book/' + book.id" class="edit-btn hov-icon"></router-link>
          <button v-if="store.state.userData.isAdmin" class="delete-btn hov-icon" @click="deleteBook"></button>
          <div class="book-info">
              <h2 class="title">{{ book.title }}</h2>
              <p class="author">{{ book.author }}</p>
              <div class="actions">
                  <p class="price">{{ book.price }}€</p>
                  <button class="buy-btn" @click="purchase()"></button>
              </div>
          </div>
      </div>

      <div class="synopsis-container" v-if="book.synopsis != null && !store.state.isLoading">
          <h1 class="synopsis-title">Synopsis</h1>
          <p class="synopsis">{{ book.synopsis }}</p>
      </div>
  </div>
</template>

<script setup>
import Paths from "../../constants/Paths.js";
import { store } from "../../state/index.js";
import {defineProps, ref, onMounted} from "vue";

import BooksController from "../../controllers/BooksController.js";
import DeleteBookService from "../../services/books/DeleteBookService.js";
import NavigateService from "../../services/NavigateService.js";
import OrdersController from "../../controllers/OrdersController.js";
import Loader from "../shared/Loader.vue";
import GetCurrentOrdersService from "../../services/shopping/GetCurrentOrdersService.js";


const DEFAULT_QUANTITY = 1
const orderedBooks = ref([])
const book = ref({})
const ongoing_order = ref({})
let response = null;

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

onMounted(async() =>{
    OrdersController.GetCurrentOrders()
    store.commit('changeLoadingState', true)
    book.value = await BooksController.GetBook(props.id)
    ongoing_order.value = await OrdersController.CheckOngoingOrder()
    store.commit('changeLoadingState', false)
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

const purchase = async() => {
    orderedBooks.value.forEach(order => {
        console.log(order)
    })
    if (ongoing_order.value.length === 0) {
        OrdersController.CreateNewOrder()
        ongoing_order.value = await OrdersController.CheckOngoingOrder()
    }
    OrdersController.AddBooksToOrder(ongoing_order.value, book.value, DEFAULT_QUANTITY)
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
