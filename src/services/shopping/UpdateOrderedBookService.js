import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/ordered_books/"

class UpdateOrderedBookService {
    static Call(ordered_book, quantity) {
        return this.UpdateBook(ordered_book, quantity)
    }

    static UpdateBook = (ordered_book, quantity) => {
        const promise = fetch(API_URL + ordered_book.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: TokenController.GetToken()
            },
            body: JSON.stringify({
                quantity: quantity
            })
        })

        return promise
    }
}

export default UpdateOrderedBookService