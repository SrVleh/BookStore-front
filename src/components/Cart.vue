<template>
  <div class="page-container">
      <div class="order-info-container" v-if="store.state.isOngoingOrder">
          <router-link :to="Paths.PROFILE_PAGE" class="btn action-btn"
                       @click="completePurchase">Complete purchase</router-link>
      </div>
      <div class="no-order-container" v-else>
          <p class="no-ongoing-order">There is no ongoing order...</p>
          <div class="sad-icon"></div>
      </div>
  </div>
</template>

<script setup>
  import OrdersController from "../controllers/OrdersController.js";
  import Paths from "../constants/Paths.js";
  import {store} from "../state/index.js";
  import {onMounted} from "vue";

  onMounted(() => {

  })

  const completePurchase = () => {
      OrdersController.CheckOngoingOrder().then((order) => {
          OrdersController.CompleteOngoingOrder(order[0].id)
      })
  }
</script>

<style scoped>

  .order-info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
  }

  .no-order-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: 100%;
      height: 100%;

      .no-ongoing-order {
          font-size: 2rem;
      }

      .sad-icon {
          width: 8rem;
          height: 8rem;
          background-image: url("../../public/sad-icon.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
      }
  }

</style>