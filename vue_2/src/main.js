import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CurrencyInput from '@/components/CurrencyInput/index.vue'
import store from '@/store/store'
import pinia from '@/stores/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(pinia)
app.use(ElementPlus)

app.component('CurrencyInput', CurrencyInput)

app.mount('#app')
