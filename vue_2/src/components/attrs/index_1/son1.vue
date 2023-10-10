<template>
    <P>---son1子组件---</P>
    $attrs-{{ this.$attrs }}<br/>
    $attrs.c-{{ this.$attrs.c }}<br/>
    $attrs.onAttrsOnclick-<button @click="$emit('attrsOnclick')">调用father组件中attrsOnclick事件</button>
    $attrs.onAttrsOnclick2-<button @click="$emit('attrsOnclick2')">调用father组件中attrsOnclick2事件</button><br>
    onAttrsOnclick-{{ this.$attrs.onAttrsOnclick }}<br>
    onAttrsOnclick2-{{ this.$attrs.onAttrsOnclick2 }}
</template>

<script>
export default{
    props:{
        inheritAttrs: false
    }
}
</script>

