<template>
  <div class="page-container">
      <Loader v-if="store.state.isLoading"/>
      <div class="order-info-container" v-if="store.state.isOngoingOrder && !store.state.isLoading">
          <div class="books-container" >
              <div class="book" v-for="book in books" :key="book.id" :style="{ backgroundImage: `url(${ book.image_url })`}">
                  <div class="book-info">
                      <h2 class="title">{{ book.title }}</h2>
                      <p class="author">{{ book.author }}</p>
                      <div class="actions">
                          <p class="price">{{ book.price }}€</p>
                      </div>
                  </div>
              </div>
          </div>

          <router-link :to="Paths.PROFILE_PAGE" class="btn action-btn"
                       @click="completePurchase">Complete purchase</router-link>
      </div>
      <div class="no-order-container" v-if="!store.state.isOngoingOrder && !store.state.isLoading">
          <p class="no-ongoing-order">There is no ongoing order...</p>
          <div class="sad-icon"></div>
      </div>
  </div>
</template>

<script setup>
  import OrdersController from "../controllers/OrdersController.js";
  import Paths from "../constants/Paths.js";
  import { store } from "../state/index.js";
  import { onMounted, ref } from "vue";
  import TokenController from "../controllers/TokenController.js";
  import BooksController from "../controllers/BooksController.js";
  import Loader from "./shared/Loader.vue";

  const books = ref([])
  const ordered_books = ref({})

  onMounted(async() => {
      store.commit('changeLoadingState', true)
      ordered_books.value = await getOrderedBooks()
      OrdersController.CheckOngoingOrder().then( orders => {
        ordered_books.value = ordered_books.value.filter(ob => ob.order_id === orders[0].id)
        ordered_books.value.forEach(order => {
            storeBooksToArray(order.book_id)
        })
    })
      store.commit('changeLoadingState', false)
  })

  const storeBooksToArray = async (id) => {
      let book = await BooksController.GetBook(id)
      books.value.push(book)
  }

  const getOrderedBooks = async() => {
      const res = await fetch("http://localhost:3000/ordered_books", {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              Authorization: TokenController.GetToken()
          }
      })
      return res.json()
  }

  const completePurchase = () => {
      OrdersController.CheckOngoingOrder().then((order) => {
          OrdersController.CompleteOngoingOrder(order[0].id)
      })
  }
</script>

<style scoped>

  .order-info-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 1rem;

      .books-container {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 100%;
          height: auto;

          .book {
              display: flex;
              flex-direction: column;
              align-content: flex-end;
              justify-content: flex-end;
              width: 18rem;
              height: 14rem;
              border: 1px solid white;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              border-radius: 8px;

          }
      }
  }

  .no-order-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: 100%;
      height: 100%;

      .no-ongoing-order {
          font-size: 2rem;
      }

      .sad-icon {
          width: 8rem;
          height: 8rem;
          background-image: url("../../public/sad-icon.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
      }
  }
</style>
