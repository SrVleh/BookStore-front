import GetTokenService from "../services/GetTokenService.js";
import SetTokenService from "../services/SetTokenService.js";

class TokenController {
    static GetToken() {
        return GetTokenService.Call()
    }

    static SetToken(token) {
        return SetTokenService.Call(token)
    }
}

export default TokenController