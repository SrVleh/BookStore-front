import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const API_URL = "http://localhost:3000/books/"
class DeleteBookService {
    static Call(book_id) {
        return this.DeleteBook(book_id)
    }

    static DeleteBook = async(book_id) => {
        const res = await fetch(API_URL + book_id, {
            method: 'DELETE',
        }).then(RouterController.NavigateTo(Paths.BOOKS_LIST))
        return res
    }
}

export default DeleteBookService
