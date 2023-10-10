<template>
    <div class="yh-label-input">
        <div class="yh-tag-box" ref="tagBox">
            <el-tag v-for="(tag, index) in tags" :key="index" closable @close="delTag(index)" class="yh-tag">{{ tag
            }}</el-tag>
        </div>
        <el-input v-model="inputData" @keydown.enter.native="addTag" class="yh-tag-input" type="textarea"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputData: '',
            tags: []
        }
    },
    methods: {
        delTag(index) {
            this.tags.splice(index, 1)
            this.$nextTick(() => {
                let el = document.querySelector('.yh-tag:last-child')
                let top = el.offsetTop - el.clientHeight
                let left = el.offsetLeft + el.clientWidth
                document.querySelector('.yh-tag-input  .el-textarea__inner').style.paddingLeft = left + 10 + 'px'
                document.querySelector('.yh-tag-input  .el-textarea__inner').style.paddingTop = top + 10 + 'px'
                document.querySelector('.yh-tag-input  .el-textarea__inner').style.height = el.offsetTop + 40 + 'px'
            })
        },
        addTag() {
            if (!this.inputData) return;
            this.tags.push(this.inputData)
            this.$nextTick(() => {
                let el = document.querySelector('.yh-tag:last-child')
                let top = el.offsetTop - el.clientHeight
                let left = el.offsetLeft + el.clientWidth
                document.querySelector('.yh-tag-input  .el-textarea__inner').style.paddingLeft = left + 10 + 'px'
                document.querySelector('.yh-tag-input  .el-textarea__inner').style.paddingTop = top + 10 + 'px'
                document.querySelector('.yh-tag-input  .el-textarea__inner').style.height = el.offsetTop + 40 + 'px'
            })
            this.inputData = ''
        }
    }
}
</script>

<style>
.yh-label-input {
    position: relative;
    overflow: auto;

}

.yh-tag {
    margin-left: 10px;
    margin-top: 10px;
}

.yh-tag-box {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999;
    align-items: center;
    flex-wrap: wrap;

}
</style>