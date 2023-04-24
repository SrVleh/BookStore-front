<template>
  <div class="page-container">
      <div class="profile-data-section">
          <div class="user-data">
            <div class="user-profile-picture" :style="{ backgroundImage: 'url(https://i.redd.it/v0caqchbtn741.jpg)' }"></div>
            <p class="username">Username</p>
            <p class="books-count">234 Books</p>
          </div>
      </div>
  </div>
</template>

<script setup>
  import {onMounted} from "vue";

  onMounted( async() => {
      fetch("http://localhost:3000/profile_page", {
          headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
          },
      })
          .then((res) => {
              if (res.ok) {
                  return res.json();
              } else if (res.status == "401") {
                  throw new Error("Unauthorized Request. Must be signed in.");
              }
          })
          .then((json) => console.dir(json))
          .catch((err) => console.error(err));
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