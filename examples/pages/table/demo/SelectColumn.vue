<demo>表格选列</demo>
<template>
  <div style="margin-bottom: 20px">
    <span>Popover选列(hover)：</span>
    <fu-table-column-select :columns="columns" trigger="hover"/>
    <span style="margin-left: 20px">Popover选列(click)：</span>
    <fu-table-column-select :columns="columns"  />
    <span style="margin-left: 20px">Dialog选列：</span>
    <fu-table-column-select type="dialog" :columns="columns" />
  </div>
  <fu-table :data="tableData" :columns="columns">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="日期" min-width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" min-width="180"></el-table-column>
    <el-table-column prop="address" label="地址" :show="false"></el-table-column>
  </fu-table>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([])

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
