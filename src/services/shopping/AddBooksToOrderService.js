import TokenController from "../../controllers/TokenController.js";
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

class AddBooksToOrderService {
    static Call(ongoing_order, book, quantity) {
        fetch("http://localhost:3000/ordered_books/", {
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
        }).then(r => RouterController.NavigateTo(Paths.BOOKS_LIST))
    }
}

export default AddBooksToOrderService
