import TokenController from "../controllers/TokenController.js";
import { ref } from "vue";

class StoreUserDataService {
    static Call(data) {
        localStorage.setItem("userData", JSON.stringify(data))
    }
}

export default StoreUserDataService