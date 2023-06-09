import TokenController from "../../controllers/TokenController.js";

const API_URL = 'http://localhost:3000/comments/'

class NewCommentService {
    static Call(comment) {
        return this.AddNewComment(comment)
    }

    static AddNewComment(comment) {
        const res = fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            },
            body: JSON.stringify({
                comment: {
                    title: comment.value.title,
                    body: comment.value.body,
                    user_id: comment.value.user_id,
                    book_id: comment.value.book_id
                }
            })
        })

        return res.json
    }
}

export default NewCommentService
