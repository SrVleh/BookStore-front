import TokenController from "../../controllers/TokenController.js";
import { store } from "../../state/index.js";

class CompleteOngoingOrderService {
    static Call(order) {
        fetch("http://localhost:3000/orders/" + order , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            },
            body: JSON.stringify({
                order: {
                    order_completed: true,
                }
            })
        })
        .then((res) => {
            if (res.ok) {
                store.commit('isOngoingOrderState', false)
                return res.json()
            } else {
                throw new Error(res);
            }
        })
    }
}

export default CompleteOngoingOrderService
