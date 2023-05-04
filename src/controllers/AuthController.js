import LoginService from "../services/auth/LoginService.js";
import LogoutService from "../services/auth/LogoutService.js";
import SignupService from "../services/auth/SignupService.js";
class AuthController {
    static Login(userData) {
        return LoginService.Call(userData)
    }

    static Logout() {
        return LogoutService.Call()
    }

    static SignUp(userData) {
        return SignupService.Call(userData)
    }
}

export default AuthController
