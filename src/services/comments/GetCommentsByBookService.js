import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/comments_by_book_id/"

class GetCommentsByBookService {
    static Call(id) {
        return this.GetComments(id)
    }

    static GetComments = async (id) => {
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

export default GetCommentsByBookService