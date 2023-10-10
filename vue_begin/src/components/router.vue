<script setup>
import router from '../router/router';
import { nextTick, ref } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router';

const arrays = ref([1, 2, 3, 4])
function toHome() {
    // router.push({path:'/User',params:{ id:1 }})
    // router.push('/User/1212')  // 跳转
    router.replace('/') // 替换当前位置
    // router.go(1) // 前后移动
}

router.beforeEach((to, from, next) => { // to 即将进入的目标信息，from 离开的路由信息
    console.log('全局前置守卫');
    if (1 === 2) { return false } // false 为取消导航
    if (1 === 2) { next() }   // next() 跳转至url
    next()
})
router.beforeResolve((to) => {
    console.log('全局解析守卫');
})
router.afterEach((to, from) => {
    console.log('全局后置钩子');
})

const route = useRoute()    // 获取当前路由对象
// const router = useRouter()   // 获取全部路由对象
</script>

<template>
    <router-link to="/">to home </router-link>-
    <router-link to="/about">to about</router-link>-
    <router-link to="/User/1122">to user (1122)</router-link>-
    <router-link to="/User/acac">to user (acac)</router-link><br />
    <router-link to="/User/1122/1212/1234">to user(多参数)</router-link>-
    <router-link to="/about/son1">to son1</router-link>-
    <router-link to="/about/son2">to son2</router-link>-
    <button @click="toHome">通过push方法</button><br />
    <router-link to="/" replace>替换当前位置</router-link>-
    <router-link to="redi">redirect重定向</router-link>-
    <router-link to="/meta">路由元信息</router-link>
    <h4>-----------显示router-------------</h4>
    <router-view></router-view>
    <br />---------------view1------------------<br />
    <router-view name="view1"></router-view>
    <br />---------------view2------------------<br />
    <router-view name="view2"></router-view>
</template>