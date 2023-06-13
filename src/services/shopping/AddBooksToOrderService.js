import TokenController from "../../controllers/TokenController.js";
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const API_URL = "http://localhost:3000/ordered_books"

class AddBooksToOrderService {
    static Call(ongoing_order, book, quantity) {
        const promise = fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            },
            body: JSON.stringify({
                ordered_book: {
                    order_id: ongoing_order[0].id,
                    book_id: parseInt(book.id),
                    quantity: quantity,
                }
            })
        })


        promise.then(r => RouterController.NavigateTo(Paths.BOOKS_LIST))
    }
}

export default AddBooksToOrderService
