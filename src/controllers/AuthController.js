
class AuthController {
    static Login() {
        return LoginService.Call()
    }

    static Logout() {
        return LogoutService.Call()
    }

    static SignUp() {
        return SignupService.Call()
    }
}

export default AuthController