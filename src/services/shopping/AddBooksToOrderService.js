import TokenController from "../../controllers/TokenController.js";
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";
import {store} from "../../state/index.js";

class AddBooksToOrderService {
    static Call(book, quantity) {
        fetch("http://localhost:3000/ordered_books/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            },
            body: JSON.stringify({
                order_id: store.state.currentOrder,
                book_id: book,
                quantity: quantity,
            })
        }).then(r => RouterController.NavigateTo(Paths.BOOKS_LIST))
    }
}

export default AddBooksToOrderService