import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";
import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/books/"
class DeleteBookService {
    static Call(book_id) {
        const promise = fetch(API_URL + book_id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })

        promise.then(RouterController.NavigateTo(Paths.BOOKS_LIST))
    }
}

export default DeleteBookService
