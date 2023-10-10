
<script setup>
import routerBiaoQian from './components/router.vue'
import store from './components/store.vue'
import HelloWorld from './components/HelloWorld.vue'
import brr from './components/Br.vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import createStateFilter from './components/CreateStateFilter.vue'

const router = useRouter()
function toPagination(){
  window.open('/prop/pagination','_blank')
  // router.push('/prop/pagination','_blank')
}
</script>

<template>
  <h2>----------页面跳转------</h2>
  <div>
    <router-link to="/prop/pagination"> pagination </router-link>
    <a href="http://www.baidu.com" target="_blank">百度</a>
    <button @click="toPagination">pagination</button>
    <input type="file">
  </div>
  <div>
    <h2>----------HelloWorld------</h2>
    <HelloWorld />
    <h2>----------router----------</h2>
    <routerBiaoQian />
    <h2>----------store-----------</h2>
    <store />
    <br/>
    <createStateFilter></createStateFilter><br/>
  </div>
  <brr></brr>
</template>
