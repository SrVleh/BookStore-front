import GetBooksListService from '../services/books/GetBooksListService.js'
import GetBookByIdService from "../services/books/GetBookByIdService.js";
import UpdateBookService from "../services/books/UpdateBookService.js";

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