import {store} from "../state/index.js";
import Paths from "../constants/Paths.js";

class RedirectService {
    static Call(to, from, next) {
        this.checkRequirements(to, from, next)
    }

    static checkRequirements(to, from, next) {
        if (to.matched.some(record => !record.meta.requiresAdmin)){
            if (to.matched.some(record => record.meta.requiresAuth)) {
                if (!store.state.isLoggedIn) { next(Paths.LOG_IN) }
                else { next() }
            }
            else { next() }
        }
        else {
            if (!store.state.userData.isAdmin) { next(from.path) }
            else { next() }
        }
    }
}

export default RedirectService