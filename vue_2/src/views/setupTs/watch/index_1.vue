<template>
    num:{{ num.num }}<br>
    watchNum:{{ num.watchNum }}<br>
    <button @click="numAdd1">num+1</button><br>
    numTmp:{{ numTmp }}<br>
    abc:{{ abc }}
</template>

<script setup lang="ts">
import { reactive, watch, ref } from 'vue';

const numTmp: number[] = reactive([1, 2, 3, 4])
const numTmpp = reactive<number[]>([1, 2, 3, 4])
const numTmppp: number[] = reactive<number[]>([1, 2, 3, 4])
const abc = ref<number>(1)

type numType = {
    num: number,
    watchNum: any
}
const num: numType = reactive({
    num: 1,
    watchNum: ''
})

watch(() => num.num, (nv, ov) => {
    num.watchNum = nv * 2
})

function numAdd1() {
    num.num = num.num + 1
    abc.value = num.watchNum
    // numTmp  = num.num + 1
}

function add(n1: number, n2: number): number {
    const num = n1 + n2
    return num
}

</script>