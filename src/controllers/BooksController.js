import BooksService from '../services/BooksService.js'

class BooksController {
    static GetAllBooks() {
        return BooksService.Call()
    }
}

export default BooksController