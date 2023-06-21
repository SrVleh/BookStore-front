<template>
    <div class="nav">
        <router-link :to="Paths.HOME">
            <div class="app-logo-container">
                <img src="../../public/images/book-logo.svg" alt="">
                <h1>BookStore</h1>
            </div>
        </router-link>

        <ul>
            <li>
                <router-link :to="Paths.HOME">Home</router-link>
            </li>
            <li v-if="store.state.isLoggedIn">
                <router-link :to="Paths.BOOKS_LIST">Books</router-link>
            </li>
            <li v-if="store.state.userData.isAdmin && store.state.isLoggedIn">
                <router-link :to="Paths.NEW_BOOK">Add Book</router-link>
            </li>
            <li v-if="!store.state.isLoggedIn">
                <router-link :to="Paths.LOG_IN">Log In</router-link>
            </li>
            <li v-if="!store.state.isLoggedIn">
                <router-link :to="Paths.SIGN_UP">Sign up</router-link>
            </li>
            <li v-if="store.state.isLoggedIn">
                <button @click="logout">Logout</button>
            </li>
        </ul>

        <div class="user-section" v-if="store.state.isLoggedIn">
            <router-link :to="Paths.CART" class="cart">
                <div v-if="store.state.isOngoingOrder" class="product-notification"></div>
            </router-link>

            <router-link :to="Paths.PROFILE_PAGE">
                <div v-if="store.state.userData.profile_pic != null" class="profile-menu-item"
                     :style="{ backgroundImage: `url(${ store.state.userData.profile_pic })` }"></div>
                <div v-else class="profile-menu-item"
                     :style="{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg)` }"></div>
            </router-link>
        </div>

    </div>
</template>

<script setup>
import Paths from "../constants/Paths.js";
import {store} from "../state/index.js";
import AuthController from "../controllers/AuthController.js";

const logout = () => {
    AuthController.Logout()
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
  box-sizing: border-box;

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
      color: var(--main);
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
        color: var(--text);
        font-weight: normal;
        font-size: 1.2rem;
      }

      button {
        color: var(--text);
        font-weight: normal;
        font-size: 1.2rem;
      }
    }

    li:hover {
      a {
        color: var(--main);
      }

      button {
        color: #EF5B5B;
      }
    }
  }

  .user-section {
    display: flex;
    align-items: center;
    gap: 1rem;

    .profile-menu-item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: all .3s ease-in-out;
    }

    .profile-menu-item:hover {
      transform: scale(1.05);
    }

    .cart {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("images/cart_icon.svg");
      cursor: pointer;
      transition: all .3s ease-in-out;

      .product-notification {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
      }
    }

    .cart:hover {
      transform: scale(1.05);
    }
  }
}
</style>
