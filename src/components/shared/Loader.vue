<template>
    <span class="loader"></span>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style scoped>
  .loader {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 6rem;
      margin-top: 3rem;
      margin-bottom: 3rem;
  }
  .loader:before,
  .loader:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      animation: pulsOut 1.8s ease-in-out infinite;
      filter: drop-shadow(0 0 1rem rgba(var(--main), .75));
  }
  .loader:before {
      width: 100%;
      padding-bottom: 100%;
      box-shadow: inset 0 0 0 1rem var(--main);
      animation-name: pulsIn;
  }
  .loader:after {
      width: calc(100% - 2rem);
      padding-bottom: calc(100% - 2rem);
      box-shadow: 0 0 0 0 var(--main);
  }

  @keyframes pulsIn {
      0% {
          box-shadow: inset 0 0 0 1rem var(--main);
          opacity: 1;
      }
      50%, 100% {
          box-shadow: inset 0 0 0 0 var(--main);
          opacity: 0;
      }
  }

  @keyframes pulsOut {
      0%, 50% {
          box-shadow: 0 0 0 0 var(--main);
          opacity: 0;
      }
      100% {
          box-shadow: 0 0 0 1rem var(--main);
          opacity: 1;
      }
  }
</style>