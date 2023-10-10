<template>
    User:{{ $route.params.id }}-{{$route.params.id.length}}
</template>

<script setup>
import { watch,ref,reactive,provide } from 'vue';
import {onBeforeRouteUpdate} from 'vue-router';
const userCount = ref(3)
const reactiveMsg = reactive({
})
</script>