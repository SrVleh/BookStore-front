import {store} from "../state/index.js";
import UserDataController from "../controllers/UserDataController.js";

class UpdateProfilePicService {
    static Call(prof_pic) {
        fetch(`http://localhost:3000/current_user/` + store.state.userData.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                user: {
                    profile_pic: prof_pic,
                }
            })
        }).then(() => this.UpdateLocalData(prof_pic))
    }

    static UpdateLocalData(prof_pic) {
        let currentUserData = JSON.parse(localStorage.getItem('userData'))
        currentUserData.profile_pic = prof_pic;
        localStorage.setItem('userData', JSON.stringify(currentUserData))
        UserDataController.ReloadData()
    }
}

export default UpdateProfilePicService