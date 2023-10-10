const moduleA = {
    namespaced: true,
    state() {
        return {
            moduleA: 'moduleA',
            isA: 'isA'
        }
    },
    mutations: {
        updateModuleA(state) {
            state.moduleA = 'moduleAAA'
        },
        updateIsA(state) {
            state.isA = 'updateIsA'
        }
    },
    getters: {
        getIsA(state, getters, rootState) {
            return state.isA
        }
    }
}

export default moduleA