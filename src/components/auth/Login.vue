<template>
    <div class="page-container">
        <div class="login-section">
            <h1>Log In</h1>
            <input class="custom-input" type="text" placeholder="Username">
            <input class="custom-input" type="password" placeholder="Password">
            <div class="actions-container">
                <button class="custom-btn">Log in</button>
                <p class="pass-forgot">Forgot your <a class="pass-forgot-link" href="#">password</a>?</p>
            </div>
            <p class="sign-up">Dont have an account? <a href="#">Sign up!</a></p>
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

  .custom-input {
    width: 35%;
    height: 2.5rem;
    padding: .8rem;
    background-color: #101010;
    border: 1px solid rgb(172, 252, 217);
    border-radius: 8px;
    color: #cbcbcb;
    font-weight: bolder;
    transition: all .5s ease-in-out;
  }

  .custom-input::placeholder {
    font-weight: normal;
    color: #737373;
  }

  .custom-input:focus-visible {
    transform: scale(1.05);
    outline: 1px solid rgb(172, 252, 217);
  }

  .actions-container {
    display: flex;
    flex-direction: column;
    width: 35%;
    gap: .8rem;

    .custom-btn {
      width: 100%;
      height: 2.5rem;
      border: 1px solid rgb(172, 252, 217);
      color: #ACFCD9;
      font-size: 1.2rem;
      font-weight: bolder;
      margin-top: 2rem;
      transition: all .5s ease-in-out;
      padding: .1rem;
    }

    .custom-btn:hover {
      transform: scale(1.1);
      background-color: #ACFCD9;
      color: #1a1a1a;
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

  .sign-up {
    a {
      font-weight: bolder;
      color: #ACFCD9;
      cursor: pointer;
      transition: all .5s ease-in-out;
    }
    a:hover {
      color: #00ab5f;
    }
  }
}
</style>