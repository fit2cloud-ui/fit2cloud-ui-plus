<template>
  <!-- 一级标题 -->
  <h1 class="component-h1">Table 表格</h1>
  <!-- 一级描述 -->
  <p>el-table的扩展，增加选列功能，除了以下额外增加的功能和属性，其他的用法与el-table一致</p>
  <!--内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :description="item.description" :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import BaseTable from "./demo/BaseTable.vue";

const comList = [
  {
    title: "基本用法",
    titleDesc: "继承el-table的功能，增加选列功能，选列功能请看下一节",
    component: BaseTable,
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
