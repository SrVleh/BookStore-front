import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/books/"
class GetBooksListService {
    static Call(id) {
        return this.GetBookById(id)
    }

    static GetBookById = async (id) => {
        const promise = await fetch(API_URL + id, {
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
