import TokenController from "../../controllers/TokenController.js";

class CreateOrderService {
    static Call() {
        fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        .then((res) => {
            if (res.ok) {
                console.log("Status: " + res.ok)
                return res.json()
            } else {
                throw new Error(res);
            }
        })
    }
}

export default CreateOrderService