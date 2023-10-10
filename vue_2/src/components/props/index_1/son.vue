<template>
    <p>--子组件--</p>
    one:{{ this.one }}-two:{{ this.two }}-three:{{ this.three }}-num:{{ this.num }}<br />
    传递对象-接收为对象属性-objOne:{{ objOne }}---objTwo:{{ objTwo }}
</template>

<script>
export default {
    // props: ['one', 'two', 'three', 'num'],
    props: {
        one: String,
        two: {
            type: Number,       // 数据类型
            default: 2,         // 默认值
            required: true,         // 必传项
            validator: (value) => {
                return value >= 0       // 校验
            }
        },
        three: String,
        num: Number,
        objOne: String,
        objTwo: String
    },
    // emits:[],    声名接收事件，未声名的事件会透传，未被props接收的属性也会透传   未被接收的透传Attribute会存在$attr中
    data() {
        return {
            sonPost: ""
        }
    },
    methods: {
        getPostObjOne() {
            sonPost = this.sonPost.objOne
        }
    }
}
</script>