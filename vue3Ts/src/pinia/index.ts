import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(({ store }) => {
    store.$subscribe(() => {
        // 在存储变化的时候执行
    })
    store.$onAction(() => {
        // 在 action 的时候执行
    })
})

export default pinia
