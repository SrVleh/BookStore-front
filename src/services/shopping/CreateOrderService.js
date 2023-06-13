import TokenController from "../../controllers/TokenController.js";

const API_URL = "http://localhost:3000/orders"

class CreateOrderService {
    static Call() {
        const promise = fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })

        promise.then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).catch(err => { console.log(err) })
    }
}

export default CreateOrderService
