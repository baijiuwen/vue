<template>
    <p>---子组件---</p>
    <ul>
        <li v-for="item in list" ref="sonItems">{{ item }}</li>
    </ul>
    <input ref="sonInput" v-model="message">{{ message }}
</template>

<script>
export default{
    data(){
        return{
            list:[4,5,6],
            message:"sonMessage"
        }
    },
    methods:{
        updateSonInput(msg){
            this.message=msg
        }
    }
}
</script>