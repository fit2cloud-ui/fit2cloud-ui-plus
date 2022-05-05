<template>
  <!-- 文档说明 -->
  <!-- <document-table :data="attributes" /> -->
  <!-- 一级标题 -->
  <h1 class="component-h1">SplitPane 分割面板</h1>
  <!-- 一级描述 -->
  <p>可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。</p>
  <!--内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :description="item.description" :component="item.component" />
  </div>
</template>

<script lang="ts">
export default {
  name: "SplitPaneDoc",
};
</script>

<script setup lang="ts">
import BaseSplit from "./demo/BaseSplit.vue";

// import attributes from "./attributes";

// data() {
//   return {
//     attributes,

//   };
// },
const comList = [
  {
    title: "基本用法",
    titleDesc: "",
    component: BaseSplit,
    description: "",
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
