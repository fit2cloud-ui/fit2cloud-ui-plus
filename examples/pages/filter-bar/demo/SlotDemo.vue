<demo>插槽示例</demo>
<template>
  <div>
    <fu-filter-bar ref="filter" @exec="exec" :result-count="count" size="small">
      <template #tl>
        <el-button>导出数据</el-button>
      </template>
      <template #default>
        <fu-filter-select size="small" label="事件类型" field="type" :options="options" multiple clearable filterable />
        <fu-filter-date size="small" label="操作日期" field="date" />
        <fu-filter-date-time size="small" label="操作时间" field="datetime" />
      </template>
      <template #buttons>
        <fu-table-column-select type="button" :columns="columns" size="small" />
      </template>
    </fu-filter-bar>
  </div>
  <pre class="condition_display">{{ condition }}</pre>
  <fu-table :data="tableData" :columns="columns">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="日期" min-width="120"></el-table-column>
    <el-table-column prop="name" label="姓名" min-width="120"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </fu-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
const options = [{ label: "选项1", value: 1 },
{ label: "选项2", value: 2 },
{ label: "选项3", value: 3 },
{ label: "选项4", value: 4 },
{ label: "选项5", value: 5 },
{ label: "选项6", value: 6 },
{ label: "选项7", value: 7 },
{ label: "选项8", value: 8 },
{ label: "选项9", value: 9 },
{ label: "选项10", value: 10 },
]

const tableData = [{
  date: "2016-05-02",
  name: "张三",
  address: "北京朝阳区财富中心 0室",
}, {
  date: "2016-05-04",
  name: "张三",
  address: "北京朝阳区财富中心 1室",
}, {
  date: "2016-05-01",
  name: "张三",
  address: "北京朝阳区财富中心 2室",
}, {
  date: "2016-05-03",
  name: "张三",
  address: "北京朝阳区财富中心 3室",
}]
const count = ref(0)
const condition = ref({})
const columns = ref([])

function exec(condition: any) {
  condition.value = condition
  count.value = Object.keys(condition).length * 10
}

</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>
