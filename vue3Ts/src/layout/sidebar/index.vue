<template>
    <el-scrollbar height="100%">
        <el-menu default-active="/home/index" style="width: 100%" router @open="handleOpen" @close="handleClose"
            :collapse="isSidebar.isSidebar" :collapse-transition="false" :unique-opened="true">
            <el-menu-item index="/home">
                <el-icon>
                    <House />
                </el-icon>
                <span>home</span>
            </el-menu-item>
            <el-menu-item index="/oldSidebar">
                <el-icon>
                    <House />
                </el-icon>
                <span>oldSidebar</span>
            </el-menu-item>
            <sidebar-item v-for="item in routes" :menu="item" :path="item.path"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { useSidebar } from '@/pinia/sidebarPinia'

import { routes } from "@/router";

import SidebarItem from "@/layout/sidebar/SidebarItem.vue"


const isSidebar = useSidebar()
function handleOpen() {

}

function handleClose() {

}
</script>

<style lang="scss">
.el-menu-item span{
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>