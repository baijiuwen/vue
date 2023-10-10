<template>
    <input type="text" :value="message" @input="$emit('update:message', $event.target.value)" />
</template>

<script>
export default {
    props: ['message'],
    // emits: ['update:message']
}
</script>

