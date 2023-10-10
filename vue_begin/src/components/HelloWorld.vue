<script>
import helloSon from './helloSon.vue'
import caCao from './cacao.vue'
export default ({
  data() {
    return {
      temp: 0,
      msg: 'hello',
      newQuestion: 0,
      oldQuestion: 0
    }
  },
  methods: {
    addTemp(num) {
      this.temp += num
    },
    updateMsg() {
      if ('hello' == this.msg) {
        this.msg = 'hellohello'
      } else {
        this.msg = 'hello'
      }
    }
  },
  computed: {
    tempCom: {
      get: function () {
        return this.temp
      },
      set: function (val) {
        this.temp = val
      }
    },
    msgCom: function () {
      return '修改后的msg:' + this.msg
    }
  },
  mounted() {
    console.log('mounted')
  },
  watch: {
    temp(newQuestion, oldQuestion) {
      this.newQuestion = newQuestion
      this.oldQuestion = oldQuestion
    }
  },
  components: {
    helloSon: helloSon,
    caCao: caCao
  },
  // props:[],
  // props:{},// 接收父组件传值
  // provide:{},
  provide() {   // 向子组件传值
    return {
      name: 'zs',
      age: 25,
      temp:()=>this.temp,
      addTemp:this.addTemp
    }
  },
  // inject:[],    //子组件接收值
  // directives:{},
  // install:()=>{}
})
</script>

<template>
  通过方法修改数据：{{ temp }}
  <input type="button" @click="addTemp(2)" value="temp+2" /><br />
  通过方法响应式修改数据：{{ msg }}<br />
  <input type="text" v-model="msg" />
  <input type="button" @click="updateMsg(hellohello)" value="改变hello" /><br />
  数据的双向绑定：{{ msg }}<br />
  <input type="text" v-model.lazy="msg" /><br />
  计算属性：{{ tempCom }}<br />{{ msgCom }}<br />
  <button @click="tempCom = 15">通过计算属性修改信息</button><br />
  监听器 监听temp:temp新值:{{ newQuestion }}-temp旧值:{{ oldQuestion }}
  <helloSon man="男" woman="女" :msg="msg" @updateMsgSon="updateMsg">
    <template v-slot="defaultMsg"><caCao num="1"></caCao>{{defaultMsg}}</template>
    <template v-slot:slot2><caCao num="2"></caCao></template>
    <template #slot3><caCao num="3"></caCao></template>
    <template #slot4="slot4Msg"><caCao num="4" text="slot4Msg" ></caCao>{{slot4Msg}}-{{slot4Msg.count}}</template>
  </helloSon>
</template>
