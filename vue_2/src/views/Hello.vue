<template>
    页面宽度:{{ windowinnerWidth }}<br>
    <p>---选项式---</p>
    <router-link to="/prop/win">弹窗</router-link><br>
    <router-link to="/dynamic/index_1">动态组件</router-link><br>
    <RouterLink to="/prps/index_1">props传值</RouterLink><br>
    <router-link to="/on/index_1">事件(@-$emit)</router-link><br>
    <router-link to="/vModel/index_1">v-model动态绑定</router-link><br>
    <router-link to="/attrs/index_1">$attrs透传</router-link><br>
    <router-link to="/slot/index_1">slot插槽</router-link><br>
    <router-link to="/provide/index_1">依赖注入provide-inject</router-link><br>
    <router-link to="/async/index_1">异步组件</router-link><br>
    <router-link to="/ref/index_1">this.$refs模板引用</router-link><br>
    <router-link to="/functions/includes">includes比较</router-link><br>
    <p>---组合式---</p>
    <router-link to="/setup/index_1">setup</router-link><br>
    <router-link to="/router/index_1">router使用(children,components)</router-link><br>
    <router-link to="/store/store">选项式+组合式 store</router-link>
    <p>---组件---</p>
    <router-link to="/number/index_1">金额千分位</router-link><br>
    <router-link to="/windowwidth/index_1">umy-ui列表字段宽度</router-link><br>
    <router-link to="/tagInput/index">tagInput输入框</router-link><br>
</template>

<script>
export default ({
    name: "组件名字",
    inheritAttrs: false, // 透传 默认为true
    expose: [],      //  只有列表中的数据方法可以被父组件发现   不写默认全暴露 []不写内容为全部不暴露
    data() {
        return {
            windowinnerWidth: window.innerWidth,
            person: {
                name: '被监听变量'
            }
        }
    },
    methods: {          // 方法

    },
    computed: {         // 计算属性
        tempCom: {
            get: function () {
                return this.temp
            },
            set: function (val) {
                this.temp = val
            }
        },
        msgCom: function () {
            return '修改后的msg:' + this.msg
        }
    },
    mounted() {         // 生命周期
        window.onresize = () => {
            this.windowinnerWidth = window.innerWidth
        }
    },
    watch: {// 简单监听
        pageSize(newVal, oldVal) {
            console.log(newVal, oldVal)
        },
        person: { // 对对象进行深度监听
            handler(nv) {
                console.log(nv)
            },
            immediate: true,   // 在侦听器创建时立即触发回调。第一次调用时，旧值将为 undefined。
            deep: true         // 如果源是对象或数组，则强制深度遍历源，以便在深度变更时触发回调。详见深层侦听器。
            // flush：true        // 调整回调的刷新时机。详见回调的触发时机及 watchEffect()。
            // onTrack：true      // onTrigger：调试侦听器的依赖关系。详见侦听器调试。
        },
        'person.name': { // 对对象的某一个属性进行深度监听
            handler(nv) {
                console.log(nv)
            },
            immediate: true,
            deep: true

        }
    },
    components: {       // 注册组件

    },
    directives: {    // 注册指令

    }
})
</script>