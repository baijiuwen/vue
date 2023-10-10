import { RouteRecordRaw } from "vue-router";

// @ts-ignore
import layout from '@/layout/index.vue'
// @ts-ignore
import filters from '@/views/vue3/filters.vue'
// @ts-ignore
import excelT from '@/views/excel/excelT.vue'
// @ts-ignore
import dingWei from '@/views/vue3/dingWei.vue'
// @ts-ignore
import consoleImage from '@/views/vue3/consoleImage.vue'
// @ts-ignore
import computed from '@/views/vue3/computed.vue'


const vue3: Array<RouteRecordRaw> = [
    {
        path: '/vue3',
        name: 'vue3',
        component: layout,
        meta: { title: 'vue3', icon: '', ishidden: true },
        children: [
            {
                path: 'filters',
                name: 'filters',
                component: filters,
                meta: { icon: '', ishidden: true }
            },
            {
                path: 'excelT',
                name: 'excelT',
                component: excelT,
                meta: { icon: '', ishidden: true }
            },
            {
                path: 'dingWei',
                name: 'dingWei',
                component: dingWei,
                meta: { icon: '', ishidden: true }
            },
            {
                path: 'consoleImage',
                name: 'consoleImage',
                component: consoleImage,
                meta: { icon: '', ishidden: true}
            },
            {
                path: 'computed',
                name: 'computed',
                component: computed,
                meta: { icon: '', ishidden: true}
            }
        ]
    },
];

export default vue3