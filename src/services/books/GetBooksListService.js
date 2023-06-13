import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/books"

class GetBooksListService {
    static Call() {
        return this.GetBooksList()
    }

    static GetBooksList = async () => {
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

export default GetBooksListService
