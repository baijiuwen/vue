<template>
    <p>---setupSon---</p>
    <p>msg:{{ msg }}</p>
</template>

<script setup>
import { ref, useAttrs, useSlots } from 'vue';

const msg = ref('msg')

// defineProps()
const props = defineProps({
    // one: String,
    two: {
        type: Number,       // 数据类型
        default: 2,         // 默认值
        required: true,         // 必传项
        validator: (value) => {
            return value >= 0       // 校验
        }
    },
    // three: String,
    // num: Number,
    // objOne: String,
    // objTwo: String
})
// defineEmits()
const emits = defineEmits(['change', 'delete'])
// defineExpose()
defineExpose({
    msg
})
// useSlots() useAttrs()
const slots = useSlots()
const attrs = useAttrs()
</script>