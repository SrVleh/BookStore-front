import { store } from "../../state/index.js";

class ChangeLoadingStateService {
    static Call(state) {
        store.commit('changeLoadingState', state)
    }
}

export default ChangeLoadingStateService