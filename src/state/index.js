import { createStore } from 'vuex'


export const store = createStore({
    state: {
        userData: {},
        isLoggedIn: false
    },
    mutations: {
        storeUserData(state, newData){
            state.userData = newData;
        },
        changeLoggedState(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
        }
    }
})
