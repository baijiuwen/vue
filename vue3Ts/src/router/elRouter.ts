import { RouteRecordRaw } from "vue-router";

// @ts-ignore
import layout from '@/layout/index.vue'
// @ts-ignore
import elTable from '@/views/elPlus/elTable.vue'
// @ts-ignore
import elDialog from '@/views/elPlus/elDialog.vue'
// @ts-ignore
import elTabs from '@/views/elPlus/elTabs.vue'
// @ts-ignore
import editTable from '@/views/elPlus/editTable.vue'
// @ts-ignore
import editTable2 from '@/views/elPlus/editTable2.vue'
// @ts-ignore
import editTable3 from '@/views/elPlus/editTable3.vue'
// @ts-ignore
import elTableSelect from '@/views/elPlus/elTableSelect.vue'
// @ts-ignore
import elicons from '@/views/elPlus/elIcons.vue'
// @ts-ignore
import trendsSidebar from '@/views/elPlus/trendsSidebar.vue'
// @ts-ignore
import elImage from '@/views/vue3/consoleImage.vue'
// @ts-ignore
import elPagination from '@/views/elPlus/elPagination.vue'


const defaultRouter: Array<RouteRecordRaw> = [
    {
        path: '/elPlus',
        name: 'Element-Plus',
        component: layout,
        meta: { title: 'Element-Plus', icon: 'ElementPlus', ishidden: true },
        children: [
            {
                name: 'elTable',
                path: 'elTable',
                component: elTable,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'elDialog',
                path: 'elDialog',
                component: elDialog,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'elTabs',
                path: 'elTabs',
                component: elTabs,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'editTable',
                path: 'editTable',
                component: editTable,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'editTable2',
                path: 'editTable2',
                component: editTable2,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'editTable3',
                path: 'editTable3',
                component: editTable3,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'elTableSelect',
                path: 'elTableSelect',
                component: elTableSelect,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'elicons',
                path: 'elicons',
                component: elicons,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'trendsSidebar',
                path: 'trendsSidebar',
                component: trendsSidebar,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'elImage',
                path: 'elImage',
                component: elImage,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'elPagination',
                path: 'elPagination',
                component: elPagination,
                meta: { icon: '', ishidden: true }
            }
             
        ]
    }
];

export default defaultRouter