const API_URL = "http://localhost:3000/comment_user/"

class GetCommentUserService {
    static Call(id) {
        return this.GetCommentUser(id)
    }

    static GetCommentUser = async (id) => {
        const res = await fetch(API_URL + id)
        return res.json()
    }
}

export default GetCommentUserService
