import TokenController from "../../controllers/TokenController.js";
import {store} from "../../state/index.js";

let ongoing_order = {}

class CheckOngoingOrder {

    static Call() {
        fetch("http://localhost:3000/ongoing_order", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: TokenController.GetToken()
            }
        })
        .then((res) => {
            if (res.ok) {
                ongoing_order = res.json()
                this.storeOngoingOrder()
            } else {
                throw new Error(res);
            }
        })

        return ongoing_order[0] !== undefined
    }

    static storeOngoingOrder() {
        if (ongoing_order[0] !== undefined) {
            store.commit("changeCurrentOrder", ongoing_order[0].id)
            console.log("order changed successfully: " + ongoing_order[0].id)
        }else {
            store.commit('changeCurrentOrder', 0)
        }
    }
}

export default CheckOngoingOrder