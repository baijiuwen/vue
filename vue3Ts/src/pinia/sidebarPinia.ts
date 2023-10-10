import { defineStore } from 'pinia'

export const useSidebar = defineStore('isSidebar', {
    // state: () => ({      两种创建state方式
    //         counter: 1
    // }),
    state: () => {
        return {
            isSidebar: false,
            paddingLeftWidth: '181px'
        }
    },
    getters: {
    },
    actions: {
        setSidebar(){
            this.isSidebar = !this.isSidebar
            if (this.isSidebar) {
                this.paddingLeftWidth = '64px'
              } else {
                this.paddingLeftWidth = '181px'
              }
        }
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