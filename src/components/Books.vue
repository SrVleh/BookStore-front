<template>
    <div class="page-container">
        <div class="books-container" v-for="book in books" :key="book.id">
            <div class="book" :style="{ backgroundImage: `url(${ book.image_url })`}">
                <div class="book-info">
                  <h2>{{ book.title }}</h2>
                  <p>{{ book.author }}</p>
                  <div class="actions">
                    <p class="price">{{ book.price }}€</p>
                    <button class="buy-btn">Buy</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.books-container {
  z-index: 1;
  width: 23rem;
  height: 14rem;
  border-radius: 8px;
  margin: 0;
  background: rgba(255, 255, 255, 0.27);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(250, 159, 66, .3);

  .book {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;


    .book-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      padding: .8rem;
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.3) 100%);
      text-align: start;

      .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 1rem;

        .price {
          font-weight: bolder;
          font-size: 1.2rem;
          color: #fff;
        }

        .buy-btn {
          width: 4.2rem;
          height: 2.2rem;
          align-self: center;
          text-align: center;
          padding: 0;
          font-weight: bolder;
          font-size: 1.2rem;
          color: #FA9F42;
          transition: all .3s ease-in-out;
          border: 1px solid #FA9F42;
        }

        .buy-btn:hover {
          transform: scale(1.1);
          color: #FA9F42;
          filter: drop-shadow(0 0 .5em #FA9F42);
        }
      }
    }
  }
}
</style>

<script setup>
import {ref, onMounted} from 'vue';

const books = ref([])
const title = ref('')
const author = ref('')
const price = ref(0)
const image_url = ref('')
const book_id = ref(0)
const API_URL = "http://localhost:3000/books"

onMounted(async() => {
    try {
        const res = await fetch(API_URL);
        books.value = await res.json();
    } catch(e){
        books.value = [];
    }
})
</script>
