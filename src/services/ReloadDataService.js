import {store} from "../state/index.js";
import TokenController from "../controllers/TokenController.js";

class ReloadDataService {
    static Call() {
        if (TokenController.GetToken()){
            store.commit('changeLoggedState', localStorage.getItem('isLoggedIn'))
            store.commit('storeUserData', JSON.parse(localStorage.getItem("userData")))
        }
    }
}

export default ReloadDataService