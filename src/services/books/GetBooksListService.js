import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/books"

class GetBooksListService {
    static Call() {
        return this.GetBooksList()
    }

    static GetBooksList = async () => {
        const res = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return res.json()
    }
}

export default GetBooksListService