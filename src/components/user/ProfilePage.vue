<template>
  <div class="page-container">
      <Loader v-if="store.state.isLoading" />
      <div class="profile-data-section" v-if="!store.state.isLoading">
          <div class="user-data" v-if="store.state.userData">
            <router-link :to="'/edit_profile_pic/'" class="edit-pic"></router-link>
            <div v-if="store.state.userData.profile_pic != null" class="user-profile-picture" :style="{ backgroundImage: `url(${store.state.userData.profile_pic})` }"></div>
            <div v-else class="user-profile-picture" :style="{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg)` }"></div>
            <p class="username"> {{ store.state.userData.username }} </p>
            <p class="books-count">{{ bookCount }} Books</p>
          </div>

          <div class="orders-section" v-if="orders">
              <div class="order" v-for="order in orders" :key="order.id">
                  <p class="order-details">Books: {{ order.books_count }}</p>
                  <p class="order-details">Price: {{ order.total_price }}€</p>
                  <p class="order-details">{{ order.created_at.split('T')[0] }}</p>
                  <button class="delete-btn" @click="deleteOrder(order.id)"></button>
                  <div class="order-status"
                       :style="{ backgroundImage: `url(${ order.order_completed ? '../../../public/order_completed.svg' : '../../../public/ongoing_order.svg' })`}"></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
  import { store } from "../../state/index.js";
  import { onMounted, ref } from "vue";
  import OrdersController from "../../controllers/OrdersController.js";
  import Loader from "../shared/Loader.vue";
  import StateController from "../../controllers/StateController.js";

  const orders = ref({})
  const bookCount = ref(0)

  onMounted(async() => {
      StateController.ChangeLoadingState(true)
      orders.value = await OrdersController.GetOrderList()
      calculateAllOrderedBooks()
      StateController.ChangeLoadingState(false)
  })

  const deleteOrder = async(id) => {
      await OrdersController.DeleteOrder(id)
      orders.value = await OrdersController.GetOrderList()
  }

  const calculateAllOrderedBooks = () => {
      orders.value.forEach(order => {
          bookCount.value += order.books_count
      })
  }
</script>

<style scoped>
  .page-container {
      .profile-data-section {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          min-height: 10rem;
          padding: 1rem;
          border-radius: 16px;
          gap: 5rem;

          .user-data {
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 25%;
              height: auto;

              .edit-pic {
                  position: absolute;
                  width: 1.6rem;
                  height: 1.6rem;
                  right: 0;
                  background-image: url("../../../public/edit-icon.svg");
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-position: center;
              }

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

          .orders-section {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: .5rem;
              width: 100%;
              height: auto;

              .order:first-child {
                  border-radius: 12px 12px 3px 3px;
              }

              .order {
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  width: 60%;
                  height: 4.2rem;
                  background-color: #101010;
                  border-radius: 3px;
                  padding: 1rem;
                  cursor: pointer;
                  transition: all .3s ease-in-out;

                  .order-details {
                      font-size: 1.2rem;
                      font-weight: bolder;
                      color: #d2d2d2;
                  }

                  .delete-btn {
                      width: 1.5rem;
                      height: 1.5rem;
                      background-image: url("../../../public/delete-icon-green.svg");
                      background-size: contain;
                      background-repeat: no-repeat;
                      background-position: center;
                      transition: all .2s ease-in-out;
                      padding: 0;
                  }

                  .delete-btn:hover {
                      transform: scale(1.1);
                      background-image: url("../../../public/delete-icon.svg");
                  }

                  .order-status {
                      width: 1.5rem;
                      height: 1.5rem;
                      background-size: contain;
                      background-repeat: no-repeat;
                      background-position: center;
                  }
              }

              .order:last-child {
                  border-radius: 3px 3px 12px 12px;
              }

              .order:hover {
                  transform: scale(1.03);

                  .order-details {
                      color: #ACFCD9;
                  }
              }
          }
      }
  }
</style>
