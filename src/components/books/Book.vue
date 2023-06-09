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
      <div class="comments-container">
          <div class="comment-textbox-container">
              <input class="custom-input" v-model="newComment.title" type="text" placeholder="Write a title">
              <textarea class="custom-area" v-model="newComment.body" type="text" :placeholder="`Write your comment about ${ book.title }`"/>
              <button class="action-btn" @click="createNewComment">Send</button>
          </div>
          <div class="comments-list">
                <div class="comment" v-for="user_comment in users_comments" :key="user_comment.comment.id">
                    <div class="comment-owner">
                        <div class="user-image" :style="{ backgroundImage: `url(${ user_comment.user.profile_pic })` }"></div>
                        <p class="username">{{ user_comment.user.user_name }}</p>
                    </div>
                    <div class="title-and-body">
                        <p class="title">{{ user_comment.comment.title }}</p>
                        <p class="body">{{ user_comment.comment.body }}</p>
                    </div>
                    <div class="publication-date">
                        <p class="date">{{ user_comment.comment.created_at.split('T')[0] }}</p>
                    </div>
                </div>
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
const users_comments = ref([])
const newComment = ref({
    title: "",
    body: "",
    user_id: 0,
    book_id: 0
})
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
    getUserAndComments()
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

const getUserAndComments = async () => {
    let comments = await CommentsController.GetCommentsByBook(book.value.id)

    for (let comment of comments) {
        let newUserComments = {
            user: await CommentsController.GetCommentUser(comment.id),
            comment: comment
        }
        users_comments.value.push(newUserComments)
    }
    console.log(users_comments.value)
}

const createNewComment = async () => {
    newComment.value.book_id = book.value.id
    newComment.value.user_id = store.state.userData.id
    CommentsController.NewComment(newComment)
    newComment.value = {}
    getUserAndComments()
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

    .comments-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 1rem;
        gap: 5rem;

        .comment-textbox-container {
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
                margin: 0;
            }
            .action-btn:hover {
                transform: scale(1.03);
            }
        }

        .comments-list {
            display: flex;
            flex-direction: column;
            width: 60%;
            padding: 1rem;
            gap: 2rem;

            .comment {
                display: flex;
                flex-direction: column;
                width: 100%;
                min-height: 10rem;
                background-color: #101010;
                border-radius: 8px;
                padding: 1rem;
                gap: 1rem;

                .comment-owner {
                    display: flex;
                    align-items: flex-end;
                    width: 100%;
                    height: 2rem;
                    gap: .5rem;

                    .user-image {
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }

                    .username {
                        font-size: 1rem;
                        font-weight: bolder;
                    }
                }

                .title-and-body {
                    display: flex;
                    flex-direction: column;

                    .title {
                        font-size: 2rem;
                        font-weight: bolder;
                    }

                    .body {
                        font-size: 1rem;
                        font-weight: normal;
                        color: #7e7e7e;
                    }
                }

                .publication-date {
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                    height: 1rem;

                    .date {
                        font-size: .8rem;
                        font-weight: normal;
                        color: #575757;
                    }
                }
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
