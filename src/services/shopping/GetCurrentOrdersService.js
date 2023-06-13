import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/get_books_by_current_order"

class GetCurrentOrdersService {
    static Call() {
        return this.GetOrderedBooks()
    }

    static GetOrderedBooks = async() => {
        const promise = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return promise.json()
    }
}

export default GetCurrentOrdersService