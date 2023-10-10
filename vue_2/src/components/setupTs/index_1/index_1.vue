<template>
    <h2>---son1---</h2>
    <p>counter:{{ store.counter }}</p>
    <p>store.getCounter:{{ store.getCounter }}</p>
    <p>store.doubleCount:{{ store.doubleCount }}</p>
    <button @click="store.increment">store.increment</button>
</template>

<script setup lang="ts">
import { useStoreInfo } from '@/stores/index_1/storeInfo';

const store = useStoreInfo()
</script>