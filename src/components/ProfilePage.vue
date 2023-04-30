<template>
  <div class="page-container">
      <div class="profile-data-section">
          <div class="user-data" v-if="profile">
            <div v-if="profile.profile_pic != null" class="user-profile-picture" :style="{ backgroundImage: `url(${profile.profile_pic})` }"></div>
            <div v-else class="user-profile-picture" :style="{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg)` }"></div>
            <p class="username"> {{ profile.username }} </p>
            <p class="books-count">234 Books</p>
          </div>
      </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import TokenController from "../controllers/TokenController.js";

  const profile = ref({})

  onMounted( () => {
     profile.value = JSON.parse(localStorage.getItem("userData"))
     console.log(profile.value.name)
  })
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