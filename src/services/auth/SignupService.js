import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const API_URL = "http://localhost:3000/signup"

class SignupService {
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
                    name: userData.value.name,
                    username: userData.value.username,
                },
            }),
        })


        promise.then((res) => {
            if (res.ok) {
                RouterController.NavigateTo(Paths.LOG_IN)
                return res.json();
            } else {
                throw new Error(res);
            }
        })
        .catch((err) => console.error(err));
    }
}

export default SignupService
