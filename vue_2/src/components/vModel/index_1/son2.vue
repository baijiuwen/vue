<template>
    <input type="text" :value="oneMessage" @input="$emit('update:oneMessage',$event.target.value)"/>
    <input type="text" :value="twoMessage" @input="$emit('update:twoMessage',$event.target.value)"/>
</template>

<script>
export default {
    props: {
        oneMessage: String,
        twoMessage: String
    }
}
</script>