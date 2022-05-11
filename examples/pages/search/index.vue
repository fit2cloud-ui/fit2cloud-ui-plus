<template>
  <!-- 一级标题 -->
  <h1 class="component-h1">SearchBar 搜索条</h1>
  <!-- 一级描述 -->
  <p>搜索条，提供快速搜索，高级搜索，自定义按钮</p>
  <!--内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :description="item.description" :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import BaseSearchbar from "./demo/BaseSearchbar.vue";

const comList = [
  {
    title: "基本用法",
    titleDesc: "使用size属性控制大小: large / 默认值(空) / small",
    component: BaseSearchbar,
    // description: "",
  },
];
</script>

<style lang="scss" scoped>
.component-h1 {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
}

.component-block {
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
