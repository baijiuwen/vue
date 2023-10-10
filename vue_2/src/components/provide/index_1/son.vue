<template>
    <p>---inject-son---</p>
    {{ one }}-{{ two }}-{{ three }}-{{ message }}-{{ defaultMessage }}--{{ user }}
</template>

<script>
export default {
    // inject: ['one', 'two', 'three']
    inject: {
        one: {
            from: 'one'
        },
        two: {
            from: 'two'
        },
        three: {
            from: 'three'
        },
        message: {
            from: 'message'
        },
        defaultMessage: {
            from: 'defaultMessage',
            default: 'default value'
        },
        user: {
            // 对于非基础类型数据，如果创建开销比较大，或是需要确保每个组件实例
            // 需要独立数据的，请使用工厂函数
            default: () => ({ name: 'John' })
        }
    }
}
</script>