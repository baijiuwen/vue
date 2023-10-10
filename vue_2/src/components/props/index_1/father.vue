<template>
    <p>--父组件--</p>
    <button @click="updateThree">修改three</button>
    <button @click="num = num + 1">addNum</button>
    <son one="one" :two="num" :three='three' :num='num' v-bind="post"></son>
</template>

<script>
import son from './son.vue'

export default {
    data() {
        return {
            three: '动态绑定 v-bind three',
            num: 0,
            post: {
                objOne: "objOne",
                objTwo: "objTwo"
            }
        }
    },
    components: {
        son: son
    },
    methods: {
        updateThree() {
            this.three = '动态绑定 v-bind three (修改后)'
        }
    }
}
</script>