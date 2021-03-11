<template>
  <div class="container mx-auto">
    <div class="mt-3">
      <div class="grid grid-cols-12 gap-4 mx-10">
        <div class="col-span-6   space-y-4 px-1"
             style="height: 500px">
              <h2 class="mt-8 text-2xl">Hotels</h2>
          <div v-for="(hotel, index) in state.hotels.data"
               :key="index"
               class="p-8 bg-white shadow-md rounded flex items-center justify-between">
            <div>
              <div>{{ hotel.name }}</div>
              <div class="text-gray-500 text-sm">{{ hotel.address }}</div>
            </div>
          </div>
          <div v-if="state.hotels.length === 0"
               class="px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm">
            You dont have any task to do.
          </div>
        </div>
           <div class="col-span-6 ml-6 space-y-4 px-1"
             style="height: 500px">
              <h2 class="mt-8 text-2xl">Rooms</h2>
          <div v-for="(room, index) in state.rooms.data"
               :key="index"
               class="p-8 bg-white shadow-md rounded flex items-center justify-between">
            <div>
              <div>Number: {{ room.number }} and Hotel id: {{ room.hotel_id }} </div>
              <div class="text-gray-500 text-sm">Price: {{ room.price }}</div>
            </div>
          </div>
          <div v-if="state.hotels.length === 0"
               class="px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm">
            You dont have any task to do.
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      hotels: [],
      rooms: [],
    });
    function getHotels() {
      axios.get(process.env.VUE_APP_BASE_API_URL + 'api/hotel')
        .then(response => {
          state.hotels = response.data;
          console.log(state.hotels);
        });
    }

    function getRooms() {
      axios.get(process.env.VUE_APP_BASE_API_URL + 'api/room')
        .then(response => {
          state.rooms = response.data;
          console.log(state.rooms);
        });
    }
    getHotels();
    getRooms();
    return {
      state
    };
  },
});
</script>