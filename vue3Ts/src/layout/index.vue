<template>
  <div>
    <div id="sidebar-container" class="sidebar-container" :style="{'width': sidebarPinia.paddingLeftWidth}">
      <sidebar></sidebar>
    </div>
    <div class="app-container" id="rightStyle" :style="{ 'margin-left': sidebarPinia.paddingLeftWidth }">
      <div >
        <a @click="handelSidebar">
          <el-icon size="20px">
            <Expand v-if="sidebarPinia.isSidebar" />
            <Fold v-else />
          </el-icon>
        </a>
      </div>
      <router-view></router-view>

    </div>
  </div>
</template>

<script setup lang="ts">
// import sidebar from './components/sidebar/index.vue'
import sidebar from './sidebar/index.vue'
import { useSidebar } from '@/pinia/sidebarPinia'

const sidebarPinia = useSidebar()
function handelSidebar() {
  sidebarPinia.setSidebar()
}

</script>

<style lang="scss" scoped>
$base-sidebar-width: var(--base-sidebar-width, '200px');

#sidebar-container {
  -webkit-transition: width .28s;
  transition: width 0.28s;
  // width: $base-sidebar-width !important;
  // width: 64px;
  //background-color: $base-menu-background;
  //background-color: aliceblue;
  height: 100%;
  position: fixed;
  //font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
}

a:hover {
  cursor: pointer;
}

#rightStyle {
  -webkit-transition: margin-left .28s;
  transition: margin-left 0.28s;
}

</style>
