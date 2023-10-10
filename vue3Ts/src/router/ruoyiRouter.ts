import { RouteRecordRaw } from "vue-router";

// @ts-ignore
import layout from '@/layout/index.vue'
// @ts-ignore
import fileResourcesConfig from '@/views/ruoyi/fileResourcesConfig.vue'


const defaultRouter: Array<RouteRecordRaw> = [
    {
        path: '/ruoyi',
        name: 'RuoYi',
        component: layout,
        meta: { title: 'RuoYi', icon: '', ishidden: true },
        children: [
            {
                name: 'fileResourcesConfig',
                path: 'fileResourcesConfig',
                component: fileResourcesConfig,
                meta: { icon: '', ishidden: true }
            }
        ]
    }
];

export default defaultRouter