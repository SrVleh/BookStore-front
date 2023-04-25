<template>
  <div class="page-container">
      <div class="signin-section">
          <h1>SignIn</h1>
          <input v-model="name" class="custom-input" type="text" placeholder="Name">
          <input v-model="username" class="custom-input" type="text" placeholder="Username">
          <input v-model="email" class="custom-input" type="email" placeholder="Email">
          <input v-model="pass" class="custom-input" type="password" placeholder="Password">
          <button class="custom-btn" @click="signUp">Sign in</button>
          <p class="account-text">Already have an account? <a href="#">Log in!</a></p>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RouterController from "../../controllers/RouterController.js";
import Paths from "../../constants/Paths.js";

const name = ref('')
const username = ref('')
const email = ref('')
const pass = ref('')
const signUp = async () => {
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                name: name.value,
                username: username.value,
                email: email.value,
                password: pass.value,
            },
        }),
    })
      .then((res) => {
          if (res.ok) {
              RouterController.NavigateTo(Paths.LOG_IN)
              return res.json();
          } else {
              throw new Error(res);
          }
      })
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
}
</script>

<style scoped lang="scss">
  .signin-section {
      display: flex;
      flex-direction: column;
      place-items: center;
      gap: 2rem;
      width: 100%;

    .custom-btn {
      width: 35%;
    }
  }
</style>