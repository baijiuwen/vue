<template>
{{ arr }}<br>
{{ filterArr }}
</template>

<script setup lang="ts">
const arr = [1,2,3,4,5,6,7,8,9,0,'-','=','a','b','c','d','f','g','h','hj']

const filterArr = arr.filter(item => {
    // console.log(item);
    // console.log(typeof item);
    
    return (typeof item === "number")
})
</script>

<styel lang="scss">

</styel>