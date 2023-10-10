export const routerSetup = [
    {
        path: '/setup/index_1',
        component: () => import('@/views/setup/index_1.vue')
    },
    {
        path: '/router/index_1',
        component: () => import('@/views/router/index_1.vue'),
        children: [
            {
                path: 'about',
                component: () => import('@/views/router/index_1/about.vue'),
                children: [
                    {
                        path: 'son1',
                        component: () => import('@/views/router/index_1/son1.vue'),
                        name: 'SonName1'
                    },
                    {
                        path: 'son2',
                        component: () => import('@/views/router/index_1/son2.vue'),
                        name: 'SonName2'
                    }
                ]
            },
            {
                path: 'user/:id(\\d+)+',    // *（0或多个） +（1或多个）?（0或1个）
                components: {
                    default: () => import('@/views/router/index_1/user.vue'),
                    view1: () => import('@/views/router/index_1/son1.vue'), 
                    view2: () => import('@/views/router/index_1/son2.vue')
                },
                name: 'user'
            },
            {
                path: 'meta',
                component: () => import('@/views/router/index_1/meta.vue')
            }
        ]
    },
    {
        path: '/store/store',
        component: () => import('@/views/store/store.vue')
    }
]