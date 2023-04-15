import NavigateService from "../services/NavigateService.js";

class RouterController {
    static NavigateTo(path) {
        return NavigateService.Call(path)
    }
}

export default RouterController