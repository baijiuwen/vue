import { createRouter, createWebHistory } from 'vue-router'
import { routerIndex1 } from './routerIndex1'
import { takedown } from './takedown'
import { routerSetup } from './routerSetup'
import { routerZuJian } from './routerZuJian'
import { routerTs } from './routerTs'
import { routerUtils } from './routerUtils'
// 1. 定义路由组件.
// 也可以从其他文件导入
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
export const defaultRouter = [
  {
    path: '/home',
    name: 'home', // 可以通过名字访问vue
    component: () => import('@/views/Hello.vue'),
    alias: ['/home'],  // 别名
    props: true, // 将params 变为props
    meta: { title: 'vue' },   //  可以作用判断用户是否已登陆 可以通过meta值，展示面包屑
    hidden: true,      // 是否需要展示该路由是否渲染该路由入口
    children: [], // 嵌套路由，当一页有很多路由需要切换的时候，就需要用到嵌套路由
    beforeEnter: (to, from) => {
      console.log('路由独享守卫');
    },
    // redirect:'/'     // 重定向
    // redirect:{name : 'home'},
    // redirect: (to) => {
      // return { path: '/home' }
    // }
  },
  {
    path: '/:pathMatch(.*)*', // /:path(.*)*
    redirect: (to) => {     // 路由重定向，就是当一个页面需要切换多个路由的时候，这里面填的是首次进入页面展示的路由组件地址
      return { path: '/home' }
    }
  }
]

let routes = new Set([...routerIndex1, ...defaultRouter, ...takedown, ...routerSetup, ...routerZuJian, ...routerTs, ...routerUtils])

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to,from,next)=>{
  // 根据路由元信息设置文档标题
  window.document.title = to.meta.title || 'vue'
  next()
})

export default router
