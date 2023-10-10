import { RouteRecordRaw } from 'vue-router'

const routerUtils: Array<RouteRecordRaw> = [
    {
        path: '/utils',
        name: 'utils',
        component: () => import("@/views/utils.vue"),
        meta: {
            title: '小功能'
        },
    }
]

export { routerUtils }