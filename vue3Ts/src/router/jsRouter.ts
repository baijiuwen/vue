import { RouteRecordRaw } from "vue-router";

// @ts-ignore
import layout from '@/layout/index.vue'
// @ts-ignore
import some from '@/views/js/some.vue'

const defaultRouter: Array<RouteRecordRaw> = [
    {
        path: '/js',
        name: 'JavaScript',
        component: layout,
        meta: { title: 'JavaScript', icon: '', ishidden: true },
        children: [
            {
                path: 'some',
                name: 'some',
                component: some,
                meta: { icon: '', ishidden: true }
            }
        ]
    },
];

export default defaultRouter