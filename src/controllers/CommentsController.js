import GetCommentsByBookService from "../services/comments/GetCommentsByBookService.js";

class CommentsController {
    static GetCommentsByBook(id) {
        return GetCommentsByBookService.Call(id)
    }
}

export default CommentsController