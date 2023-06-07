<template>
  <div class="page-container">
      <Loader v-if="store.state.isLoading" />
      <div class="book-data-container">
          <div class="book purchase" v-if="!store.state.isLoading" :style="{ backgroundImage: `url(${ book.image_url })`}">
              <img class="book-icon" src="../../../public/book-logo.svg" alt="" style ="color: white">
              <router-link v-if="store.state.userData.isAdmin" :to="'/edit-book/' + book.id" class="edit-btn hov-icon"></router-link>
              <button v-if="store.state.userData.isAdmin" class="delete-btn hov-icon" @click="deleteBook"></button>
              <div class="book-info">
                  <h2 class="title">{{ book.title }}</h2>
                  <p class="author">{{ book.author }}</p>
                  <div class="actions">
                      <p class="price">{{ book.price }}€</p>
                      <button class="buy-btn" v-if="!alreadyBought" @click="purchase()"></button>
                  </div>
              </div>
          </div>

          <div class="synopsis-container" v-if="book.synopsis != null && !store.state.isLoading">
              <h1 class="synopsis-title">Synopsis</h1>
              <p class="synopsis">{{ book.synopsis }}</p>
          </div>
      </div>
      <div class="recommendations-container">
          <div class="recommendation-textbox-container">
              <input class="custom-input" type="text" placeholder="Write a title">
              <textarea class="custom-area" type="text" :placeholder="`Write your comment about ${ book.title }`"/>
              <button class="action-btn">Send</button>
          </div>
          <div class="recommendations-list">

          </div>
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
import CommentsController from "../../controllers/CommentsController.js";


const DEFAULT_QUANTITY = 1
const ordered_books = ref([])
const book = ref({})
const ongoing_order = ref({})
const alreadyBought = ref(false)
const comments = ref([])
let response = null;

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

onMounted(async() =>{
    store.commit('changeLoadingState', true)
    book.value = await BooksController.GetBook(props.id)
    ongoing_order.value = await OrdersController.CheckOngoingOrder()
    ordered_books.value = await OrdersController.GetCurrentOrders()
    let ongoingOrder = await OrdersController.CheckOngoingOrder()
    if (ongoingOrder.length !== 0) {
        ordered_books.value.forEach(orderedBook => {
            if (orderedBook.book_id === book.value.id){
                alreadyBought.value = true;
            }
        })
    }
    getComments()
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

const getComments = async () => {
    comments.value = await CommentsController.GetCommentsByBook(book.value.id)
}

const purchase = async() => {
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
        flex-direction: column;
        align-items: center;
    }

    .book-data-container {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 75%;
        height: auto;
        padding: 1rem;
    }

    .recommendations-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 1rem;
        gap: 3rem;

        .recommendation-textbox-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 60%;
            height: auto;

            .custom-area {
                width: 100%;
                transition: all 1s ease-in-out;
            }
            .custom-area:focus-visible {
                transform: scale(1.02);
            }

            .action-btn {
                width: auto;
                height: 3rem;
                padding: 0;
            }
            .action-btn:hover {
                transform: scale(1.03);
            }
        }
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
