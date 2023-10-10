<template>
    includes比较:{{ includesBoolean }}<button @click="doIncludes">includes比较</button><input
        v-model='batchNo'>'SCNY','SEUR','SHKD','SUSD'{{ batchNo }}|<br>
</template>

<script>
export default {
    data() {
        return {
            includesBoolean: false,
            batchNo: ''
        }
    },
    methods: {
        doIncludes() {
            let skipBatchNo = ['SCNY', 'SEUR', 'SHKD', 'SUSD']
            if (skipBatchNo.includes(this.batchNo.trim())) {
                this.includesBoolean = true
            } else {
                this.includesBoolean = false
            }
        }
    }
}
</script>