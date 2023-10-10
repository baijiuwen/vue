<template>
    <el-image style="width: 967px; height: 1047px" :src="getIcon('../../assets/consoleImage/console1.png')" />
    <el-image style="width: 967px; height: 1047px" :src="getIcon('../../assets/consoleImage/console2.png')" />
</template>

<script setup lang="ts">
const getIcon = (name: string) => {
    return new URL(name,import.meta.url).href
}
</script>