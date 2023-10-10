<template>
    <el-row>
        <input ref="input" type="text" v-model.lazy="iconName" autofocus><br>
        <component ref="componentIconc" class="componentIcon" :is="iconName"></component>
        <el-icon size="20">
            <Icon :icon="oldIconName"></Icon>
        </el-icon>
        <el-button @click="handleButton">按钮</el-button>
    </el-row>
</template>

<script setup lang="ts" >
import { ref } from 'vue';
const iconName = ref<string>('Document')
const oldIconName = ref<string>('Document')

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const iconKeys = Object.keys(ElementPlusIconsVue)
const handleButton = () => {
    const num = Math.floor(Math.random() * iconKeys.length + 1)-1;
    oldIconName.value = iconName.value
    iconName.value = iconKeys[num]
}

</script>

<style langt="scss">
.componentIcon {
    width: 20px;
    height: 20px;
}
</style>