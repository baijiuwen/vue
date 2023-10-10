import { RouteRecordRaw } from "vue-router";

// @ts-ignore
import layout from '@/layout/index.vue'
// @ts-ignore
import editTable from '@/views/vxeTable/editTable.vue'


const defaultRouter: Array<RouteRecordRaw> = [
    {
        path: '/vxeTable',
        name: 'vxeTable',
        component: layout,
        meta: { title: 'vxeTable', icon: '', ishidden: true },
        children: [
            {
                name: 'editTable',
                path: 'editTable',
                component: editTable,
                meta: { icon: '', ishidden: true }
            }
        ]
    }
];

export default defaultRouter