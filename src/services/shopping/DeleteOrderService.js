import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/orders/"


class DeleteOrderService {
    static Call(id) {
        return this.deleteOrder(id)
    }

    static deleteOrder = async(id) => {
        const promise = await fetch(API_URL + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return promise
    }
}

export default DeleteOrderService
