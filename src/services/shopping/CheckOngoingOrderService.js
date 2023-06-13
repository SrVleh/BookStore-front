import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/ongoing_order"

class CheckOngoingOrder {

    static Call() {
        return this.GetOngoingOrder()
    }

    static GetOngoingOrder = async () => {
        const promise = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return promise.json()
    }
}

export default CheckOngoingOrder
