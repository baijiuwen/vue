<template>
    <P>---子组件---</P>
    <slot></slot>
    <slot name="chacao1"></slot>
    <slot name="chacao2"></slot>
    <button>
        <slot name="chacao3"></slot>
    </button>
    <slot name="chacao4"></slot>
    <slot name="chacao5"></slot>
    <slot name="chacao6">6 chacao6 默认内容</slot><br>
    <button type="submit">
        <slot name="chacao7"><p>7 submit</p></slot>
    </button><br>
    <slot name="chacao8"></slot><br>
    9:<slot name="chacao9"></slot><br>
    10:<slot name="chacao10"></slot>
    <slot name="chacao11" text="向父组件传递信息" :count="count"></slot>
    <slot name="chacao12" :count="count"></slot>
    <div v-for="item in items"><slot name="chacao13" :item="item"></slot></div>
    <div v-for="item in items"><slot name="chacao14" v-bind="item"></slot></div>
    
</template>

<script>
export default{
    data(){
        return{
            count:0,
            items:[
                { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
                { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
            ]
        }
    },
    methods:{
        addCount(){
            count++
        }
    }
}
</script>