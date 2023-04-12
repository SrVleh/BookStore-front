<template>
    <div class="page-container">
        <div class="books-container" v-for="book in books" :key="book.id">
            <div class="book" :style="{ backgroundImage: `url(${ book.image_url })`}">
                <img src="../../../public/book-logo.svg" alt="" style ="color: white">
                <div class="book-info">
                  <h2 class="title">{{ book.title }}</h2>
                  <p class="author">{{ book.author }}</p>
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
  width: 18rem;
  height: 14rem;
  border-radius: 8px;
  margin: 0;
  background: rgba(255, 255, 255, 0.27);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(172, 252, 217, 0.3);

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

   img {
     position: absolute;
     width: 1.8rem;
     height: 1.8rem;
     top: 1rem;
     right: 1rem;
   }

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

      .title {
        color: #f1f1f1;
        font-weight: bolder;
      }

      .author {
        color: #f1f1f1;
        font-weight: normal;
      }

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
          color: #ACFCD9;
          transition: all .5s ease-in-out;
          border: 1px solid #ACFCD9;
        }

        .buy-btn:hover {
          transform: scale(1.1);
          color: #ACFCD9;
          filter: drop-shadow(0 0 .5em #ACFCD9);
        }
      }
    }
  }
}
</style>

<script setup>
import {ref, onMounted} from 'vue';

const books = ref([])
const API_URL = "http://192.168.1.36:80/books"

onMounted(async() => {
    try {
        const res = await fetch(API_URL);
        books.value = await res.json();
    } catch(e){
        books.value = [];
    }
})
</script>
