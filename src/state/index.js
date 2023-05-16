import { createStore } from 'vuex'


export const store = createStore({
    state: {
        userData: {},
        isLoggedIn: false,
        currentOrder: 0
    },
    mutations: {
        storeUserData(state, newData){
            state.userData = newData;
        },
        changeLoggedState(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
        },
        changeCurrentOrder(state, currentOrder) {
            state.currentOrder = currentOrder
        }
    }
})
