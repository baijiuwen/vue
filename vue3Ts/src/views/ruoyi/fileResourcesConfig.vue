<template>
    <el-image style="width: 640px; height: 360px" src="http://localhost:9300/statics/2.jpg" />
</template>

<script setup lang="ts">
const getIcon = (name: string) => {
    return new URL(name,import.meta.url).href
}
</script>