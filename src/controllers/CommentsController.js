import GetCommentsByBookService from "../services/comments/GetCommentsByBookService.js";
import GetCommentUserService from "../services/comments/GetCommentUserService.js";
import NewCommentService from "../services/comments/NewCommentService.js";
import GetUserAndCommentsService from "../services/comments/GetUserAndCommentsService.js";

class CommentsController {
    static GetCommentsByBook(id) {
        return GetCommentsByBookService.Call(id)
    }

    static GetCommentUser(id) {
        return GetCommentUserService.Call(id)
    }

    static NewComment(comment) {
        return NewCommentService.Call(comment)
    }

    static GetUserAndComments(book_id) {
        return GetUserAndCommentsService.Call(book_id)
    }
}

export default CommentsController