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


       <router-link class="btn action-btn" :to="Paths.BOOKS_LIST">Go to books list</router-link>
    </div>
</template>

<script>
import Paths from "../constants/Paths.js";

export default {
    name: "Home",
    computed: {
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

    .action-btn {
        width: 14rem;
        height: 3.7rem;
        border: 1px solid #ACFCD9;
        color: #ACFCD9;
        font-size: 1.2rem;
        font-weight: bolder;
        margin-top: 2rem;
        transition: all .5s ease-in-out;
        padding: .9rem;
    }

    .action-btn:hover {
        transform: scale(1.1);
        background-color: #ACFCD9;
        color: #1a1a1a;
    }

</style>