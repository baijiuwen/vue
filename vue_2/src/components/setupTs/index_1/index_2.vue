<template>
    <h2>---son2---</h2>
    <p>counter:{{ store.counter }}</p>
    <p>store.plusOneCount:{{ store.plusOneCount }}</p>
    <button @click="counterAdd()">通过sotre.counter=0方式修改数据</button>
</template>

<script setup lang="ts">
import { useStoreInfo } from '@/stores/index_1/storeInfo';

const store = useStoreInfo()

function counterAdd() {
    store.counter = store.counter + 1
}
</script>