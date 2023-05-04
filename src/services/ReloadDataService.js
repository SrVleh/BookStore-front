import {store} from "../state/index.js";
import TokenController from "../controllers/TokenController.js";

class ReloadDataService {
    static Call() {
        if (TokenController.GetToken()){
            store.commit('changeLoggedState', true)
            store.commit('storeUserData', localStorage.getItem("userData"))
        }
    }
}

export default ReloadDataService