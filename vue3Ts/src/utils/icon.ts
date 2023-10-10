import {createVNode} from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function initIcons(app: any) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }

    // 创建Icon组件
    const Icon = (props: { icon: string, size: string }) => {
        const { icon, size } = props

        return createVNode(ElementPlusIconsVue[icon as keyof typeof ElementPlusIconsVue], { size: size })
    }
    // 注册Icon组件
    app.component('Icon', Icon)
}