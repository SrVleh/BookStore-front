import GetBooksListService from '../services/books/GetBooksListService.js'
import GetBookByIdService from "../services/books/GetBookByIdService.js";
import UpdateBookService from "../services/books/UpdateBookService.js";
import DeleteBookService from "../services/books/DeleteBookService.js";
import CreateBookService from "../services/books/CreateBookService.js";

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

    static DeleteBook(book_id) {
        return DeleteBookService.Call(book_id)
    }

    static CreateBook(book) {
        return CreateBookService.Call(book)
    }
}

export default BooksController