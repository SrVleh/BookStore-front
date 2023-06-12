import CommentsController from "../../controllers/CommentsController.js";

let comments = []
let newUserComments= {}
let usersAndComments = []

class GetUserAndCommentsService {
    static Call(book_id) {
        return this.GetUserAndComments(book_id)
    }

    static GetUserAndComments = async (book_id) => {
        comments = await CommentsController.GetCommentsByBook(book_id)

        for (let comment of comments) {
            newUserComments = {
                user: await CommentsController.GetCommentUser(comment.id),
                comment: comment
            }
            usersAndComments.push(newUserComments)
        }
        return usersAndComments
    }
}

export default GetUserAndCommentsService