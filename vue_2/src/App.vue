<script setup>
import { RouterLink, RouterView } from 'vue-router'
import mouseTracker from './components/slot/mouseTracker/mouseTracker.vue';
</script>

<template>
  <router-link to="/">目录</router-link>-
  <router-link to="/takedown">知识点</router-link>-
  <router-link to="/ts">setup ts</router-link>-
  <router-link to="/utils">小功能</router-link>-
  <a href="http://www.baidu.com" target="_blank">百度</a> <br>
  <mouseTracker><template v-slot="{ x, y }">{{ x }}-{{ y }}</template></mouseTracker>
  <br />-----------------<br />
  <router-view></router-view>
  <router-view name="view1"></router-view>
</template>
