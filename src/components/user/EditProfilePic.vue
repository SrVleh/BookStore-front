<template>
  <div class="page-container">
      <div class="edit-prof-container">
          <div v-if="prof_pic" class="profile-pic-selected" :style="{ backgroundImage: `url(${ prof_pic })`}"></div>
          <input v-model="prof_pic" class="custom-input" type="text" placeholder="Profile pic URL">
          <button class="custom-btn" @click="updateProfilePicture">Update!</button>
      </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import UserDataController from "../../controllers/UserDataController.js";

  const prof_pic = ref('')
  const updateProfilePicture = () => {
      UserDataController.UpdateProfilePic(prof_pic.value)
  }
</script>

<style scoped>

.page-container {
    flex-direction: column;
    align-items: center;

    .edit-prof-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        min-width: 35%;

        .custom-input {
            width: 100%;
        }

        .custom-btn {
            margin: 0;
        }

        .profile-pic-selected {
            width: 10rem;
            height: 10rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
}

</style>