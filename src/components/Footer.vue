<template>
  <div class="footer-container">
    <p>Made by <a href="https://github.com/SrVleh">SrVleh</a></p>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    background-color: #101010;
    padding: .2rem 4rem;
    margin-top: auto;

    a {
      color: #ACFCD9;
      font-weight: bolder;
    }
  }
</style>