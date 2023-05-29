import TokenController from "../../controllers/TokenController.js";

class GetOrderListService {
    static Call() {
        return this.GetOrderList()
    }

    static GetOrderList = async() => {
        const res = await fetch("http://localhost:3000/orders", {
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return res.json()
    }
}

export default GetOrderListService
