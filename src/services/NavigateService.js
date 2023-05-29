import router from "../routes/router.js";

class NavigateService {
    static Call(path) {
        router.push(path).then(r => "")
    }
}

export default NavigateService
