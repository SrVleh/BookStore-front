import ChangeLoadingStateService from "../services/state/ChangeLoadingStateService.js";

class StateController {
    static ChangeLoadingState(state) {
        return ChangeLoadingStateService.Call(state)
    }
}

export default StateController