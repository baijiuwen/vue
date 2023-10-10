const moduleB = {
    state() {
        return {
            moduleB: 'moduleB'
        }
    },
    mutations: {
        updateModuleB(state) {
            state.moduleB = 'updateModuleB'
        }
    }
}

export default moduleB