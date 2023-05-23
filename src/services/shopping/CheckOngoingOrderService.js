import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/ongoing_order"

class CheckOngoingOrder {

    static Call() {
        return this.GetOngoingOrder()
    }

    static GetOngoingOrder = async () => {
        const res = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        return res.json()
    }
}

export default CheckOngoingOrder