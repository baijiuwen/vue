<template>
    <el-menu-item v-if="menu.meta.ishidden && hasChildren(menu)" :index="resolvePath(menu.path)">
        <template #title>
            <el-icon>
                <Icon :icon="randomIcon(menu.meta)"></Icon>
            </el-icon>
            <span>{{ menu.name }}</span>
        </template>
    </el-menu-item>
    <el-sub-menu v-else-if="menu.meta.ishidden" :index="resolvePath(menu.path)">
        <template #title>
            <el-icon>
                <Icon :icon="randomIcon(menu.meta)"></Icon>
            </el-icon>
            <span>{{ menu.name }}</span>
        </template>
        <sidebar-item v-for="item in menu.children" :menu="item" :path="resolvePath(menu.path)"></sidebar-item>
    </el-sub-menu>
</template>

<script setup lang="ts" >
import SidebarItem from "@/layout/sidebar/SidebarItem.vue"
// import path from 'path'
import path from 'path-browserify'

const props = defineProps(['menu', 'path'])
const menu = props.menu
const propsPath = props.path
const hasChildren = (menu) => {
    if (menu.children && menu.children.length > 0) {
        // console.log(menu.children)
        return false;
    }
    return true;
}
// const icon = menu.meta.icon? menu.meta.icon: ""

// console.log('menu '+menu)
// console.log('children '+menu?.children)
// console.log('meta '+menu?.meta.icon)
// console.log(path + '/' +menu.path)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const randomIcon = (meta) => {
    if (meta.icon && meta.icon.length > 0) {
        return meta.icon
    } else {
        const iconKeys = Object.keys(ElementPlusIconsVue)
        const num = Math.floor(Math.random() * iconKeys.length + 1) - 1;
        return iconKeys[num]
    }
}

const resolvePath = (routePath, routeQuery) => {
    if(propsPath === ''){
        return routePath
    }
    if (routeQuery) {
        let query = JSON.parse(routeQuery);
        return { path: path.resolve(propsPath, routePath), query: query }
    }
    return path.resolve(propsPath, routePath)
}

</script>

<style langt="scss"></style>