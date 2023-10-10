import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import elPlus from '@/router/elRouter'
import scss from '@/router/scssRouter'
import js from '@/router/jsRouter'
import vue3 from '@/router/vue3Router'
import ruoyi from '@/router/ruoyiRouter'
import vxeTable from '@/router/vxeTable'


// @ts-ignore
import layout from '@/layout/index.vue'
// @ts-ignore
import viewsIndex from '@/views/index.vue'
// @ts-ignore
import oldSidebar from '@/layout/components/sidebar/index.vue'

const defaultRouter: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'home', // 可以通过名字访问vue
        component: layout,
        alias: ['/home'],  // 别名
        props: true, // 将params 变为props
        meta: { title: 'vue', icon: 'House', ishidden: true },   //  可以作用判断用户是否已登陆 可以通过meta值，展示面包屑
        children: [
            {
                name: 'home',
                path: 'home',
                component: viewsIndex,
                meta: { icon: '', ishidden: true }
            },
            {
                name: 'oldSidebar',
                path: 'oldSidebar',
                component: oldSidebar,
                meta: { icon: '', ishidden: true }
            },
            {
                path: 'a',
                name: 'a',
                component: oldSidebar,
                meta: { icon: '', ishidden: true },
                children: [
                    {
                        path: 'setProperty',
                        name: 'b',
                        component: viewsIndex,
                        meta: { icon: '', ishidden: true }
                    },
                    {
                        path: 'whiteSpace',
                        name: 'c',
                        component: viewsIndex,
                        meta: { icon: '', ishidden: true }
                    },
                    {
                        path: 'a',
                        name: 'a',
                        component: viewsIndex,
                        meta: { icon: '', ishidden: true }
                    }
                ]
            }
        ], // 嵌套路由，当一页有很多路由需要切换的时候，就需要用到嵌套路由
    },
    {
        path: '/:pathMatch(.*)*', // /:path(.*)*
        meta: { ishidden: false },
        redirect: () => {     // 路由重定向，就是当一个页面需要切换多个路由的时候，这里面填的是首次进入页面展示的路由组件地址
            return { path: '/home' }
        }
    }
];


const set = new Set([...defaultRouter, ...elPlus, ...scss, ...js, ...vue3, ...ruoyi, ...vxeTable])
export const routes: Array<RouteRecordRaw> = new Array(...set)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title + ''
    }
    next()
})

export default router;