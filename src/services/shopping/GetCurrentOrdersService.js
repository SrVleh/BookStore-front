import OrdersController from "../../controllers/OrdersController.js";
import { ref } from "vue";
import TokenController from "../../controllers/TokenController.js";
import BooksController from "../../controllers/BooksController.js";

// TODO: REQUIRES REFACTOR
const ordered_books = ref([])
const books = ref([])
class GetCurrentOrdersService {
    static Call() {
        console.log(this.GetCurrentOrders)
    }

    static GetCurrentOrders = async() => {
        ordered_books.value = await this.GetOrderedBooks()
        OrdersController.CheckOngoingOrder().then( orders => {
            ordered_books.value = ordered_books.value.filter(ob => ob.order_id === orders[0].id)
            ordered_books.value.forEach(order => {
                this.StoreBooksToArray(order.book_id).then(() => {
                    return books.value
                })
            })
        })
    }

    static StoreBooksToArray = async(id) => {
        let book = await BooksController.GetBook(id)
        books.value.push(book)
        return books.value
    }

    static GetOrderedBooks = async() => {
        const res = await fetch("http://localhost:3000/ordered_books", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return res.json()
    }
}

export default GetCurrentOrdersService