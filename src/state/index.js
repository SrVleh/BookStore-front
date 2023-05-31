import { createStore } from 'vuex'


export const store = createStore({
    state: {
        userData: {},
        isLoggedIn: false,
        isOngoingOrder: false,
        isLoading: false
    },
    mutations: {
        storeUserData(state, newData){
            state.userData = newData;
        },
        changeLoggedState(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
        },
        isOngoingOrderState(state, currentOrder) {
            state.isOngoingOrder = currentOrder
        },
        changeLoadingState(state, isLoading) {
            state.isLoading = isLoading
        }
    }
})
