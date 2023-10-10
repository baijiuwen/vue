<template>
    <p>---provide-father---</p>
    {{ one }}-{{ two }}-{{ three }}-{{ message }}
    <br><input v-model="message"/>
    <son></son>
</template>

<script>
import { computed } from 'vue'
import son from './son.vue'

export default {
    data() {
        return {
            one: 1,
            two: 2,
            three: 3,
            message: 'message'
        }
    },
    components: {
        son: son
    },
    /*
    provide: {
        message:'message'
    },
    */
    provide() {
        return {
            one: this.one,
            two: this.two,
            three: this.three,
            message: computed(() => this.message)
        }
    }
}
</script>