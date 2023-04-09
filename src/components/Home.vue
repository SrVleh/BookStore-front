<template>
    <div class="page-container">
        <div class="hero-section">
            <div class="info-container">
                <h1>Bookstore</h1>
                <p>Made with <b>Vue</b> as front and <b>Ruby on Rails</b> as backend.
                    The whole point of this app is as simple as practice and learn.
                    Here you have some lipsum:
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At consequatur distinctio dolorem eius enim, est harum magnam, maxime molestiae non,
                    obcaecati odio omnis optio quaerat rem repellat velit. Corporis, soluta?
                </p>
            </div>
            <div class="image-container"></div>
        </div>

        <button class="action-btn">Go to books list</button>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped lang="scss">
    .hero-section {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        height: 25rem;
        gap: 2rem;

        .info-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 60%;
            height: 100%;
            text-align: left;
            gap: 1rem;

            h1 {
                font-size: 5rem;
                font-weight: bolder;
                color: #FA9F42;
            }

            p {
                font-size: 1.2rem;
                font-weight: lighter;
            }

            b {
                color: #FA9F42;
            }
        }

        .image-container {
            width: 25%;
            height: auto;
            background-image: url("../../public/book-logo.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    .action-btn {
        width: 14rem;
        height: 3.7rem;
        border: 1px solid #FA9F42;
        color: #FA9F42;
        font-size: 1.2rem;
        font-weight: bolder;
        margin-top: 2rem;
        transition: all .3s ease-in-out;
    }

    .action-btn:hover {
        scale: (1.1);
        background-color: #FA9F42;
        color: #fff;
    }

</style>