import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './assets/main.css'
import './assets/tailwind.css'
import router from './router'

createApp(App).use(store).use(router).mount('#app')
