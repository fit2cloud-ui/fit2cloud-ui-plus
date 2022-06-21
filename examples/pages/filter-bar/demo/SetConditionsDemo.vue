<demo>回显条件</demo>
<template>
  <div>
    <fu-filter-bar ref="filterRef" @exec="exec" :result-count="count" size="small">
      <template #default>
        <fu-filter-select size="small" label="事件类型" field="event_type" :options="options" clearable filterable />
        <fu-filter-select size="small" label="操作用户" field="user" :options="users" multiple clearable filterable />
        <fu-filter-date size="small" label="操作日期" field="date" />
        <fu-filter-date-time size="small" label="操作时间" field="datetime" />
      </template>
    </fu-filter-bar>
  </div>
  <pre class="condition_display">{{ condition }}</pre>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue"
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
const users = [{ label: "用户1", value: 1 },
{ label: "用户2", value: 2 },
{ label: "用户3", value: 3 },
{ label: "用户4", value: 4 },
{ label: "用户5", value: 5 },
{ label: "用户6", value: 6 },
{ label: "用户7", value: 7 },
{ label: "用户8", value: 8 },
{ label: "用户9", value: 9 },
{ label: "用户10", value: 10 },
]
const count = ref(0)
const condition = ref({})
const filterRef = ref()

function init() {
  filterRef.value?.setConditions({ user: { value: [2, 3, 4] } })
}
function exec(c: any) {
  condition.value = c
  count.value = Object.keys(c).length * 10
}
onMounted(() => {
  nextTick(() => {
    init()
  });
})
</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>
