
<template>
    <Navbar />
    <router-view></router-view>
    <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import router from "./routes/router.js";
import UserDataController from "./controllers/UserDataController.js";
import {store} from "./state/index.js";
import Paths from "./constants/Paths.js";

router.beforeResolve((to, from, next) => {
    UserDataController.ReloadData()


    // TODO: Requires refactor
    if (to.matched.some(record => !record.meta.requiresAdmin)){
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!store.state.isLoggedIn) { next(Paths.LOG_IN) }
            else { next() }
        } else {
            next()
        }
    }else {
        if (!store.state.userData.isAdmin) {
            next(from.path)
        }
        else{
            next()
        }
    }


})

</script>

<style scoped lang="scss">
#app {
    margin: 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
