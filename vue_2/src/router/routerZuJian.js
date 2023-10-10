export const routerZuJian = [
    {
        path: '/number/index_1',
        component: () => import('@/views/number/index_1.vue')
    },
    {
        path: '/windowwidth/index_1',
        component: () => import('@/views/windowwidth/index_1.vue')
    },
    {
        path: '/tagInput/index',
        name: 'tagInput',
        component: () => import('@/views/tagInput/index.vue'),
        meta: {
            title: 'tagInput'
        }
    }
]