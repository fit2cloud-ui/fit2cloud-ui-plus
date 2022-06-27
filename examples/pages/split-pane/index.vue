<template>
  <!-- 文档说明 -->
  <document-table :data="attributes" />
  <!-- 一级标题 -->
  <h1 class="component-h1">SplitPane 分割面板</h1>
  <!-- 一级描述 -->
  <p>可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。</p>
  <!--内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import BaseSplit from "./demo/BaseSplit.vue";
import NestSplit from "./demo/NestSplit.vue";
import ResizerType from "./demo/ResizerType.vue";
import CustomResizer from "./demo/CustomResizer.vue";
import { attributes } from "./attributes";
const comList = [
  {
    title: "基本用法",
    titleDesc: "",
    component: BaseSplit,
  },
  {
    title: "嵌套用法",
    titleDesc: "",
    component: NestSplit,
  },
  {
    title: "线状分割",
    titleDesc: "分割线可定义为线状，也可以禁止拖动",
    component: ResizerType,
  },
  {
    title: "自定义分割节点",
    titleDesc: "分割节点可替换图标，如果发现宽度不合适，可自行调整分割线宽度样式",
    component: CustomResizer,
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
