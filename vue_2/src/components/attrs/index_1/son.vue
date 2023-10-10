<template>
    <P>---子组件---</P>
    <p>props接收a b</p>
    $attrs-{{ this.$attrs }}<br />
    <button @click="consoleAttrs">打印$attrs 其中包含事件</button>
    <p>将数据透传至son1 v-bind="$attrs" son2就不会有$attrs</p>
    <div class="clazzz">
        <son1 class="son1" v-bind="$attrs"></son1>
    </div>
    <son2></son2>
</template>

<script>
import son1 from './son1.vue'
import son2 from './son2.vue'

export default {
    props: {
        a: String,
        b: String
    },
    components: {
        son1: son1,
        son2: son2
    },
    methods: {
        consoleAttrs() {
            console.log(this.$attrs)
        }
    }
}
</script>