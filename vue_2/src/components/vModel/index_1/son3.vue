<template>
    <input type="text" :value="cap" @input="emitValue" />
</template>

<script>
export default {
    props: {
        cap: String,
        capModifiers: {
            default: () => ({})
        }
    },
    methods: {
        emitValue(e) {
            let value = e.target.value
            if (this.capModifiers.capitalize) {
                value = value + '.capitalize'
            }
            this.$emit('update:cap', value)
        }
    }
}
</script>