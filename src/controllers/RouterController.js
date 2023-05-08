import NavigateService from "../services/NavigateService.js";
import RedirectService from "../services/RedirectService.js";

class RouterController {
    static NavigateTo(path) {
        return NavigateService.Call(path)
    }

    static Redirect(to, from, next) {
        return RedirectService.Call(to, from, next)
    }
}

export default RouterController