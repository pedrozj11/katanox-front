<template>
<div class="flex mt-20 items-center justify-center">
        <div class="w-full max-w-md">
           <template v-if="!this.$store.getters.auth">
     
          <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" @submit.prevent="login">
            <div
              class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
             Login
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="username"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autofocus
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
             <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700">Sign In</button>
          </form>
           </template>
            <template v-if="this.$store.getters.auth">
           <router-link  to="/hotels" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Logged. Click here and go to see the Hotels and Rooms</router-link>
      </template>
        </div>
  
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
  user : {},
  data: () => ({  
      form: {
        email: '',
        password: '',
      }
  }),
  methods: {
    async login() {   
      await this.$store.dispatch('login', this.form);
    }
  },
}
</script>
