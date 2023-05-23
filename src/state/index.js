import { createStore } from 'vuex'


export const store = createStore({
    state: {
        userData: {},
        isLoggedIn: false,
        isOngoingOrder: false
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
        }
    }
})
