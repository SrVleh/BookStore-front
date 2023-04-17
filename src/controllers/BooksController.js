import GetBooksListService from '../services/GetBooksListService.js'
import GetBookByIdService from "../services/GetBookByIdService.js";
import UpdateBookService from "../services/UpdateBookService.js";

class BooksController {
    static GetBooksList() {
        return GetBooksListService.Call()
    }

    static GetBook(id) {
        return GetBookByIdService.Call(id)
    }

    static UpdateBook(book, id) {
        return UpdateBookService.Call(book)
    }
}

export default BooksController