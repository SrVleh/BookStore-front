const API_URL = "http://localhost:3000/books"

class GetBooksListService {
    static Call() {
        return this.GetBooksList()
    }

    static GetBooksList = async () => {
        const res = await fetch(API_URL)
        return res.json()
    }
}

export default GetBooksListService