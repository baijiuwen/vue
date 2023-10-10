<template>
    <p>---事件子组件---</p>
    son num:{{ num }}<br />
    <button @click="$emit('updateNum', n)">son通过调用父组件方法修改num</button>
</template>

<script>
export default {
    data() {
        return {
            n: 2
        }
    },
    props: {
        num: Number
    },
    emits: {
        updateNum(payload) {
            // 通过返回值为 `true` 还是为 `false` 来判断
            // 验证是否通过
            // 只是警告不影响运行
            if (payload === Number) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>