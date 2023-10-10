<template>
    <el-scrollbar height="100%">
        <el-menu default-active="/home/index" style="width: 100%" router @open="handleOpen" @close="handleClose"
            :collapse="isSidebar.isSidebar" :collapse-transition="false" :unique-opened="true">
            <!-- 链接 -->
            <el-menu-item index="/home">
                <el-icon>
                    <House />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <!-- 子菜单 -->
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <ElementPlus />
                    </el-icon>
                    <span>Element-Plus</span>
                </template>
                <el-sub-menu index="2-1">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>el-table</span>
                    </template>
                    <!-- 菜单分组 -->
                    <el-menu-item-group title="el-table">
                        <el-menu-item index="/elPlus/elTable">el-table</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="/elPlus/editTable">edit-table</el-menu-item>
                    <el-menu-item index="/elPlus/editTable2">edit-table2</el-menu-item>
                    <el-menu-item index="/elPlus/editTable3">edit-table3</el-menu-item>
                    <el-menu-item index="/elPlus/elTableSelect">edit-table-select</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-2">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>el-dialog</span>
                    </template>
                    <el-menu-item index="/elPlus/elDialog">el-dialog</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-3">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>el-tabs</span>
                    </template>
                    <el-menu-item index="/elPlus/elTabs">el-tabs</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-4">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>el-icons</span>
                    </template>
                    <el-menu-item index="/elPlus/elicons">el-icons</el-menu-item>
                </el-sub-menu>
                
                <el-menu-item index="/elPlus/trendsSidebar">trendsSidebar</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>pinia</span>
                </template>
                <el-menu-item index="/pinia">pinia</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>scss</span>
                </template>
                <el-menu-item index="/scss/setProperty">setProperty</el-menu-item>
                <el-menu-item index="/scss/whiteSpace">whiteSpace</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
                <template #title>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>TDesign</span>
                </template>
                <el-menu-item index="/tDesign">td</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="6">
                <template #title>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>JavaScript</span>
                </template>
                <el-menu-item index="/js/some">some</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { useSidebar } from '@/pinia/sidebarPinia'

const isSidebar = useSidebar()
function handleOpen() {

}

function handleClose() {

}
</script>

<style lang="scss" scoped></style>