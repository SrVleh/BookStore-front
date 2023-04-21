<template>
    <div class="nav">
        <div class="app-logo-container">
            <img src="../../public/book-logo.svg" alt="">
            <h1>BookStore</h1>
        </div>
        <ul>
            <li>
                <router-link :to="Paths.HOME">Home</router-link>
            </li>
            <li>
                <router-link :to="Paths.BOOKS_LIST">Books</router-link>
            </li>
            <li>
                <router-link :to="Paths.NEW_BOOK">Add Book</router-link>
            </li>
            <li>
                <router-link :to="Paths.LOG_IN">Log In</router-link>
            </li>
            <li>
                <router-link :to="Paths.SIGN_UP">Sign up</router-link>
            </li>
        </ul>
        <router-link :to="Paths.SIGN_UP">
            <div class="profile-menu-item"></div>
        </router-link>

    </div>
</template>

<script>
import Paths from "../constants/Paths.js";

export default {
    name: "Navbar",
    computed: {
        Paths() {
            return Paths
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 600px) {
  .nav {
    display: none;

    ul {
      visibility: hidden;
    }
  }
}


.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  background-color: #101010;
  padding: .2rem 4rem;

  .app-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .2rem;
    height: 100%;
    list-style-type: none;
    padding: 0;
    margin-right: 2rem;

    img {
      width: 1.4rem;
      height: 1.4rem;
      margin: 0;
      padding: 0;
    }

    h1 {
      color: #ACFCD9;
      font-size: 1.4rem;
      margin: 0;
      padding: 0;
    }
  }

  ul {
    display: flex;
    gap: .2rem;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 5rem;
      height: 100%;
      transition: all .5s ease-in-out;
      border-radius: 12px;

      a {
        color: white;
        font-weight: normal;
        font-size: 1.2rem;
      }
    }

    li:hover {

      a {
        color: #ACFCD9;
      }
    }
  }

  .profile-menu-item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rebeccapurple;
    transition: all .3s ease-in-out;
  }

  .profile-menu-item:hover {
    transform: scale(1.05);
  }
}

</style>