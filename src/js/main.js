// Bootstrap
import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.css'

import App from '../App.vue'
import router from './router'

import { createApp } from 'vue'

createApp(App).use(router).mount('#app')
