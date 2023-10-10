import { RouteRecordRaw } from 'vue-router'

const routerTs: Array<RouteRecordRaw> = [
    {
        path: '/ts',
        name: 'ts',
        component: () => import("@/views/setupTs.vue"),
        meta: {
            title: 'ts'
        },
    },
    {
        path: '/ts/pinia',
        name: 'pinia',
        component: () => import("@/views/setupTs/pinia/index_1.vue"),
        meta: {
            title: 'pinia'
        }
    },
    {
        path: '/ts/watch',
        name: 'watch',
        component: () => import("@/views/setupTs/watch/index_1.vue"),
        meta: {
            title: 'watch'
        }
    },
    {
        path: '/ts/elementPlus/array',
        name: 'array',
        component: () => import("@/views/elementPlus/array.vue"),
        meta: {
            title: 'array'
        }
    },
    {
        path: '/ts/test',
        name: 'test',
        component: () => import("@/views/setupTs/test.vue"),
        meta: {
            title: 'test'
        }
    }
]

export { routerTs }