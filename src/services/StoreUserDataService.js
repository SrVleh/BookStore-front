import { store } from "../state/index.js";

class StoreUserDataService {
    static Call(data) {
        localStorage.setItem("userData", JSON.stringify(data))
        store.commit('storeUserData', data)
    }
}

export default StoreUserDataService
