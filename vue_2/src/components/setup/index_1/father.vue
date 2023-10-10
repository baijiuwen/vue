<template>
    <p>---setupFather---</p>
    <input ref="input" v-model="msg.msg">{{ msg.msg }}<br>
    <button @click="inputUpdate">
        <P>inputUpdate</P>
    </button>
    <button @click="setupSonButton">
        <p>修改son msg</p>
    </button>
    <son ref="setupSon"></son>
</template>

<script setup>
//  setup 函数还要在beforeCreate()钩子之前执行
import { ref, reactive } from 'vue';
import son from './son.vue'         // 组件引用可直接使用 setup一个生命周期钩子

// 通过ref控制当前组件dom标签
const msg = reactive({msg:"msg"}) // setup 创建响应对象
const input = ref(null)       // 通过ref获取dom对象 格式 const ref名字 = ref(null)
function inputUpdate() {
    // msg.msg = "inputUpdate"          // 响应式修改变量
    input.value.value = "inputUpdate"   // 第一个.value获取input标签 第二个.value获取标签中value属性  只修改input标签显示信息
}
// 通过ref控制子组件dom标签
const setupSon = ref(null)
function setupSonButton() {
    setupSon.value.msg = "fatherRefUpdate"
}
</script>