import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/ordered_books"

class GetOrderedBooksService {
    static Call() {
        return this.GetOrderedBooks()
    }

    static GetOrderedBooks = async() => {
        const promise = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })

        return promise.json()
    }
}

export default GetOrderedBooksService
