<template>

<div class="flex items-center justify-center">
        <div class="w-full max-w-md">
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
        </div>
          <div class="container mx-auto">
    <h1 class="mt-8 text-2xl">Register</h1>
    <div class="mt-8"> 
      <form @submit.prevent="register">
        <input type="email" placeholder="Email" v-model="form.email">
        <input type="password" placeholder="Password" v-model="form.password">
        <button>Login</button>
      </form>
    </div>
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
        email: 'pedro@gmail.com',
        password: '1234',
      }
  }),
  methods: {
    login() {
      console.log('entro')
      this.$store.dispatch('login', this.form).then(() => {
        console.log('funca');
      }); 
    },
    register() {
       axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(res => {
          console.log(res);
        axios.post('http://127.0.0.1:8000/register',  this.form).then( res => {
        console.log(res);
      })
       })
      
    }
  },
}
</script>
