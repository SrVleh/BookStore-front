import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/comment_user/"

class GetCommentUserService {
    static Call(id) {
        return this.GetCommentUser(id)
    }

    static GetCommentUser = async (id) => {
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

export default GetCommentUserService
