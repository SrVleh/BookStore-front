import TokenController from "../../controllers/TokenController.js";
import { store } from "../../state/index.js";

const API_URL = "http://localhost:3000/orders/"

class CompleteOngoingOrderService {
    static Call(order) {
        const promise = fetch(API_URL + order , {
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

        promise.then((res) => {
            if (res.ok) {
                store.commit('isOngoingOrderState', false)
                return res.json()
            }
        }).catch(err => { console.log(err) })
    }
}

export default CompleteOngoingOrderService
