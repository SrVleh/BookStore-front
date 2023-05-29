import TokenController from "../../controllers/TokenController.js";
import UserDataController from "../../controllers/UserDataController.js";
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

class LoginService {
    static Call(userData) {
        fetch("http://localhost:3000/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    email: userData.value.email,
                    password: userData.value.pass,
                },
            }),
        })
            .then((res) => {
                if (res.ok) {
                    TokenController.SetToken(res.headers.get("Authorization"))
                    return res.json();
                } else {
                    throw new Error(res);
                }
            })
            .then((json) => UserDataController.StoreUserData(json.data))
            .then(() => localStorage.setItem('isLoggedIn', true))
            .then(() => UserDataController.ReloadData())
            .then(() => RouterController.NavigateTo(Paths.PROFILE_PAGE))
            .catch((err) => console.error(err));
    }
}

export default LoginService
