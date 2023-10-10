
<template>
  <div>
    <!-- 菜单 -->
    <div class="tabs">
      <span v-for="(item,index) in tabList"
            @click="toTabDetail(item)"
            :key="index">{{ item.title }}</span>
    </div>
    <!-- 公司介绍 -->
    <div class="tab_content"
         id="gsjs">
      <p>公司介绍</p>
    </div>
    <!-- 联系我们 -->
    <div class="tab_content"
         id="lxwm">
      <p>联系我们</p>
    </div>
    <!-- 公司地址 -->
    <div class="tab_content"
         id="gsdz">
      <p>公司地址</p>
    </div>
  </div>
</template>
 
<script>
import pinyin from 'js-pinyin'
pinyin.setOptions({ checkPolyphone: false, charCase: 1 }); // 1小写0大写，默认大写
export default {
  data () {
    return {
      tabList: [
        {
          title: '公司介绍'
        },
        {
          title: '联系我们'
        },
        {
          title: '公司地址'
        }
      ]
    }
  },
  methods: {
    toTabDetail ({ title }) {
      const id = `#${pinyin.getCamelChars(title)}` // pinyin.getCamelChars获取字符串每个字首字母
      this.$nextTick(() => {
        window.scrollTo({
          top: this.getOffsetTopByBody(document.querySelector(id)),
          behavior: 'smooth' // 开启平滑滚动
        })
      })
    },
    // 获取元素相对于body的高度
    getOffsetTopByBody (el) {
      let offsetTop = 0
      while (el && el.tagName !== 'BODY') {
        offsetTop += el.offsetTop
        el = el.offsetParent
      }
      return offsetTop
    },
  }
}
</script>
 
<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: center;
  margin: 100px 0;
  span {
    border: 1px solid red;
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
  }
}
.tab_content {
  width: 60vw;
  height: 80vh;
  border: 1px solid red;
  margin: 10vh auto;
}
</style>

<template>
    <div>
        <div id="left">
            <a class="section-link" data-scroll="" href="#数组语法">数组语法</a><br>
            <a class="section-link active" data-scroll="" href="#用在组件上">用在组件上</a>
        </div>
        <div id="right">
            <a href="#用在组件上" class="headerlink" title="用在组件上" data-scroll>用在组件上</a>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <a href="#数组语法" class="headerlink" title="数组语法" data-scroll>数组语法</a>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">
    
    </script>
    
    <style lang="scss">
    #left {
      width: 200px;
      float: left;
    }
    
    #right {
      width: 500px;
      float: left;
    }
    </style>