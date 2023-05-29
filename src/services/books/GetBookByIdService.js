const API_URL = "http://localhost:3000/books/"
class GetBooksListService {
    static Call(id) {
        return this.GetBookById(id)
    }

    static GetBookById = async(id) => {
        const res = await fetch(API_URL + id)
        return res.json()
    }
}

export default GetBooksListService
