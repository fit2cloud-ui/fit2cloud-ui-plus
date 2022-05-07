<template>
  <!-- 一级标题 -->
  <h1 class="component-h1">Table 表格</h1>
  <!-- 一级描述 -->
  <p>
    el-table的扩展，增加选列功能，除了以下额外增加的功能和属性，其他的用法与el-table一致
  </p>
  <!--内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :description="item.description" :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import BaseTable from "./demo/BaseTable.vue";
import SelectColumn from "./demo/SelectColumn.vue";

const comList = [
  {
    title: "基本用法",
    titleDesc: "继承el-table的功能，增加选列功能，选列功能请看下一节",
    component: BaseTable,
  },
  {
    title: "表格选列",
    titleDesc: "给columns赋值则开启选列功能，选择显示或隐藏某些列",
    component: SelectColumn,
    description: `建议与TableColumnSelect一起使用。设置fix属性或者type属性为selection/index/expand的列不可选择显隐，设置:show="false"的列，默认隐藏`,
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
