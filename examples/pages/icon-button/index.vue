<template>
  <!-- 文档说明 -->
  <document-table :data="attributes"/>
  <!-- 一级标题 -->
  <h1 class="component-h1">IconButton 图标按钮</h1>
  <!-- 一级描述 -->
  <p>支持ElIcon，也可以自定义图标</p>
  <!-- BaseTable内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :description="item.description" :component="item.component"/>
  </div>
</template>

<script setup lang="ts">
import BaseIconButton from "./demo/BaseIconButton.vue";
import SlotDemo from "./demo/SlotDemo.vue";
import {attributes} from "./attributes";

const comList = [
  {
    title: "基本用法",
    titleDesc: "可以设置不同主题，自定义图标颜色、大小",
    component: BaseIconButton,
    description: ""
  },
  {
    title: "插槽用法",
    titleDesc: "使用Slot自定义图标",
    component: SlotDemo,
    description: ""
  },
]
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
