<template>
    <div class="page-container">
        <Loader v-if="store.state.isLoading"/>
        <div class="order-info-container" v-if="store.state.isOngoingOrder && !store.state.isLoading">
            <div class="orders-container">
                <h2 class="order-title">Order info</h2>
                <div class="ordered-items-data">
                    <div class="ordered-book">
                        <p class="column-title">Title & Author</p>
                        <p class="column-title">Quantity</p>
                        <p class="column-title">Price by unit</p>
                    </div>
                    <div class="ordered-book" v-for="custom_book in custom_books" :key="custom_book.book.id">
                        <p class="name-and-author">{{ `${ custom_book.book.title } by ${ custom_book.book.author }` }}</p>
                        <div class="quantity">
                            <div class="rest-btn" @click="removeQuantity(custom_book)">-</div>
                            {{ custom_book.quantity }}
                            <div class="sum-btn" @click="addQuantity(custom_book)">+</div>
                        </div>
                        <p class="price">{{ custom_book.book.price }}€</p>
                    </div>
                    <div class="discounts-and-total">
                        <div class="total-price-container">
                            <p class="total-price-title">Total price</p>
                            <p class="total-price">{{ total_price }}€</p>
                        </div>
                    </div>
                </div>
            </div>

            <router-link :to="Paths.PROFILE_PAGE" class="btn action-btn"
                         @click="completePurchase">Complete purchase
            </router-link>
        </div>
        <div class="no-order-container" v-if="!store.state.isOngoingOrder && !store.state.isLoading">
            <p class="no-ongoing-order">There is no ongoing order...</p>
            <div class="sad-icon"></div>
        </div>
    </div>
</template>

<script setup>

// TODO: Research about optimisation

import OrdersController from "../controllers/OrdersController.js";
import Paths from "../constants/Paths.js";
import { store } from "../state/index.js";
import { onMounted, ref } from "vue";
import Loader from "./shared/Loader.vue";
import BooksController from "../controllers/BooksController.js";
import RouterController from "../controllers/RouterController.js";
import StateController from "../controllers/StateController.js";

const books = ref([])
const ordered_books = ref([])
const custom_books = ref([])
const total_price = ref(0)

onMounted(async () => {
    StateController.ChangeLoadingState(true)
    let ongoingOrder = await OrdersController.CheckOngoingOrder()
    if (ongoingOrder.length !== 0) {
        ordered_books.value = await OrdersController.GetCurrentOrders()
        ordered_books.value.forEach(orderedBook => {
            storeBookInBooksList(orderedBook, orderedBook.quantity)
        })
    }
    calculateTotalPrice()
    StateController.ChangeLoadingState(false)
})

const storeBookInBooksList = async (book, quantity) => {
    let bookData = await BooksController.GetBook(book.book_id)
    let newCustomBook = {
        book: bookData,
        quantity: quantity
    }
    total_price.value += newCustomBook.book.price * newCustomBook.quantity
    custom_books.value.push(newCustomBook)
}

const calculateTotalPrice = () => {
    total_price.value = 0
    custom_books.value.forEach(cb => {
        total_price.value += cb.book.price * cb.quantity;
    })
}

const removeQuantity = (cb) => {
    if (cb.quantity > 1) {
        cb.quantity--
        updateOrderedBook(cb)
    }else {
       deleteOrderedBook(cb)
    }
    calculateTotalPrice()
}

const addQuantity = (cb) => {
    cb.quantity++
    calculateTotalPrice()
    updateOrderedBook(cb)
}

const updateOrderedBook = (ordered_book) => {
    let selectedOrder = {}
    ordered_books.value.forEach(order => {
        if (order.book_id === ordered_book.book.id) {
            selectedOrder = order
        }
    })

    OrdersController.UpdateOrderedBook(selectedOrder, ordered_book.quantity)
}

const deleteOrderedBook = (ordered_book) => {
    custom_books.value.forEach((custom_book, index) => {
        if (custom_book.book.id === ordered_book.book.id){
            custom_books.value.splice(index, 1)
        }
    })
    ordered_books.value.forEach(order => {
        if (order.book_id === ordered_book.book.id && ordered_books.value.length > 1) {
            OrdersController.DeleteOrderedBook(order)
        }
        if (ordered_books.value.length === 1) {
            OrdersController.DeleteOrder(order.order_id)
            RouterController.NavigateTo(Paths.BOOKS_LIST)
        }
    })
}

const completePurchase = () => {
    OrdersController.CheckOngoingOrder().then((order) => {
        OrdersController.CompleteOngoingOrder(order[0].id)
    })
}
</script>

<style scoped lang="scss">

.order-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
    background-color: #101010;
    border: 1px solid #ACFCD9;
    border-radius: 12px;
    padding: 2rem;

    .orders-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        min-height: 5rem;
        height: auto;
        //border: 1px solid #ACFCD9;
        border-radius: 8px;
        padding: 1rem;

        .order-title {
            font-weight: bolder;
            font-size: 2rem;
            margin-bottom: 3rem;
        }

        .ordered-items-data {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            height: auto;
            gap: .4rem;

            .ordered-book {
                display: flex;
                justify-content: space-between;
                width: 100%;

                .column-title {
                    color: #ACFCD9;
                    font-weight: bolder;
                }

                .name-and-author {
                    text-align: start;
                    width: calc(100% / 3);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .quantity {
                    display: flex;
                    justify-content: space-around;
                    text-align: center;
                    width: calc(100% / 3);

                    .rest-btn{
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        width: 1.8rem;
                        height: 1.8rem;
                        border: 1px solid #ACFCD9;
                        border-radius: 8px;
                        font-size: 1rem;
                        padding: 0;
                        color: #ACFCD9;
                        font-weight: bolder;
                        transition: all .2s ease-in-out;
                    }
                    .rest-btn:hover {
                        color: #1a1a1a;
                        transform: scale(1.05);
                        background-color: #ACFCD9;
                    }

                    .sum-btn {
                        @extend .rest-btn;
                    }
                }

                .price {
                    text-align: end;
                    width: calc(100% / 3);
                }
            }

            .ordered-book:first-child {
                margin-bottom: 1rem;
            }

            .discounts-and-total {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                min-height: 5rem;
                margin-top: 2rem;

                .total-price-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                    width: calc(100% / 3);

                    .total-price-title {
                        color: #ACFCD9;
                        font-weight: bolder;
                    }
                }
            }
        }
    }
}

.no-order-container {
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
        background-image: url("images/sad-icon.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
}
</style>
