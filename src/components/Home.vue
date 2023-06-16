<template>
    <div class="container">
        <div class="hero-section">
            <p class="title">Buy and rate your favorite <span class="gradient-text">BOOKS</span></p>
            <p class="app-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consectetur dignissimos eum fugiat id inventore ipsa laboriosam modi
                molestiae nisi nulla possimus reprehenderit sapiente soluta, suscipit, tempore
                velit voluptate voluptatum.</p>
            <button v-if="store.state.isLoggedIn" @click="navigateTo(Paths.BOOKS_LIST)" class="btn">Books</button>
            <button v-else @click="navigateTo(Paths.LOG_IN)" class="btn">Log in</button>
        </div>

    </div>

<!--    <div class="page-container">
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
    </div>-->
</template>

<script setup>
import Paths from "../constants/Paths.js";
import { store } from "../state/index.js";
import RouterController from "../controllers/RouterController.js";

const navigateTo = (path) => {
    RouterController.NavigateTo(path)
}
</script>

<style scoped lang="scss">
    // NEW
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: calc(100% - 6.4rem);
        box-sizing: border-box;
        padding: 0 4rem;
        background: rgba(0, 0, 0, 0.35);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);

        .hero-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: 2rem;

            .title {
                font-size: 2.6rem;
                font-family: OpenSans-Medium;
                line-height: 1.5;
                color: #d7d7d7;

                span {
                    font-family: OpenSans-Bold;
                }
            }

            .app-description {
                width: 50%;
                font-size: 1rem;
                font-family: OpenSans-Light;
                line-height: 1.8;
                color: #d7d7d7;
            }
        }
    }


    //OLD
    /*.page-container{
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
    }*/
</style>
