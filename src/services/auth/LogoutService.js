import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";
import { store } from "../../state/index.js";

const API_URL = "http://localhost:3000/logout"

class LogoutService {
    static Call() {
        const promise = fetch(API_URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
        })

        promise.then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((json) => Promise.reject(json));
            }
        })
        .then((json) => {
            localStorage.clear()
            store.commit('changeLoggedState', false)
            RouterController.NavigateTo(Paths.HOME)
        })
        .catch((err) => console.error(err));
    }
}

export default LogoutService
