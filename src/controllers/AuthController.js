import LoginService from "../services/auth/LoginService.js";

class AuthController {
    static Login(userData) {
        return LoginService.Call(userData)
    }

    static Logout() {
        return LogoutService.Call()
    }

    static SignUp() {
        return SignupService.Call()
    }
}

export default AuthController
