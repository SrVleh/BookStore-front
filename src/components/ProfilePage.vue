<template>
  <div class="page-container">
      <div class="profile-data-section">
          <div class="user-data" v-if="store.state.userData">
            <div v-if="store.state.userData.profile_pic != null" class="user-profile-picture" :style="{ backgroundImage: `url(${store.state.userData.profile_pic})` }"></div>
            <div v-else class="user-profile-picture" :style="{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg)` }"></div>
            <p class="username"> {{ store.state.userData.username }} </p>
            <p class="books-count">234 Books</p>
          </div>
      </div>
      <button @click="datachange">data change</button>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { store } from "../state/index.js";

  const profile = ref({})

  const datachange = () => {
      store.commit('storeUserData', profile.value)
  }
</script>

<style scoped>
  .page-container {

      .profile-data-section {
          display: flex;
          justify-content: center;
          width: 100%;
          min-height: 10rem;
          padding: 1rem;
          border-radius: 16px;
          gap: 2rem;

          .user-data {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 25%;
              height: 100%;

              .user-profile-picture {
                  width: 8rem;
                  height: 8rem;
                  border-radius: 50%;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
              }

              .username {
                  font-size: 1.2rem;
                  font-weight: bolder;
              }

              .books-count {
                  font-weight: bolder;
                  font-size: .9rem;
                  color: #6c6c6c;
              }
          }
      }
  }
</style>