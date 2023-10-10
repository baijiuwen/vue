<template>
    <div>
        <div class="tmpDiv"></div>
        <div>
            <el-input v-model="color" @change="setProperty" style="width: 200px"/>
            <el-color-picker v-model="color" @change="setProperty" show-alpha color-format="rgb" />
            <br>
            <el-button @click="setProperty">修改颜色</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color = ref('red')

function setProperty() {
    document.getElementsByTagName('body')[0].style.setProperty('--primaryColor', color.value);
}
</script>

<style lang="scss" scoped>
$primaryColor: var(--primaryColor, #214089); //#1890ff;


.tmpDiv {
    width: 50px;
    height: 50px;
    background: $primaryColor;
}
</style>