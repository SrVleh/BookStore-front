import GetCommentsByBookService from "../services/comments/GetCommentsByBookService.js";
import GetCommentUserService from "../services/comments/GetCommentUserService.js";
import NewCommentService from "../services/comments/NewCommentService.js";

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
}

export default CommentsController