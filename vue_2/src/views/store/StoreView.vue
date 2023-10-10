<template>
    <h4>----------组合式显示数据--------------</h4>
    count:{{ countCom }}-<button @click="updateCount">count+3</button><br />
    emailLength:{{ emailLengthCom }}(通过getter作为第二个参数访问getters)<br />
    <input type="text" v-model.lazy="nameTemp" />
    <button @click="updateName">提交名字</button><br />
    通过action异步获取信息:{{ getNameAction }}<br/>
    moduleA:{{store.state.moduleA.isA}}
    <button @click="updateModuleA">修改A</button><br/>
    moduleB:{{store.state.moduleB}}<br/>
    moduleA.getters:{{getterIsA}}<br/>
    <!-- {{mapStatetemp}} -->
    <!-- {{userCount}}<button @click="updateUserCount()">修改to user的count</button> -->
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { useStore, mapState } from 'vuex'
const nameTemp = ref('')
const store = useStore();
const countCom = computed(() => {
    return store.state.count
})
const emailLengthCom = computed(() => {
    return store.getters.getEmailLength
})
function updateCount() {
    store.commit('updateCount', 3)
}
function updateName() {
    store.commit('updateName', nameTemp)
}
const getNameAction = store.dispatch('getUpdateCount')
function updateModuleA(){
    store.commit('moduleA/updateIsA')
}
const getterIsA = computed(()=>{
    return store.getters['moduleA/getIsA']
})
// const mapStatetemp = ()=>{
//     return {
//         ...mapState({

//         })
//     }
// }
// const userCount = inject('sonCount',ref(1))
// const updateUserCount = inject('updateSonCount')
</script>