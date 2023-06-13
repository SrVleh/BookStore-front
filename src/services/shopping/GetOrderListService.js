import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/orders"

class GetOrderListService {
    static Call() {
        return this.GetOrderList()
    }

    static GetOrderList = async() => {
        const promise = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return promise.json()
    }
}

export default GetOrderListService
