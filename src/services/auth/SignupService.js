import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";
class SignupService {
    static Call(userData) {
        fetch("http://localhost:3000/signup", {
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
            .then((res) => {
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
