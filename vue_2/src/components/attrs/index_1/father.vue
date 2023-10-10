<template>
    <p>---父组件---</p>
    $attrs-{{ this.$attrs }}<br/>
    <button @click="consoleAttrs">打印$attrs</button>
    <son class="fatherClass" a="1" b="2" c="3" d="4" @attrsOnclick="consoleAttrsOnclick" @attrsOnclick2="console.log('son1调用father事件方法')" ></son>
</template>

<script>
import son from './son.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        son: son
    },
    methods: {
        consoleAttrs() {
            console.log(this.$attrs)
        },
        consoleAttrsOnclick(){
            console.log('son1调用father事件方法')
        }
    }
}
</script>