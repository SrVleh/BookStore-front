<template>
    <div class="page-container">
        <div class="login-section">
            <h1>LogIn</h1>
            <input v-model="userEmail" class="custom-input" type="text" placeholder="Username">
            <input v-model="userPass" class="custom-input" type="password" placeholder="Password">
            <div class="actions-container">
                <button class="custom-btn" @click="login">Log in</button>
                <p class="pass-forgot">Forgot your <a class="pass-forgot-link" href="#">password</a>?</p>
            </div>
            <p class="account-text">Dont have an account? <a href="#">Sign up!</a></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const userEmail = ref('')
const userPass = ref('')
const login = async () => {
    fetch("http://localhost:3000/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                email: userEmail.value,
                password: userPass.value,
            },
        }),
    })
      .then((res) => {
          if (res.ok) {
              console.log(res.headers.get("Authorization"));
              localStorage.setItem("token", res.headers.get("Authorization"));
              return res.json();
          } else {
              throw new Error(res);
          }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
}
</script>

<style scoped lang="scss">
.login-section {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 2rem;
  width: 100%;

  .actions-container {
    display: flex;
    flex-direction: column;
    width: 35%;
    gap: .8rem;

    .custom-btn {
        width: 100%;
    }

    .pass-forgot {
      font-weight: lighter;
      font-size: .8rem;

      .pass-forgot-link {
        font-weight: bolder;
        color: #747bff;
        cursor: pointer;
      }
    }
  }
}
</style>