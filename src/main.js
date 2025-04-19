import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router'
import store from './store'



const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
