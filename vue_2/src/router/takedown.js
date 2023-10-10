export const takedown = [
    {
        path: '/takedown',
        component: () => import('@/views/takedown.vue')
    },
    {
        path: '/takedown/csshtml',
        component: () => import('@/views/takedown/csshtml.vue'),
        meta: { title: 'takedown' }
    }
]