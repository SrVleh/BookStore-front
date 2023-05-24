<template>
    <div class="page-container">
        <div class="hero-section">
            <h1>Generated with <b>Vite</b></h1>
            <p>Made with <b class="vue-text">Vue</b> as front and <b class="ruby-text">Ruby on Rails</b> as backend.
                The whole point of this app is as simple as practice and learn.
                Here you have some lipsum:
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                At consequatur distinctio dolorem eius enim, est harum magnam, maxime molestiae non,
                obcaecati odio omnis optio quaerat rem repellat velit. Corporis, soluta?
            </p>
        </div>


       <router-link v-if="store.state.isLoggedIn" class="btn action-btn" :to="Paths.BOOKS_LIST">Go to books list</router-link>
       <router-link v-else class="btn action-btn" :to="Paths.LOG_IN">Login</router-link>
    </div>
</template>

<script>
import Paths from "../constants/Paths.js";
import {store} from "../state/index.js";

export default {
    name: "Home",
    computed: {
        store() {
            return store
        },
        Paths() {
            return Paths
        }
    }
}
</script>

<style scoped lang="scss">
    .page-container{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 75%;
        height: 25rem;
        gap: 2rem;


        h1 {
            font-size: 5rem;
            font-weight: bolder;

            b {
                color: #905cf0;
            }
        }

        p {
            font-size: 1.2rem;
            font-weight: lighter;
        }

        .vue-text{
            color: #3bb07f;
            font-weight: bolder;

        }

        .ruby-text {
            color: #ec4038;
            font-weight: bolder;
        }

    }
</style>