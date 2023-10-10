<template>
    <p>---事件父组件---</p>
    father num:{{ num }}<br/>
    <button @click="updateNum(1)">father修改num</button>
    <son :num='num' @updateNum="updateNum"></son>
</template>

<script>
import son from './son.vue'

export default {
    data() {
        return {
            num: 0
        }
    },
    components: {
        son: son
    },
    methods: {
        updateNum(n) {
            this.num = this.num + n
        }
    }
}
</script>