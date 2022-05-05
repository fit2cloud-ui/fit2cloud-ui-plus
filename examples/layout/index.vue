<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app-wrapper">
    <div class="app-header">
      <app-header>header</app-header>
    </div>
    <div class="app-container">
      <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
        <div class="app-main">
          <sidebar class="sidebar-container" />
          <div class="main-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./layout.scss" as *;
.app-wrapper {
  height: 100%;
  width: 100%;
}
.app-header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #004a71;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 1500;
}
.app-container {
  height: 100%;
  padding: 0;
}
.app-main {
  width: 1140px;
  margin: 0 auto;
}

.main-wrapper {

  // width: 100%;
  :v-deep.page-container {
    position: relative;
  }
}
</style>