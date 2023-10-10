import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import pinia from '@/pinia/index'
// 全局样式
import '@/assets/style/index.scss'
// icons
import { initIcons } from '@/utils/icon'
// vxe-table
import { useTable } from '@/utils/vxeTable'


const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(TDesign)
app.use(useTable)

app.mount('#app')

initIcons(app);


