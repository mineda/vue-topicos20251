import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'https://reimagined-space-pancake-jp5v55p5wqhp477-8080.app.github.dev/'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
