import GetTokenService from "../services/token/GetTokenService.js";
import SetTokenService from "../services/token/SetTokenService.js";

class TokenController {
    static GetToken() {
        return GetTokenService.Call()
    }

    static SetToken(token) {
        return SetTokenService.Call(token)
    }
}

export default TokenController