import StoreUserDataService from "../services/StoreUserDataService.js";
import ReloadDataService from "../services/ReloadDataService.js";
import UpdateProfilePicService from "../services/UpdateProfilePicService.js";

class TokenController {
    static StoreUserData(data) {
        return StoreUserDataService.Call(data)
    }

    static ReloadData(){
        return ReloadDataService.Call()
    }

    static UpdateProfilePic(prof_pic) {
        return UpdateProfilePicService.Call(prof_pic)
    }
}

export default TokenController