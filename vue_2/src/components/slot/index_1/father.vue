<template>
    <P>---父组件---</P>
    <P>父组件向子组件插槽slot中插入内容</P>
    <mouseTracker><template v-slot="{x,y}">{{ x }}-{{ y }}</template></mouseTracker>
    <son>
        <p>默认:默认插槽slot 不使用template模板均放入默认插槽</p>
        <template v-slot:chacao1><p>1 向名字为chacao1的插槽中插入内容 使用v-slot</p></template>
        <template #chacao2><p>2 向名字为chacao2的插槽中插入内容 使用#语法糖</p></template>
        <template #chacao3><p>3 插槽可以在标签内</p></template>
        <template #chacao4><p>4 </p><zujian></zujian></template>
        <template #chacao5><p>5 插槽可以使用父组件数据:{{ message }}</p></template>
        <template #chacao7/>
        <template #chacao8><button @click='huhuanchacao'><p>8 互换9和10插槽 通过互换插槽name</p></button></template>
        <template v-slot:[chacao9]>---9 与 10 互换位置</template>
        <template #[chacao10]>---10 与 9 互换位置</template>
        <template #chacao11={text,count}><p>11:{{ text }}-{{ count }}-不可以修改</p><button @click="count++"><p>11 count++</p></button></template>
        <template #chacao12="chacao12Msg"><p>12:{{ chacao12Msg.count }}</p></template>
        <template #chacao13={item}><p>13:{{ item.body }}-{{ item.username }}-{{ item.likes }}</p></template>
        <template #chacao14={body,username,likes}><p>14:{{ body }}-{{ username }}-{{ likes }}</p></template>
    </son>
</template>

<script>
import son from './son.vue'
import zujian from './zujian.vue'
import mouseTracker from '../mouseTracker/mouseTracker.vue'

export default{
    data(){
        return {
            message:"父组件message",
            chacao9:"chacao9",
            chacao10:"chacao10"
        }
    },
    components:{
        son:son,
        zujian:zujian,
        mouseTracker:mouseTracker
    },
    methods:{
        huhuanchacao(){
            let tmp = this.chacao9
            this.chacao9 = this.chacao10
            this.chacao10 = tmp
        }
    }
}
</script>