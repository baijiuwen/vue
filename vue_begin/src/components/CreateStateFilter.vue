<template>
    <p>显示createStateFilter结果:{{ returnResult }}</p>
    <button @click="result()">调用createStateFilter方法</button>
    <button @click="result(1)">调用有参数的createStateFilter方法</button>
    <button @click="updateReturnResult">修改returnResult</button>
</template>
<script setup>
import { ref } from 'vue';

const returnResult = ref(true)
function createStateFilter(queryString) {
    return (state) => {
        return (state.value.indexOf(queryString) !== -1);
    };
}
function result(queryString) {
    returnResult.value = queryString ? createStateFilter(queryString) : false
}
function updateReturnResult() {
    if (returnResult.value === true) {
        returnResult.value = false
    } else {
        returnResult.value = true
    }
}
</script>