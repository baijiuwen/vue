import { RouteRecordRaw } from "vue-router";

// @ts-ignore
import layout from '@/layout/index.vue'
// @ts-ignore
import setProperty from '@/views/scss/setProperty.vue'
// @ts-ignore
import whiteSpace from '@/views/scss/whiteSpace.vue'

const defaultRouter: Array<RouteRecordRaw> = [
    {
        path: '/scss',
        name: 'Scss',
        component: layout,
        meta: { title: 'Scss', icon: '', ishidden: true },
        children: [
            {
                path: 'setProperty',
                name: 'setProperty',
                component: setProperty,
                meta: { icon: '', ishidden: true }
            },
            {
                path: 'whiteSpace',
                name: 'whiteSpace',
                component: whiteSpace,
                meta: { icon: '', ishidden: true }
            }
        ]
    },
];

export default defaultRouter