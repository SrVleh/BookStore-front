import StoreUserDataService from "../services/StoreUserDataService.js";

class TokenController {
    static StoreUserData(data) {
        return StoreUserDataService.Call(data)
    }
}

export default TokenController