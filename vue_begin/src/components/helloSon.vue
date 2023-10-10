<template>
    <div>
        <h4>---------显示子组件(组合式子组件):---------</h4>
        {{ state.count }}
        <button @click="addCount">改变count</button>
        {{ sttt }}
        <button @click="addSttt">改变sttt</button><br />
        <span>计算属性结果：{{ sumCom }}</span><br />
        条件渲染 v-if:
        <span v-if="vIf == 'A'">A</span>
        <span v-else-if="vIf == 'B'">B</span>
        <span v-else-if="vIf == 'C'">C</span>
        <span v-else>其他字母</span><br />
        <button @click="updateVIf()">修改vIf</button>
        <input type="text" v-model="vIf" /><br />
        v-show:
        <span v-show="vIf == 'A'">A</span>
        <span v-show="vIf == 'B'">B</span>
        <span v-show="vIf == 'C'">C</span><br />
        列表渲染 v-for (需要:key保证列表key value对应):
        <ul>
            <li v-for="(sum, index) in state.stateArray" :key="sum">值：{{ sum }} 索引：{{ index }}</li>
        </ul>
        监听sttt 新值：{{ state.newQuestion }}-旧值：{{ state.oldQuestion }}<br />
        props传值:man:{{ man }}-woman:{{ woman }}-msg:{{ msg }}<br />
        <button @click="$emit('updateMsgSon')">改变父组件msg</button>
        <button @click="emit('updateMsgSon')">改变父组件msg2</button><br />
        模板ref:
        <ul>
            <li v-for="item in arr" ref="moban">{{ item }}</li>
        </ul>
        依赖注入 provide/inject:{{ name }}:{{ age }}:{{proTemp()}}<br/>
        <button @click="proAddTemp(2)">修改proTemp</button>
        <h4>-------------子组件提供插槽--------------</h4>
        <slot :defaultMsg="'默认插槽'"></slot>
        <slot name="slot2"></slot>
        <slot name="slot3"></slot>
        <slot name="slot4" text="向父组件传递系信息" count="1"></slot>
        <slot name="defaultSlot"><div>默认插槽不传值时显示</div></slot>
    </div>
</template>

<script setup>
import { computed, reactive, ref, onMounted, watch, inject, provide } from 'vue'
const state = reactive({
    count: 0,
    stateArray: [1, 2, 3, 4],
    newQuestion: 0,
    oldQuestion: 0
})
function addCount() {
    state.count++
}
const sumCom = computed(() => {
    return state.count + sttt.value
})
const sttt = ref(3)
function addSttt() {
    sttt.value++
}
const vIf = ref('A')
function updateVIf() {
    if (vIf.value == 'A') {
        vIf.value = 'B'
    } else if (vIf.value == 'B') {
        vIf.value = 'C'
    } else if (vIf.value == 'C') {
        vIf.value = 'A'
    } else {
        vIf.value = 'C'
    }
}
onMounted(() => {
    console.log('onMounted');
})
watch(
    sttt,
    (newQuestion, oldQuestion) => {
        state.newQuestion = newQuestion
        state.oldQuestion = oldQuestion
    },
    { deep: true })//深度监听
watch(() => state.count, (newQuestion) => {
    console.log('监听reactive的响应式对象需要()=>函数' + newQuestion);
})
const props = defineProps(['man', 'woman', 'msg'])
const emit = defineEmits(['updateMsgSon'])
const arr = ref(['li1', 'li2', 'li3'])
const name = inject('name','这是默认值')
const age = inject('age','第二个参数是默认值')
const proTemp = inject('temp')
const proAddTemp = inject('addTemp')
const sonCount = ref(3)
// provide('sonCount',sonCount)
// function updateSonCount(){
//     sonCount.value++
// }
// provide('updateSonCount',updateSonCount)
</script>