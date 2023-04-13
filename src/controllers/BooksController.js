import GetBooksListService from '../services/GetBooksListService.js'

class BooksController {
    static GetBooksList() {
        return GetBooksListService.Call()
    }
}

export default BooksController