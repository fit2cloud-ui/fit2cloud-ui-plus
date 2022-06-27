<template>
  <!-- 文档说明 -->
  <document-table :data="attributes" />
  <!-- 一级标题 -->
  <h1 class="component-h1">Tabs 标签页</h1>
  <!-- 一级描述 -->
  <p>分隔内容上有关联但属于不同类别的数据集合。</p>
  <!--内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import AddCloseTab from "./demo/AddCloseTab.vue";
import { attributes } from "./attributes";
const comList = [
  {
    title: "动态增减标签",
    titleDesc: "增减标签页",
    component: AddCloseTab,
  },
]
</script>

<style lang="scss" scoped>
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
