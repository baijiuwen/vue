<template>
    {{ result }}
    <el-button @click="handle">some</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
let result = ref(true)
function handle() {
    result.value = arr.some(item => {
        console.log(item)
        console.log(result.value);
        return item > 8

    })
    console.log(result.value);

}
</script>

<style lang="scss"></style>