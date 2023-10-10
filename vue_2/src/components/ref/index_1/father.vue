<template>
    <p>---父组件---</p>
    <input ref="refInput" v-model="message">{{ message }}<br>
    <button @click="updateInput1">
        <p>通过ref修改input1</p>
    </button>
    <button @click="updateInput2">
        <p>通过ref修改input2</p>
    </button>
    <button @click=updateSonInput>
        <p>通过ref修改son的input</p>
    </button>
    <button @click="this.$refs.son.updateSonInput('通过方法修改son数据')">
        <p>通过方法修改son数据</p>
    </button><br>
    <!-- <span>{{ this.$refs.ulItems }}</span><br> -->
    <!-- <span>{{ this.$refs.items }}</span> -->
    <ul ref="ulItems">
        <li v-for="item in list" ref="items">
            {{ item }}
        </li>
    </ul>
    <!-- <input :ref="updateInput1" value="通过:ref可以调用方法"> -->
    <!-- <input :ref="(el)=>{ console.log('ref可以调用方法') }" value="通过:ref可以调用方法"> -->
    <son ref="son"></son>
</template>

<script>
import son from './son.vue'

export default {
    components: {
        son: son
    },
    data() {
        return {
            message: "message",
            list: [1, 2, 3]
        }
    },
    watch: {
    },
    methods: {
        updateInput1() {
            this.message = "input1"
            this.$refs.refInput.value = this.message
        },
        updateInput2() {
            this.$refs.refInput.value = "input2"
        },
        updateSonInput() {
            this.$refs.son.$refs.sonInput.value = "通过ref修改son的input"
            this.$refs.son.message = "通过ref修改son的input"
        }
    },
    mounted() {
        console.log(this.$refs.items)
        console.log(this.$refs.ulItems)
        console.log(this.$refs.son.$refs.items)
    }
}
</script>