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
            <li v-if="TokenController.GetToken()">
                <button @click="logout">Logout</button>
            </li>
        </ul>
        <router-link :to="Paths.PROFILE_PAGE" v-if="store.state.isLoggedIn">
            <div v-if="store.state.userData.profile_pic" class="profile-menu-item" :style="{ backgroundImage: `url(${ store.state.userData.profile_pic })` }"></div>
            <div v-else class="profile-menu-item" :style="{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg)` }"></div>
        </router-link>

    </div>
</template>

<script setup>
import Paths from "../constants/Paths.js";
import TokenController from "../controllers/TokenController.js";
import {ref, onMounted} from "vue";
import { store } from "../state/index.js";

console.log(store.state.userData)

const profile = ref('')

const logout = (async() => {
    fetch("http://localhost:3000/logout", {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((json) => Promise.reject(json));
            }
        })
        .then((json) => {
            localStorage.clear()
            console.dir(json);
        })
        .catch((err) => console.error(err));
})

onMounted(() => {
    profile.value = JSON.parse(localStorage.getItem("userData"))
})
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
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all .3s ease-in-out;
  }

  .profile-menu-item:hover {
    transform: scale(1.05);
  }
}

</style>