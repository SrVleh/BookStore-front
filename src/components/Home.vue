<template>
    <div class="container">
        <div class="hero-section">
            <p class="title">Buy, read and rate your favorite <span>BOOKS</span></p>
            <p class="app-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consectetur dignissimos eum fugiat id inventore ipsa laboriosam modi
                molestiae nisi nulla possimus reprehenderit sapiente soluta, suscipit, tempore
                velit voluptate voluptatum.</p>
            <button v-if="store.state.isLoggedIn" @click="navigateTo(Paths.BOOKS_LIST)" class="btn">Books</button>
            <div v-else class="btns-container">
                <button  @click="navigateTo(Paths.LOG_IN)" class="btn">Log in</button>
                <button  @click="navigateTo(Paths.SIGN_UP)" class="btn secondary">Sign up</button>
            </div>
        </div>
        <div class="image-section">
            <div class="reading-time-image"></div>
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(100% - 6.4rem);
    box-sizing: border-box;
    padding: 0 4rem;
    background-color: var(--background);

    .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 40%;
        height: 100%;
        gap: 1rem;

        .title {
            font-size: 2.4rem;
            font-family: OpenSans-Bold;
            line-height: 1.5;
            color: var(--text);
            text-align: left;

            span {
                font-family: OpenSans-ExtraBold;
                color: var(--main);
            }
        }

        .app-description {
            font-size: 1rem;
            font-family: OpenSans-Light;
            line-height: 1.8;
            color: var(--text);
            text-align: left;
        }

        .btns-container {
            display: flex;
            gap: 1rem;
        }
    }

    .image-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;

        .reading-time-image {
            width: 100%;
            height: 100%;
            background-image: url("../../public/images/reading_time.svg");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
    }
}

@media (width <= 820px) {
    .container {
        flex-direction: column;
        height: auto;
        padding: 4rem 2rem;
        gap: 2rem;

        .hero-section {
            align-items: center;
            width: 100%;
            height: 40%;

            .title {
                text-align: center;
            }

            .app-description {
                text-align: center;
            }
        }

        .image-section {
            width: 100%;
            height: 20rem;
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
