import TokenController from "../../controllers/TokenController.js";

class GetOrderedBooksService {
    static Call() {
        return this.GetOrderedBooks()
    }

    static GetOrderedBooks = async() => {
        const res = await fetch("http://localhost:3000/ordered_books", {
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })

        return res.json()
    }
}

export default GetOrderedBooksService
