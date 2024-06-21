import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vueDebounce from 'vue-debounce'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('debounce', vueDebounce({ lock: true }))
app.mount('#app')
