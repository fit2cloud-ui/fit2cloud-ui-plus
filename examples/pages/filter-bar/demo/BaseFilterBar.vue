<demo>基本用法</demo>
<template>
  <div>
    <h4>
      1、使用slot
    </h4>
    <FuFilterBar ref="filterRef" @exec="exec" :result-count="count" size="default">
      <template #default>
        <FuFilterSelect size="default" label="事件类型" field="type" :options="options" multiple clearable filterable
                        use-select-all/>
        <FuFilterDate size="default" label="操作日期" field="date"/>
        <FuFilterDateTime size="default" label="操作时间" field="datetime"/>
        <FuFilterInputText size="default" label="客户名称" field="customer"/>
      </template>
    </FuFilterBar>
    <h4>
      1、使用components传参
    </h4>
    <fu-filter-bar ref="filterRef" @exec="exec" :result-count="count" size="default" :components="components"/>
  </div>
  <pre class="condition_display">{{ condition }}</pre>
</template>

<script setup lang="ts">
import {ref} from "vue"

const options = [{label: "选项1", value: 1},
  {label: "选项2", value: 2},
  {label: "选项3", value: 3},
  {label: "选项4", value: 4},
  {label: "选项5", value: 5},
  {label: "选项6", value: 6},
  {label: "选项7", value: 7},
  {label: "选项8", value: 8},
  {label: "选项9", value: 9},
  {label: "选项10", value: 10},
]
const components = [
  {
    field: "groups",
    label: "区域",
    component: "FuFilterSelect",
    options: [{label: "北区", value: "1"}, {label: "南区", value: "2"}, {label: "东区", value: "3"}],
    multiple: true,
    clearable: true,
    filterable: true
  },
  {
    field: "date",
    label: "操作日期",
    component: "FuFilterDate"
  },
  {
    field: "customer",
    label: "客户名称",
    component: "FuFilterInputText"
  }
]

const count = ref(0)
const condition = ref({})

function exec(c: any) {
  condition.value = c
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
