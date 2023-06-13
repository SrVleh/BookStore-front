import RouterController from "../../controllers/RouterController.js";
import RawPaths from "../../constants/RawPaths.js";

const API_URL = "http://localhost:3000/books/"

class GetBooksListService {
    static Call(book) {
        return this.UpdateBook(book)
    }

    static UpdateBook = (book) => {
        const promise = fetch(API_URL + book.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: book.title,
                author: book.author,
                category: book.category,
                price: book.price,
                image_url: book.image_url,
                synopsis: book.synopsis,
                id: book.id
            })
        })

        promise.then(RouterController.NavigateTo(RawPaths.SHOW_BOOK + book.id))
            .catch(err => { console.log(err) })
    }
}

export default GetBooksListService
