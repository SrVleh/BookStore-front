const API_URL = "http://localhost:3000/comments_by_book_id/"

class GetCommentsByBookService {
    static Call(id) {
        return this.GetComments(id)
    }

    static GetComments = async (id) => {
        const res = await fetch(API_URL + id)
        return res.json()
    }
}

export default GetCommentsByBookService