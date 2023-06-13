import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/ordered_books/"

class DeleteOrderedBookService {
    static Call(ordered_book) {
        return this.UpdateBook(ordered_book)
    }

    static UpdateBook = async(ordered_book) => {
        const promise = await fetch(API_URL + ordered_book.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: TokenController.GetToken()
            }
        })

        return promise
    }
}

export default DeleteOrderedBookService