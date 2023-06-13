import TokenController from "../../controllers/TokenController.js";
import UserDataController from "../../controllers/UserDataController.js";
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const API_URL = "http://localhost:3000/login"

class LoginService {
    static Call(userData) {
        const promise = fetch(API_URL, {
            method: "POST",
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

        promise.then(res => {
            if (res.ok) {
                TokenController.SetToken(res.headers.get("Authorization"))
                return res.json();
            }
        })
        .then(json => {
            this.PrepareData(json)
        })
        .catch((err) => console.error(err));
    }

    static PrepareData(json) {
        UserDataController.StoreUserData(json.data)
        localStorage.setItem('isLoggedIn', true)
        UserDataController.ReloadData()
        RouterController.NavigateTo(Paths.PROFILE_PAGE)
    }
}

export default LoginService
