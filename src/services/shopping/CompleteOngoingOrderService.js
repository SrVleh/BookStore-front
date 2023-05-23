import TokenController from "../../controllers/TokenController.js";
import {store} from "../../state/index.js";

class CompleteOngoingOrderService {
    static Call() {
        fetch("http://localhost:3000/orders/" + store.state.currentOrder, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            },
            body: {
                order_completed: true
            }
        })
        .then((res) => {
            if (res.ok) {
                console.log("Status: " + res.ok)
                store.commit('isOngoingOrderState', false)
                return res.json()
            } else {
                throw new Error(res);
            }
        })
    }
}

export default CompleteOngoingOrderService