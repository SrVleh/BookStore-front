import GetBooksListService from '../services/GetBooksListService.js'
import GetBookByIdService from "../services/GetBookByIdService.js";

class BooksController {
    static GetBooksList() {
        return GetBooksListService.Call()
    }

    static GetBook(id) {
        return GetBookByIdService.Call(id)
    }
}

export default BooksController