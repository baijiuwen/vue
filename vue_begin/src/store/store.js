import { createStore } from 'vuex'
import moduleA from './moduleA.js'
import moduleB from './moduleB.js'

const store = createStore({
    state() {
        return {
            count: 0,
            name: 'zs',
            age: 24,
            email: '@163.com'
        }
    },
    mutations: { // 通过commit触发方法
        updateCount(state, sum) {
            state.count += sum
        },
        updateName(state, val) {
            state.name = val
        }
    },
    getters: { // 计算属性
        getCount: (state, getters) => {
            return state.count
        },
        getEmailLength: (state, getters) => {
            return getters.getEmail.length
        },
        getEmail: (state, getters) => {
            return state.email
        },
        getName: (state, getters) => {
            return state.name
        }
    },
    actions: {
        getUpdateCount: function (context) { // context 当前store实例
            context.getters.getName
        }
    },
    modules: {
        moduleA,
        moduleB
    }
})

export default store