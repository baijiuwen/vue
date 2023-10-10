<template>
    <div>
        插槽:{{props.num}}
        <span v-if="props.num==1">(默认default插槽)</span>
        <span v-if="props.num==2">(具名插槽)</span>
        <span v-if="props.num==3">(具名插槽，简写方式)</span><br/>
        {{text}}{{count}}
    </div>
</template>

<script setup>
const props = defineProps([
    'num','text','count'
])
</script>