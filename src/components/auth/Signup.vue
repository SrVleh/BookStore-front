<template>
  <div class="page-container">
      <div class="signin-section">
          <h1>Sign up</h1>
          <input v-model="userData.name" class="custom-input" type="text" placeholder="Name">
          <input v-model="userData.username" class="custom-input" type="text" placeholder="Username">
          <input v-model="userData.email" class="custom-input" type="email" placeholder="Email">
          <input v-model="userData.pass" class="custom-input" type="password" placeholder="Password">
          <button class="custom-btn" @click="signUp">Sign in</button>
          <p class="account-text">Already have an account? <a href="#">Log in!</a></p>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AuthController from "../../controllers/AuthController.js";

const userData = ref({
    email: '',
    pass: '',
    name: '',
    username: ''
})

const signUp = () => {
    AuthController.SignUp(userData)
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
