import { createRouter, createWebHashHistory ,createWebHistory } from 'vue-router'
import propRoutes from './prop'

// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import Error from '../views/404Error.vue' //修改为路由懒加载
import User from '../views/User.vue'
import Son1 from '../views/Son1.vue'
import Son2 from '../views/Son2.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        alias: ['/home'],  // 别名
        props: true, // 将params 变为props
        beforeEnter: (to, from) => {
            console.log('路由独享守卫');
        }
    },
    {
        path: '/home',
        // redirect:'/'     // 重定向
        // redirect:{name : 'home'},
        redirect: (to) => {
            return { path: '/' }
        }
    },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: 'son1',
                component: Son1,
                name: 'SonName1'
            },
            {
                path: 'son2',
                component: Son2,
                name: 'SonName2'
            }
        ]
    },
    {
        path: '/user/:id(\\d+)+', // *（0或多个） +（1或多个）?（0或1个）
        components: {
            default: User,
            view1: Son1,
            view2: Son2
        }
    },
    {
        path: '/:pathMatch(.*)*', // /:path(.*)*
        component: () => import('../views/404Error.vue')
    },
    {
        path:'/meta',
        component:()=>import('../views/Meta.vue'),
        meta:{ msg : '---路由元信息---'},
        beforeEnter:(to,from)=>{
            console.log(to.meta.msg);
        }
    },
    {
        path:'/tmp',
        component: ()=>import('../tmp/index.vue'),
        meta:{ msg: 'tmp' }
    }
]

const routers = new Set([...routes, ...propRoutes])
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    mode: 'history', // 去掉url中的#
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes : routers // `routes: routes` 的缩写
    
})

export default router