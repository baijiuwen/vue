import { defineStore } from 'pinia'

export const useStoreInfo = defineStore('storeInfo', {
    // state: () => ({      两种创建state方式
    //         counter: 1
    // }),
    state: () => {
        return {
            counter: 1
        }
    },
    getters: {
        doubleCount: (state) => state.counter * 2,
        getCounter(): Number {
            return this.counter
        },
        plusOneCount(state) {
            return state.counter + 5
        }
    },
    actions: {
        increment() {
            this.counter++
        },
        randomizeCounter() {
            this.counter = Math.round(100 * Math.random())
        },
    },
    persist: {      // 固化插件
        // enabled: true, // 开启存储
        // strategies: [ // 指定存储的位置以及存储的变量都有哪些，该属性可以不写，
            //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
            // { storage: localStorage, paths: ["count"] },
            // paths 是一个数组，如果写了 就会只存储 count 变量，当然也可以写多个。
        // ]
    },
})