<template>
  <div class="page-container">
      <router-link :to="Paths.PROFILE_PAGE" class="btn action-btn"
                   @click="completePurchase">Complete purchase</router-link>
  </div>
</template>

<script setup>
  import OrdersController from "../controllers/OrdersController.js";
  import Paths from "../constants/Paths.js";

  const completePurchase = () => {
      OrdersController.CheckOngoingOrder().then((order) => {
          OrdersController.CompleteOngoingOrder(order[0].id)
      })
  }
</script>

<style scoped>

</style>