import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";
import { store } from "../../state/index.js";

class LogoutService {
    static Call() {
        fetch("http://localhost:3000/logout", {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
        })
            .then((res) => {
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
                console.dir(json);
            })
            .catch((err) => console.error(err));
    }
}

export default LogoutService
