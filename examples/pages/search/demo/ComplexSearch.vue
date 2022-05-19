<demo>高级搜索</demo>
<template>
  <div>
    <h4>
      1、使用v-slot:complex
    </h4>
    <fu-search-bar :use-quick-search="false" @exec="search">
      <template v-slot:complex>
        <fu-complex-input field="username" label="用户名" />
        <fu-complex-select field="status" label="状态" :options="options" @change="change" />
        <fu-complex-date-time field="create_time" label="创建时间" />
        <fu-complex-input-number field="number" label="次数" />
      </template>
    </fu-search-bar>
    <pre class="condition_display">{{ condition }}</pre>

    <h4>
      2、使用components数组
    </h4>
    <fu-search-bar :use-quick-search="false" :components="components" @exec="search2" />
    <pre class="condition_display">{{ condition2 }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const options = [
  { label: "启用", value: "Enable" },
  { label: "禁用", value: "Disable" },
]
const components = [
  { field: "name", label: "输入", component: "FuComplexInput" },
  {
    field: "status",
    label: "选项",
    component: "FuComplexSelect",
    options: [
      { label: "启用", value: "Enable" },
      { label: "禁用", value: "Disable" },
    ],
  },
  { field: "date", label: "日期", component: "FuComplexDate" },
  {
    field: "num",
    label: "次数",
    component: "FuComplexInputNumber",
    min: 0,
    max: 999,
    step: 1,
  },
]
const condition = ref({})
const condition2 = ref({})

function change(value: string) {
  console.log(value);
}
function search(condition: any) {
  condition.value = condition;
}
function search2(condition: any) {
  condition2.value = condition;
}

</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #f5f9ff;
}
</style>
