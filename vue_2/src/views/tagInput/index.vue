<template>
    @saveTag="saveTag" :tags="['12']"
    <tagInput></tagInput>
    <tagInputTwo></tagInputTwo>
</template>

<script>
import tagInput from '@/components/tagInput/tagInput.vue'
import tagInputTwo from '@/components/tagInput/tagInputTwo.vue'

export default {
    components: { tagInput, tagInputTwo }
}

</script>