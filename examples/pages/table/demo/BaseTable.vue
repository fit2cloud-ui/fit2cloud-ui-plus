<demo>基本用法</demo>

<template>
  <fu-table :data="tableData" style="width: 100%" ref="table">
    <template v-slot:default>
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </template>
    <template v-slot:append>Append Slot</template>
  </fu-table>
  <el-button @click="clearSelection">use elTable clearSelection</el-button>
</template>

<script setup lang="ts">
import {ref} from "vue";

const table = ref(null)
const clearSelection = () => {
  const ref: any = table.value;
  if (ref) {
    ref.refElTable.clearSelection();
  }
};
const tableData = [
  {
    date: "2016-05-02",
    name: "张三",
    address: "北京朝阳区财富中心 0室",
  },
  {
    date: "2016-05-04",
    name: "张三",
    address: "北京朝阳区财富中心 1室",
  },
  {
    date: "2016-05-01",
    name: "张三",
    address: "北京朝阳区财富中心 2室",
  },
  {
    date: "2016-05-03",
    name: "张三",
    address: "北京朝阳区财富中心 3室",
  }
]
</script>
