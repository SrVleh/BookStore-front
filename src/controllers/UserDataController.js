import StoreUserDataService from "../services/StoreUserDataService.js";
import ReloadDataService from "../services/ReloadDataService.js";

class TokenController {
    static StoreUserData(data) {
        return StoreUserDataService.Call(data)
    }

    static ReloadData(){
        return ReloadDataService.Call()
    }
}

export default TokenController