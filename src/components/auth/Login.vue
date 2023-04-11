<template>
    <div class="page-container">
        <div class="login-section">
            <h1>LogIn</h1>
            <input class="custom-input" type="text" placeholder="Username">
            <input class="custom-input" type="password" placeholder="Password">
            <div class="actions-container">
                <button class="custom-btn">Log in</button>
                <p class="pass-forgot">Forgot your <a class="pass-forgot-link" href="#">password</a>?</p>
            </div>
            <p class="account-text">Dont have an account? <a href="#">Sign up!</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
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