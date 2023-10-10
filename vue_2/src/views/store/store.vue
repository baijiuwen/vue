<template>
    store

    <h4>----------选项式显示数据--------------</h4>
    count:$store:{{ $store.state.count }}-计算属性:{{ countCom }}<br />
    <button @click="$store.commit('updateCount', 1)">count+1</button>-
    <button @click="storeStateCountUpdate">count+2</button><br />
    emailLength:{{ emailLengthCom }}<br />
    name : {{ nameCom }} <br />
    {{this.$store.state.moduleA.moduleA}}
    <button @click="moduleAChange">修改moduleA</button><br/>
    {{this.$store.state.moduleB.moduleB}}
    <button @click="moduleBChange">修改moduleB</button>
    <StoreView></StoreView>
</template>

<script>
import StoreView from './StoreView.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
        storeStateCountUpdate() {
            this.$store.commit('updateCount', 2)
        },
        moduleAChange() {
            this.$store.commit('moduleA/updateModuleA')
        },
        moduleBChange(){
            this.$store.commit('updateModuleB')
        }
    },
    computed: {
        countCom() {
            return this.$store.state.count
        },
        emailLengthCom() {
            return this.$store.getters.getEmailLength
        },
        nameCom() {
            return this.$store.getters.getName
        }
    },
    components: {
        StoreView
    }
}
</script>