import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const API_URL = "http://localhost:3000/books"

class CreateBookService {
    static Call(book) {
        const promise = fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: book.title,
                author: book.author,
                category: book.category,
                price: book.price,
                image_url: book.image_url,
                synopsis: book.synopsis
            })
        })

        promise.then(() => {
            RouterController.NavigateTo(Paths.BOOKS_LIST)
        })
    }
}

export default CreateBookService
