import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const env = import.meta.env;
if(env.DEV) {
  console.log(env)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
