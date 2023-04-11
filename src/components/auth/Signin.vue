<template>
  <div class="page-container">
      <div class="signin-section">
          <h1>SignIn</h1>
          <input class="custom-input" type="text" placeholder="Name">
          <input class="custom-input" type="text" placeholder="Username">
          <input class="custom-input" type="email" placeholder="Email">
          <input class="custom-input" type="password" placeholder="Password">
          <button class="custom-btn">Sign in</button>
          <p class="account-text">Already have an account? <a href="#">Log in!</a></p>
      </div>
  </div>
</template>

<script>
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