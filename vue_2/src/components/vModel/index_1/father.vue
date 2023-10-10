<template>
    <p>子组件输入框修改父组件数据</p>
    <son v-model="searchText"></son>---{{ searchText }}<br />
    <son1 v-model:message="message"></son1>---{{ message }}<br />
    <son2 v-model:oneMessage="oneMessage" v-model:twoMessage="twoMessage"></son2>---{{ oneMessage + twoMessage }}<br />
    <son3 v-model:cap.capitalize="cap"></son3>---修饰符.capitalize---{{ cap }}
</template>

<script>
import son from './son.vue'
import son1 from './son1.vue'
import son2 from './son2.vue'
import son3 from './son3.vue'

export default {
    data() {
        return {
            searchText: '默认值',
            message: 'message',
            oneMessage: 'oneMessage',
            twoMessage: 'twoMessage',
            cap: 'cap'
        }
    },
    components: {
        son: son,
        son1: son1,
        son2: son2,
        son3: son3
    }
}
</script>