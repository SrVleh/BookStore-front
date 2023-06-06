import TokenController from "../../controllers/TokenController.js";
class GetCurrentOrdersService {
    static Call() {
        return this.GetOrderedBooks()
    }

    static GetOrderedBooks = async() => {
        const res = await fetch("http://localhost:3000/get_books_by_current_order", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return await res.json()
    }
}

export default GetCurrentOrdersService