<template class="d-flex flex-row">
    <div class="mb-4" v-for="book in books" :key="book.id">
        <v-card
                class="mx-auto d-flex flex-column justify-start"
                max-width="344"
        >
            <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    cover
            ></v-img>

            <div class="mx-auto d-flex flex-column justify-start">
                <v-card-title class="text-left">
                    {{ book.title }}
                </v-card-title>

                <v-card-subtitle class="text-left">
                    {{ book.author }}
                </v-card-subtitle>

                <v-card-text
                        class="font-weight-black text-orange text-left"
                        color="orange-lighten-2"
                        variant="text"
                >
                    {{ book.price }}€
                </v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script setup>
  import {ref, onMounted} from 'vue';

  const books = ref([])
  const title = ref('')
  const author = ref('')
  const price = ref(0)
  const book_id = ref(0)
  const API_URL = "http://localhost:3000/books"

  onMounted(async() => {
      try {
          const res = await fetch(API_URL);
          books.value = await res.json();
      } catch(e){
          books.value = [];
      }

  })

</script>

<style scoped>

</style>
