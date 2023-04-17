const API_URL = "http://localhost:3000/books/"
class DeleteBookService {
    static Call(id) {
        return this.DeleteBook(id)
    }

    static DeleteBook = async(id) => {
        const res = await fetch(API_URL + id, {
            method: 'DELETE',
        })
        return res
    }
}

export default DeleteBookService