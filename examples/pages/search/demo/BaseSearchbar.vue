<demo>基本用法</demo>
<template>
  <div>
    <div>
      <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search" size="large" />
      <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search" @close="close" />

      <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search" size="small" />
    </div>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const components = [
  { field: "name", label: "姓名", component: "FuComplexInput" },
  {
    field: "status",
    label: "状态",
    component: "FuComplexSelect",
    options: [{ label: "启用", value: "Enable" }, { label: "禁用", value: "Disable" }],
    change: (val: any) => {
      console.log(val)
    }
  },
  {
    field: "groups",
    label: "区域",
    component: "FuComplexMixSelect",
    options: [{ label: "北区", value: "1" }, { label: "南区", value: "2" }, { label: "东区", value: "3" }],
  }
]
const condition = ref({})

function close() {
  console.log('关闭高级搜索弹出框')
}
function search(condition: any) {
  condition.value = condition
}


</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>
